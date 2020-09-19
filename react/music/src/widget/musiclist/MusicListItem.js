import React from "react";
import {List} from 'antd-mobile';
import {useHistory} from 'react-router-dom'
import PropTypes from 'prop-types'
import './musiclistitem.scss'
import './songlistItem.scss'

const Item = List.Item;
const Brief = Item.Brief;

function ArtistListItem({name,transNames,picUrl}) {

    return (
        <Item
            thumb={picUrl}
            arrow="horizontal"
            onClick={() => {}}
            className="music-list-item"
        >
            歌手:{name}{transNames && ` (${transNames[0]})`}
        </Item>
    )

}

ArtistListItem.propTypes = {
    name:PropTypes.string.isRequired,
    transNames: PropTypes.array,
    picUrl:PropTypes.string.isRequired
}

function AlbumListItem({name,picUrl,artist}) {
    return (
        <Item
            thumb={picUrl}
            arrow="horizontal"
            onClick={() => {}}
            multipleLine
            className="music-list-item album"
        >
            专辑:{name}
            <Brief>
                {artist.name}
            </Brief>
        </Item>
    )
}

AlbumListItem.propTypes = {
    name: PropTypes.string.isRequired,
    picUrl: PropTypes.string.isRequired,
    artist: PropTypes.object
}

function MVListItem({cover,name,artistName}) {
    return (
        <Item
            thumb={cover}
            arrow="horizontal"
            onClick={() => {}}
            multipleLine
            className="music-list-item mv"
        >
            MV:{name}
            <Brief>
                {artistName}
            </Brief>
        </Item>
    )
}


function SongListItem({id, name, alias, artists}) {
    // 通过react-router-dom提供的history hook直接获取路由的history对象无需使用props传递
    const history = useHistory()
    return (
        <Item className="song-list-item"
              onClick={() => history.push(`/music/${id}`)}
              multipleLine
              extra={<div className="play-btn"/>}
        >
            {name} {alias[0] && <span className="music-alias">({alias[0]})</span>}
            <Brief>
                {artists.map(art => art.name).join(' / ')} - {name}
            </Brief>
        </Item>
    )
}

SongListItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    alias: PropTypes.array,
    artists: PropTypes.array,

}


function MusicListItem({listType, ...props}) {
    console.log(listType)
    switch (listType) {
        case 1:  // 歌手列表
            return <ArtistListItem {...props}/>
        case 2: // 专辑列表
            return <AlbumListItem {...props}/>
        case 3: // MV列表
            return <MVListItem {...props}/>
        default:
            return <SongListItem {...props}/>
    }

}

// 给组件设置默认值
MusicListItem.defaultProps = {
    listType: 0
}


export default MusicListItem