// 引入http
import http from './axios'
// 封装接口
// 推荐歌单接口
export function getMusic(params){
    return http.get('/personalized',{
        params
    })
}
// 推荐新音乐
export function getNewMusic(){
    return http.get('/personalized/newsong')
}
// 轮播图
export function getBannerList(){
    return http.get('/banner')
}
// 热搜列表
export function getHotSearch(){
    return http.get('/search/hot')
}
// 搜索联动词
export function getAboutSearch(params){
    return http.get('/search/suggest',{
        params
    })
}
// 获取热歌列表
export function getHotSong(params){
    return http.get('/playlist/detail',{
        params
    })
}