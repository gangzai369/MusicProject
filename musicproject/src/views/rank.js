// 导入react核心库
import React from 'react'
// 引入css
import '../assets/css/rank.css'
// 引入图标
import {  PlayCircleOutlined } from '@ant-design/icons';
// 引入接口
import {getHotSong} from '../axios'
// 导出index组件类
export default class rank extends React.Component{
    constructor(){
        super()
        this.state={
            songList:[]//歌曲列表
        }
    }
    componentDidMount(){
        getHotSong({
            id:3778678
        })
        .then(res=>{
            
            if(res.code===200){
                this.setState({
                    songList:res.playlist.tracks.filter((item,idx)=>{
                        return idx<20
                    })
                })
            }
            console.log(this.state.songList);
        })
    }
    render(){
        let myDate = new Date();
        let mouth = myDate.getMonth();
        let day = myDate.getDate();
        // 解构数据
        let {songList} = this.state
        return(
            <div className="rank">
                <div className="r-header">
                    <div className="h-bg"></div>
                    <p>更新日期:{mouth+1}月{day}日</p>
                </div>
                {/* 音乐列表直接循环 */}
                <div className="songlist">
                    {
                        songList.map((item,index)=>{
                            return (
                                <div className="bigbox" key={item.id}>
                                    <div className="smbox">
                                        <div className="number">{index=(index+1)<10?'0'+(index+1):index+1}</div>
                                        <div>
                                            <p className="p1">{item.name}</p>
                                            <p className="p2">
                                                <span></span>&nbsp;
                                                {item.ar.map(val=>{
                                                    return (
                                                        <i key={val.name}>{val.name}&nbsp;</i>
                                                    )
                                                })}
                                            </p>
                                        </div>
                                    </div>
                                    <button><PlayCircleOutlined/></button>
                                </div>
                            )
                        })
                    }
                </div>
                {/* 底部 */}
                <div className="bottom">
                    查看完整表单&gt;
                </div>
            </div>
        )
    }
}