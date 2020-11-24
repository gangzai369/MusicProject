// 导入react核心库
import React from 'react'
// 引入二级路由组件
import Rank from '../views/rank'
import Recom from '../views/recommend'
import Search from '../views/search'
// 引入css样式
import '../App.css'
import '../index.css'
// 引入路由组件
import { Switch, Route, Redirect, NavLink } from 'react-router-dom'
// 导出index组件类
export default class index extends React.Component {
    render() {
        return (
            <div className="index">
                <div className="header">
                    <span className="span1">网易云音乐</span>
                    <span className="span2">下载App</span>
                </div>
                {/* 导航栏 */}
                <div className="nav">
                    <NavLink className="navBox" activeClassName="active" to="/index/recom">推荐音乐</NavLink>
                    <NavLink className="navBox" activeClassName="active" to="/index/rank">热歌榜</NavLink>
                    <NavLink className="navBox" activeClassName="active" to="/index/search">搜索</NavLink>
                </div>
                {/* 二级路由出口 */}
                <Switch>
                    <Route path="/index/rank" component={Rank}></Route>
                    <Route path="/index/recom" component={Recom}></Route>
                    <Route path="/index/search" component={Search}></Route>
                    {/* 二级路由重定向 */}
                    <Redirect to="/index/recom"></Redirect>
                </Switch>
            </div>
        )
    }
}