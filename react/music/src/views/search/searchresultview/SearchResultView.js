import React, {useEffect, useState} from "react";
import {WingBlank} from "antd-mobile";
import PropTypes from 'prop-types';
import {BEST_MATCH, SEARCH_MUSIC} from "../../../api";
import MusicListItem from "../../../widget/musiclist/MusicListItem";


// 搜索单曲

function SearchResultView({keyword}) {

    const [bestMatch, setBestMatch] = useState({})

    const [songsList, setSongsList] = useState([])

    // 最佳匹配
    async function getBestMatch(keyword) {
        let data = await BEST_MATCH(keyword)
        // console.log(data.result)
        setBestMatch(data.result)
    }

    // 查询歌曲
    async function searchMusic(keyword) {
        let data = await SEARCH_MUSIC(keyword)
        if(data.code === 200) {
            console.log(data.result.songs)
            setSongsList(data.result.songs)
        }
    }

    useEffect(() => {
        let kw = encodeURIComponent(keyword)
        getBestMatch(kw)
        searchMusic(kw)
    }, [])

    return (
        <div className="search-result-view">
           <WingBlank size="md">
               <h3 className="search-title">最佳匹配</h3>
           </WingBlank>
            {bestMatch.artist && <MusicListItem listType={1} {...bestMatch.artist[0]}/>}
            {bestMatch.album && <MusicListItem listType={2} {...bestMatch.album[0]}/>}
            {bestMatch.mv && <MusicListItem listType={3} {...bestMatch.mv[0]}/>}
            {songsList.map(s => <MusicListItem key={s.id} {...s}/>)}
        </div>
    )

}

SearchResultView.propTypes = {
    keyword: PropTypes.string.isRequired
}

export default SearchResultView