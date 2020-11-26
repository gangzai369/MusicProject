// 导入react核心库
import React from 'react'
import imgs from '../assets/img/u1.jpg'
import qstring from 'querystring'
// 引入css 
import '../assets/css/list.css'
// 引入图标
import { CustomerServiceOutlined } from '@ant-design/icons';
// 引入接口
import {getHotSong} from '../axios'

// 导出index组件类
export default class list extends React.Component{
    constructor(){
        super()
        
        this.state={
            imgUrl:imgs,
            data:{}
        }
    }
    componentDidMount(){
        let qs = this.props.location.search.slice(1)
        // console.log(qs);
        getHotSong({
            id:qstring.parse(qs).id
        })
        .then(res=>{
            if(res.code===200){
                this.setState({
                    data:res.playlist
                })
            }
            console.log(this.state.data);
        })
    }
    // 组件加载调用接口获取数据
    render(){
        // 解构导入
        let {data,imgUrl} = this.state
        return(
            <div className="list">
                <div className="header">
                    <div className="img" style={{backgroundImage: 'url(' +data.coverImgUrl + ')'}}></div>
                    <div className="outer">
                        <div className="left">
                            <img src={data.coverImgUrl}></img>
                            <div className="sum">
                                    <CustomerServiceOutlined />&nbsp;
                                    <span>{parseInt(data.playCount / 1000) / 10} 万</span>
                                </div>
                        </div>
                        <div className="right">
                            <p className="p1">{data.name}</p>
                            <p className="p2">
                                <img src={data.creator?data.creator.avatarUrl:''}></img>
                                <i>&nbsp;{data.creator?data.creator.nickname:''}</i>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="s-list">
                    <p>歌曲列表</p>
                </div>
                {/* 音乐列表直接循环 */}
                <div className="songlist">
                    {data.tracks?
                        data.tracks.map((item,index)=>{
                            return (
                                <div className="bigbox" key={item.id}>
                                    <div className="smbox">
                                        <div className="number">&nbsp;{index+1}</div>
                                        <div>
                                            <p className="p1">{item.name}</p>
                                            <p className="p2">
                                                <span></span>
                                                {
                                                    item.ar.map(val=>{
                                                        return (
                                                            <i key={val.name}>{val.name}</i>
                                                        )
                                                    })
                                                }
                                                -<i>{item.name}</i>
                                            </p>
                                        </div>
                                    </div>
                                    <button>&#9835;</button>
                                </div>
                            )
                        }):''
                    }
                </div>
                {/* 底部评价 */}
                <div className="assess">
                    <div className="text">
                        <p>全部评价</p>
                    </div>
                    {/* 要循环的评价内容 */}
                    <div className="context">
                        <img src={imgUrl} alt="" />
                        <div className="c-user">
                            <p className="p1">人间不值得</p>
                            <p className="p2">2020年11月11日</p>
                            <p className="p3">这首歌真的不错啊这首歌真的不错啊这首歌真的不错啊这首歌真的不错啊这首歌真的不错啊这首歌真的不错啊</p>
                        </div>
                        <button className="c-supper">&#9828;</button>
                    </div>
                </div>
                {/* 查看更多评价 */}
                <div className="b-assess">
                    <p>查看更多评价 &#10132;</p>
                </div>
            </div>
        )
    }
}