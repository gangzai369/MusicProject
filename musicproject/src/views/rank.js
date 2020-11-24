// 导入react核心库
import React from 'react'
// 导出index组件类
export default class rank extends React.Component{
    constructor(){
        super()
        this.state={
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
                {/* 底部 */}
                <div className="bottom">
                    查看完整表单&gt;
                </div>
            </div>
        )
    }
}