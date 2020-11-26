// 导入react核心库
import React from 'react'
// 引入css
import '../assets/css/search.css'
// 引入接口
import { getHotSearch,  getSearch } from '../axios'
// 引入图标
import { PlayCircleOutlined } from '@ant-design/icons';

// 导出index组件类
export default class search extends React.Component {
    constructor() {
        super()
        this.state = {
            // 搜索内容显示
            msg: '',
            // 控制显示隐藏
            isshow: 'block',//热搜显示
            show: 'none',//搜索显示
            inpShow: 'none',//input框重置按钮
            hotList: [],// 热门词条
            aboutList1: [],//输入词条进行关联查询
            aboutList2: [],//输入词条进行关联查询
            songList: [],//保存歌曲列表
        }
        this.toInp = React.createRef();
    }
    // 点击跳转播放页
    toPlay(id) {
        this.props.history.push(`/play?id=${id}`)
    }
    // 封装input输入改变事件
    toSearch(e) {
        // 判断是否输入内容
        if (e.target.value.length === 0) {
            this.setState({
                isshow: 'block',
                show: 'none',
                inpShow: 'none',
                msg: ''
            })
        } else {
            this.setState({
                isshow: 'none',
                show: 'block',
                inpShow: 'block',
                msg: e.target.value
            })
            // 调用搜索接口
            getSearch({
                keywords: e.target.value
            })
                .then(res => {
                    if (res.code === 200) {
                        this.setState({
                            songList: res.result.songs.filter((item, idx) => idx < 6)
                        })
                    }
                })
        }
    }
    // 封装点击清空input事件
    delVal() {
        // 清空input中的数据
        document.getElementById('inp').value = ''
        this.setState({
            msg: '',
            isshow: 'block',//热搜显示
            show: 'none',//搜索显示
            inpShow: 'none',//input框重置按钮
            songList: []
        })
    }
    // 点击关键词关键词进入到input框中
    toInput(keywords) {
        this.toInp.current.value = keywords
        this.setState({
            msg: keywords,
            isshow: 'none',
            show: 'block',
            inpShow: 'block',
        })
        // 调用搜索接口
        getSearch({
            keywords
        })
            .then(res => {
                if (res.code === 200) {
                    this.setState({
                        songList: res.result.songs.filter((item, idx) => idx < 6)
                    })
                }
            })
    }
    // 挂载节点
    componentDidMount() {
        getHotSearch()
            .then(res => {
                if (res.code === 200) {
                    this.setState({
                        hotList: res.result.hots
                    })
                }
            })
        
    }
    render() {
        let { hotList, isshow, show, msg, inpShow, imgUrl, songList } = this.state
        return (
            <div className="search">
                <div className="bigbox">
                    <div className="input">
                        <p className='p1'>
                            &#9801;
                        </p>
                        <p className='p2'>
                            <input ref={this.toInp} id="inp" onChange={this.toSearch.bind(this)} type="text" placeholder="请输入歌手、歌曲、专辑" />
                        </p>
                        <p className='p3' style={{ display: inpShow }}>
                            <button onClick={this.delVal.bind(this)}>&#10005;</button>
                        </p>
                    </div>
                </div>
                {/* 热门搜索 */}
                <div className="hotsearch" style={{ display: isshow }}>
                    <p>热门搜索</p>
                    <div className="out">
                        {
                            hotList.map(item => {
                                return (
                                    <div className="box" key={item.first} onClick={this.toInput.bind(this, item.first)}>
                                        {item.first}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                {/* 搜索内容显示 */}
                <div className="searchname" style={{ display: show }}>
                    <div className="name">
                        <p>搜索 "{msg}"</p>
                    </div>
                    {
                        songList.map(item => {
                            return (
                                <div className="bigbox" key={item.id}>
                                    <div className="smbox">
                                        <p className="p1">{item.name}</p>
                                        <p className="p2"><span></span> {item.artists.map(val => {
                                            return (
                                                <i key={val.id}>{val.name}&nbsp;</i>
                                            )
                                        })}
                                        -<i>{item.name}</i>
                                        </p>
                                    </div>
                                    <button onClick={() => this.toPlay(item.id)}><PlayCircleOutlined /></button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}