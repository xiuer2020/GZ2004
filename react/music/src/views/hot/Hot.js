import React, {Component} from "react";
import {ListView} from "antd-mobile";
import MusicListItem from "../../widget/musiclist/MusicListItem";
import {RANK_LIST} from '../../api'
import {RANK_TYPE} from '../../common/js/global'
import './hot.scss'

function addZeroPrefix(num) {
    return num >= 10 ? num : '0' + num
}

const limit = 20

class Hot extends Component {
    constructor(props) {
        super(props);
        // 创建ListView.DataSource 实例
        let ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
            // 列表如果分组就加下面这句话
            // sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
        })
        this.state = {
            update: new Date(),
            hotRankList: ds.cloneWithRows([]), // 将数组转化为不分组的ds实例对象
            tracks: [],
            start: 1,
            height: document.documentElement.clientHeight - 43.5,
            footerText: '上拉加载更多...'
        }

        this.renderHeader = this.renderHeader.bind(this)
        this.renderRow = this.renderRow.bind(this)
        this.onEndReached = this.onEndReached.bind(this)
    }

    async getRankList() {
        let data = await RANK_LIST(RANK_TYPE.hot)
        console.log(data.playlist)
        this.setState(({start, hotRankList}) => ({
            update: new Date(data.playlist.updateTime),
            tracks: data.playlist.tracks,
            hotRankList: hotRankList.cloneWithRows(data.playlist.tracks.slice(0, start * limit)),
            start: start + 1
        }))
    }

    componentDidMount() {
        this.getRankList()
    }

    renderRow(m, sectionID, i) {
        i = parseInt(i)
        return (
            <div className="hot-music-list" key={m.id}>
                <span className="hot-music-rank">{addZeroPrefix(i + 1)}</span>
                <div className="hot-music-item">
                    <MusicListItem
                        id={m.id}
                        name={m.name}
                        alias={m.alia}
                        artists={m.ar}
                    />
                </div>
            </div>
        )
    }

    renderHeader() {
        const {update} = this.state
        return (
            <div className="hot-banner">
                <div className="banner-logo"/>
                <p className="banner-update">更新日期: {addZeroPrefix(update.getMonth() + 1)}月{addZeroPrefix(update.getDate())}日</p>
            </div>
        )
    }

    onEndReached() {
        this.setState(({tracks, hotRankList, start}) => (
            {
                hotRankList: hotRankList.cloneWithRows(tracks.slice(0, start * limit)),
                start: start + 1,
                footerText: start * limit >= tracks.length ? '没有更多了':'上拉加载更多...'
            }
        ))
    }

    render() {
        const {hotRankList, footerText} = this.state

        return (
            <div className="app-view hot-view">

                <ListView
                    dataSource={hotRankList}
                    renderRow={this.renderRow}
                    renderHeader={this.renderHeader}
                    renderFooter={() => <footer className="pull-up-label">{footerText}</footer>}
                    style={{
                        height: this.state.height,
                        overflow: 'auto',
                    }}
                    onEndReached={this.onEndReached}
                    onEndReachedThreshold={10}
                />
            </div>
        )
    }
}

export default Hot