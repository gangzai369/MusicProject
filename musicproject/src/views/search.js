// 导入react核心库
import React from 'react'
// 导出index组件类
export default class search extends React.Component{
    constructor(){
        super()
        this.state={
            // 搜索内容显示
            msg:'',
            // 控制显示隐藏
            isshow:'block',//热搜显示
            show:'none',//搜索显示
            inpShow:'none',//input框重置按钮
            // 热门词条
            hotList:[
                {
                    id:1,
                    name:"耗子尾汁"
                },
                {
                    id:2,
                    name:"到此为止"
                },
                {
                    id:3,
                    name:"执迷不悟"
                },
                {
                    id:4,
                    name:"陈奕迅新歌"
                },
                {
                    id:5,
                    name:"许嵩"
                },
                {
                    id:6,
                    name:"薛之谦"
                },
                {
                    id:7,
                    name:"李荣浩"
                },
                {
                    id:8,
                    name:"周杰伦motic"
                },
            ]
        }
    }
    // 封装input输入改变事件
    toSearch(e){
        // 判断是否输入内容
        if(e.target.value.length===0){
            this.setState({
                isshow:'block',
                show:'none',
                inpShow:'none',
                msg:''
            })
        }else{
            this.setState({
                isshow:'none',
                show:'block',
                inpShow:'block',
                msg:e.target.value
            })
        }
    }
    // 封装点击清空input事件
    delVal(){
        // 清空input中的数据
        document.getElementById('inp').value = ''
        this.setState({
            msg:'',
            isshow:'block',//热搜显示
            show:'none',//搜索显示
            inpShow:'none',//input框重置按钮
        })
    }
    render(){
        let {hotList,isshow,show,msg,inpShow,imgUrl} = this.state
        return(
            <div className="search">
                <div className="bigbox">
                    <div className="input">
                        <p className='p1'>
                            &#9801;
                        </p>
                        <p className='p2'>
                            <input id="inp" onChange={this.toSearch.bind(this)} type="text" placeholder="请输入歌手、歌曲、专辑" />
                        </p>
                        <p className='p3' style={{display:inpShow}}>
                            <button onClick={this.delVal.bind(this)}>&#10005;</button>
                        </p>
                    </div>
                </div>
                {/* 热门搜索 */}
                <div className="hotsearch" style={{display:isshow}}>
                    <p>热门搜索</p>
                    <div className="out">
                    {
                        hotList.map(item=>{
                            return (
                                <div className="box" key={item.id}>
                                    {item.name}
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
                {/* 搜索内容显示 */}
                <div className="searchname" style={{display:show}}>
                    <div className="name">
                        <p>搜索 "{msg}"</p>
                    </div>
                </div>
            </div>
        )
    }
}