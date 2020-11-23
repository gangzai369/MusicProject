// 引入路由组件
import Index from './pages/index'
import List from './pages/list'
import Play from './pages/play'
// 导入路由库
import {Switch,Route,Redirect} from 'react-router-dom'
export default function App(){
    return (
        <div className="app">
            {/* 定义一级路由出口 */}
            <Switch>
                <Route path="/index" component={Index}></Route>
                <Route path="/list" component={List}></Route>
                <Route path="/play" component={Play}></Route>
                {/* 路由重定向 */}
                <Redirect to="/index"></Redirect>
            </Switch>
        </div>
    )
};
