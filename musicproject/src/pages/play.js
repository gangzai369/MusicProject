// 导入react核心库
import React from 'react'
// 引入css
import '../assets/css/play.css'
// 引入图片
import img from '../assets/img/song1.jpg'
import img1 from '../assets/img/z-9.png'
import img2 from '../assets/img/z-5.png'
import img3 from '../assets/img/z-1.png'
import img4 from '../assets/img/song1.jpg'
import img5 from '../assets/img/z-4.png'
// 导出index组件类
export default class play extends React.Component{
    constructor(){
        super()
        this.state = {
            imgUrl:img,
            conf:img1,
            pole:img2,
            pmid:img3,
            pics1:img4,
            pics2:img5,
        }
    }
    render(){
        // 解构数据
        let {imgUrl,conf,pole,pmid,pics1,pics2} = this.state
        return(
            <div className="play">
                <div className="context"></div>
                <div className="header">
                    <img src={conf} alt="" />
                    <span> 网易云音乐</span>
                </div>
                <div className="pole">
                    <img src={pole} alt="" />
                </div>
                <div className="p-mid">
                    <img className="pic1" src={pmid} alt="" />
                    <img className="pic2" src={pics1} alt="" />
                    <img className="pic3" src={pics2} alt="" />
                </div>
                {/* 歌曲信息，渲染数据 */}
                <div className="s-info">
                    <div className="info">
                        <div className="title">{}</div>
                        {/* 歌词存放处 */}
                    </div>
                </div>
            </div>
        )
    }
}