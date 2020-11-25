// 导入react核心库
import React from 'react'
// 引入css样式
import '../assets/css/recommend.css'

// 引入图标
import { CustomerServiceOutlined, PlayCircleOutlined } from '@ant-design/icons';
// 引入接口
import { getMusic, getNewMusic, getBannerList } from '../axios'
import Axios from 'axios';
// 导入ant
import { message, } from 'antd';
// 引入swipper
import '../assets/css/swiper-bundle.css'
import Swiper from 'swiper'
// 导出index组件类
export default class recom extends React.Component {
    constructor() {
        super()
        this.state = {
            dataList: [],//推荐歌单列表
            songList: [],//新歌列表
            bannerList: []//轮播图
        }
    }
    // 点击跳转到列表页
    toList(id) {
        this.props.history.push(`/list?id=${id}`)
    }
    // 点击跳转播放页
    toPlay(id) {
        this.props.history.push(`/play?id=${id}`)
    }
    // 挂载函数
    componentDidMount() {
        // 使用axios.all方法
        Axios.all([getMusic({ limit: 6 }), getNewMusic(), getBannerList()])
            .then(Axios.spread((res1, res2, res3) => {
                if (res1.code === 200 && res2.code === 200 && res3.code === 200) {
                    this.setState({
                        dataList: res1.result,
                        songList: res2.result,
                        bannerList: res3.banners
                    })
                } else {
                    message.error('网络错误，请稍后再试')
                }
            }));
    }
    // 轮播效果放到更新函数中
    componentDidUpdate(){
        // 实例化swipper
        new Swiper('.swiper-container',{
            autoplay:{
                delay:2000
            },
            loop: true,
        });
    }
    render() {
        // 解构数据
        const { dataList, songList, bannerList } = this.state;
        return (
            <div className="recom">
                {/* 插入轮播图 */}
                <div className='banner'>
                    <div className="header"></div>
                    <div className="b-box">
                        <div className="swiper-container">
                            <div className="swiper-wrapper">
                                {bannerList.map(item => {
                                    return (
                                        <div className="swiper-slide" key={item.imageUrl}>
                                            <img src={item.imageUrl} />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                {/* 推荐歌单 */}
                <div className="title">
                    <span className="span1"></span>
                    <span className="span2">推荐歌单</span>
                </div>
                <div className="rBox">
                    {
                        dataList.map(item => {
                            return (<div className="sBox" key={item.id} onClick={() => this.toList(item.id)}>
                                <img src={item.picUrl} />
                                <p>{item.name}</p>
                                <div className="sum">
                                    <CustomerServiceOutlined />&nbsp;
                                    <span>{parseInt(item.playCount / 1000) / 10} 万</span>
                                </div>
                            </div>)
                        })
                    }
                </div>
                {/* 最新音乐 */}
                <div className="title1">
                    <span className="span1"></span>
                    <span className="span2">最新音乐</span>
                </div>
                {/* 音乐列表直接循环 */}
                <div className="songlist">
                    {
                        songList.map(item => {
                            return (
                                <div className="bigbox" key={item.id}>
                                    <div className="smbox">
                                        <p className="p1">{item.name}</p>
                                        <p className="p2"><span></span> {item.song.artists.map(val => {
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
                {/* 底部栏 */}
                <div className="footer">
                    <div className="text">网易云音乐</div>
                    <div className="textapp">打开APP，发现更多好音乐&gt;</div>
                    <p>网易公司版权所有©1997-2020   杭州乐读科技有限公司运营</p>
                </div>
            </div>
        )
    }
}