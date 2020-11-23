// 导入react核心库
import React from 'react'
// 引入css样式
import '../App.css'
// 导入图片
import img1 from '../assets/img/1.jpg'
import img2 from '../assets/img/2.jpg'
import img3 from '../assets/img/3.jpg'
import img4 from '../assets/img/4.jpg'
import img5 from '../assets/img/5.jpg'
import img6 from '../assets/img/6.jpg'
// 导出index组件类
export default class recom extends React.Component{
    constructor(){
        super()
        this.state={
            dataList:[
                {
                    id:1,
                    img:img1,
                    msg:'「Dream Time」驶入淡紫色梦境'
                },
                {
                    id:2,
                    img:img2,
                    msg:'我想把这些甜甜的歌都唱给你听'
                },
                {
                    id:3,
                    img:img3,
                    msg:'『精选翻唱』万人血书求完整～'
                },
                {
                    id:4,
                    img:img4,
                    msg:'我对你又何止是执迷不悟'
                },
                {
                    id:5,
                    img:img5,
                    msg:'“所以你长篇大论换来了什么.”'
                },
                {
                    id:6,
                    img:img6,
                    msg:'做全世界的大人，只做你一个人的小朋友'
                }
            ],
            songList:[
                {
                    id:1,
                    name:'失眠飞行(原唱：接个吻，开一枪/沈一模啊啊啊)',
                    autor:'一条小团团OvO-失眠飞行'
                },
                {
                    id:2,
                    name:'Never(狼殿下战爱版预告宣传曲)',
                    autor:'Never(狼殿下战爱版预告宣传曲)'
                },
                {
                    id:3,
                    name:'天性使燃',
                    autor:'Higher Brothers'
                },
                {
                    id:4,
                    name:'我愿意：影视剧《最初的相遇，最后的别离》中文主题曲',
                    autor:'摩登兄弟刘宇宁-我愿意'
                },
            ]
        }
    }
    render(){
        // 解构数据
        const {dataList,songList} = this.state;
        return(
            <div className="recom">
                <div className="title">
                    <span className="span1"></span>
                    <span className="span2">推荐歌单</span>
                </div>
                {/* 推荐歌单 */}
                <div className="rBox">
                    {
                        dataList.map(item=>{
                            return (<div className="sBox" key={item.id}>
                                <img src={item.img} />
                                <p>{item.msg}</p>
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
                        songList.map(item=>{
                            return (
                                <div className="bigbox" key={item.id}>
                                    <div className="smbox">
                                        <p className="p1">{item.name}</p>
                                        <p className="p2">{item.autor}</p>
                                    </div>
                                    <button>&#9835;</button>
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