// 导入react核心库
import React from 'react'
// 引入css
import '../assets/css/play.css'
// 引入jQuery
import $ from 'jquery'
// 引入图片
import img from '../assets/img/song1.jpg'
import img1 from '../assets/img/z-9.png'
import img2 from '../assets/img/z-5.png'
import img3 from '../assets/img/z-1.png'
import img4 from '../assets/img/z-2.png'
import img5 from '../assets/img/z-4.png'
// 引入接口
import { songDetail, playUrl, getLyric, } from '../axios'
// 引入axios
import axios from 'axios'
// 引入qustring
import qsString from 'querystring'
// 导出index组件类
export default class play extends React.Component {
    constructor() {
        super()
        this.state = {
            imgUrl: img,
            conf: img1,
            pole: img2,
            pmid: img3,
            pics1: img4,
            pics2: img5,
            songdetail: {},
            imgg: '',
            songUrl: '',
            lyric: "",//保存歌词
            playTime: "00:00",
            bool: false//保存开关的状态
        }
        //创建一个播放器的ref
        this.audio = React.createRef();
        //创建一个播放图表的ref
        this.playIcon = React.createRef();
    }
    componentDidMount() {
        let qs = this.props.location.search.slice(1);
        axios.all([playUrl({
            id: qsString.parse(qs).id,
        }), getLyric({
            id: qsString.parse(qs).id,
        })])
            .then(axios.spread((songUrl, lyric) => {
                if (songUrl.code === 200) {
                    this.setState({
                        songUrl: songUrl.data[0].url,
                    })
                }
                if (lyric.code === 200) {
                    let lyricInfo = '';
                    lyricInfo = lyric.lrc.lyric;//接收歌词
                    // 设置正则，取值
                    let reg = /\[(.*?)](.*)/g
                    let obj = {};//空对象用来接收数据
                    // 替换replace
                    lyricInfo.replace(reg, (a, b, c) => {
                        // a,b,c为匹配的每一项
                        b = b.slice(0, 5);//截取所需的数据
                        obj[b] = c;
                    });
                    this.setState({
                        lyric: obj
                    }, () => {
                        let audio = this.audio.current;//接收audio组件
                        audio.ontimeupdate = () => {    //定义组件监听事件，实时进行监听
                            // console.log(audio.currentTime,'xxxxx');
                            // 监控audio组件的时间变化,时间格式转换以便进行匹配
                            let nowTime = this.formateTime(audio.currentTime);//获取到11:11格式的时间数据
                            // 使用if中in方法，获取有歌词的时间
                            if (nowTime in this.state.lyric) {
                                this.setState({
                                    // 得到时间，注意此时nowTime 中保存的都是有歌词的时间
                                    playTime: nowTime
                                }, () => {
                                    // 调取歌词滚动的方法
                                    this.moveLyric()
                                })
                            }
                        }
                    })
                }
            }))
        songDetail({
            ids: qsString.parse(qs).id
        })
            .then(res => {
                if (res.code === 200) {
                    this.setState({
                        songdetail: res.songs[0],
                        imgg: res.songs[0].al.picUrl
                    })
                }
            })
    }
    // 封装歌词滚动函数
    moveLyric() {
        //active此时为高亮显示的p标签,注意jQuery直接取出的是一个集合
        let active = $('.active')[0];
        // index为高亮显示p标签的位置索引
        let index = $('.words').children().index(active);
        let offSet = 20;
        if (active.offsetTop > 3) {
            //更改它位置
            $(".words").css("transform", `translateY(-${index * offSet}px)`);
        }
    }
    //封装一个事件格式化的方法
    formateTime(timer) {
        let minutes = (Math.floor(timer / 60) + "").padStart(2, "0");
        let seconds = (Math.floor(timer % 60) + "").padStart(2, "0");
        return `${minutes}:${seconds}`;
    }
    // 封装控制暂停播放的事件
    toControl() {
        this.setState(
            {
                bool: !this.state.bool,
            },
            () => {
                if (this.state.bool) {
                    //如果bool是真 代表暂停 出现图标 ，音乐停止
                    this.playIcon.current.style.display = "block";
                    this.audio.current.pause();
                } else {
                    //如果bool是假 代表播放 没有图标 ，音乐正在播放
                    this.playIcon.current.style.display = "none";
                    this.audio.current.play();
                }
            }
        );
    }
    render() {
        // 解构数据
        let { lyric, songdetail, songUrl, playTime, imgUrl, conf, pole, pmid, pics1, pics2, imgg } = this.state

        return (
            <div className="play">
                <div className="context" style={{ backgroundImage: 'url(' + imgg + ')' }}></div>
                <div className="header">
                    <img src={conf} alt="" />
                    <span> 网易云音乐</span>
                </div>
                <div className="pole">
                    <img src={pole} alt="" />
                </div>
                <div className="p-mid" onClick={this.toControl.bind(this)}>
                    <img className="pic1" src={pmid} alt="" />
                    <img className="pic2" src={imgg ? imgg : pics1} alt="" />
                    <img className="pic3" src={pics2} alt="" ref={this.playIcon} />
                </div>
                {/* 歌曲信息，渲染数据 */}
                <div className="s-info">
                    <div className="title">{songdetail.name}</div>
                    <div className="info">
                        {/* 歌词存放处 */}
                        <div className="words">
                            {
                                //把对象转化成数组去循环  Object.entries把对象转化成枚举型的数组，类似于for in
                                Object.entries(lyric).map((item, idx) => {
                                    // 此时的item是一个个数组对象两个元素，第一个时间，第二个，歌词
                                    if (playTime == item[0]) {
                                        return (
                                            <p key={idx} className="active">
                                                {item[1]}
                                            </p>
                                        );
                                    } else {
                                        return <p key={idx}>{item[1]}</p>;
                                    }
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="audio_box">
                    <audio ref={this.audio} src={songUrl} autoPlay></audio>
                </div>
            </div>
        )
    }
}