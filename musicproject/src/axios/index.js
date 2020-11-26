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
// 获取热歌列表或者歌单列表
export function getHotSong(params){
    return http.get('/playlist/detail',{
        params
    })
}
//获取歌曲详情
export function songDetail(params){
    return http.get('/song/detail',{
        params
    })
}
//封装一个搜索接口
export function getSearch(params){
    return http.get('/search',{
        params
    })
}
//获取音乐URL
export function playUrl(params){
    return http.get('/song/url',{
        params
    })
}

//获取歌词
export function getLyric(params){
    return http.get('/lyric',{
        params
    })
}