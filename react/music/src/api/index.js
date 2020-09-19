const url = 'http://localhost:4000'
const getData = (path) => fetch(url + path).then(res => res.json())

//推荐歌单
export const RECOMMEND_MUSIC = function (limit = 6) {
    return getData('/personalized?limit=' + limit)
}

// 推荐新音乐
export const RECOMMEND_NEWSONG = function () {
    return getData('/personalized/newsong')
}

// 获取歌曲榜单列表
export const RANK_LIST = function (idx = 0) {
    return getData('/top/list?idx=' + idx)
}

//热搜列表(简略)
export const HOT_SEARCH = function () {
    return getData('/search/hot')
}

// 搜素建议
export const SEARCH_SUGGEST = function (keywords) {
    return getData(`/search/suggest?keywords=${keywords}&type=mobile`)
}

// 最佳匹配
export const BEST_MATCH = function (keyword) {
    return getData('/search/multimatch?keywords=' + keyword)
}

// 搜素结果
export const SEARCH_MUSIC = function (keyword) {
    // 该api 还有三个可选参数
    // limit 请求多少条
    // offset 从第几条向后请求
    // type   请求到的类型
    return getData('/search?keywords=' + keyword)
}

// 判断音乐是否可用
export const CHECK_MUSIC = function (id) {
    return getData('/check/music?id=' + id)
}

// 获取音乐的url
export const GET_MUSIC_URL = function (id) {
    return getData('/song/url?id=' + id)
}
// 获取音乐详情
export const GET_MUSIC_DETAIL = function (id) {
    return getData('/song/detail?ids=' + id)
}
// 获取歌词
export const GET_MUSIC_LYRIC = function (id) {
    return getData('/lyric?id=' + id)
}