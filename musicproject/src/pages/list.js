// 导入react核心库
import React from 'react'
import imgs from '../assets/img/u1.jpg'
// 引入css 
import '../assets/css/list.css'
// 导出index组件类
export default class list extends React.Component{
    constructor(){
        super()
        
        this.state={
            imgUrl:imgs,
            data:{
                id:1001,
                firstName:'我对你又何止是执迷不悟',
                autor:'稔知',
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
                        {
                            id:5,
                            name:'Never(狼殿下战爱版预告宣传曲)',
                            autor:'Never(狼殿下战爱版预告宣传曲)'
                        },
                ]
            }
        }
    }
    // 组件加载调用接口获取数据
    render(){
        // 解构导入
        let {data,imgUrl} = this.state
        return(
            <div className="list">
                <div className="header">
                    <div className="img"></div>
                    <div className="outer">
                        <div className="left"></div>
                        <div className="right">
                            <p className="p1">{data.firstName}</p>
                            <p className="p2">{data.autor}</p>
                        </div>
                    </div>
                </div>
                <div className="s-list">
                    <p>歌曲列表</p>
                </div>
                {/* 音乐列表直接循环 */}
                <div className="songlist">
                    {
                        data.songList.map((item,index)=>{
                            return (
                                <div className="bigbox" key={item.id}>
                                    <div className="smbox">
                                        <div className="number">{index=index<10?'0'+index:index}</div>
                                        <div>
                                            <p className="p1">{item.name}</p>
                                            <p className="p2">{item.autor}</p>
                                        </div>
                                    </div>
                                    <button>&#9835;</button>
                                </div>
                            )
                        })
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