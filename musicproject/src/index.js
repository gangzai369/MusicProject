// 引入核心库
import React from 'react'
// 引入核心dom库
import ReactDOM from 'react-dom'
// 引入路由插件
import {BrowserRouter} from 'react-router-dom'
// 引入主操作位
import App from '../src/App'
// 全局引入css和js
import './assets/css/reset.css'
import './assets/js/remScale'

ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </BrowserRouter>
    ,document.getElementById('root')
)