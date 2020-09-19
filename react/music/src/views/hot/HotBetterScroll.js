import React, {Component} from "react";
import {RANK_LIST} from '../../api'
import {RANK_TYPE} from '../../common/js/global'
import MusicListItem from "../../widget/musiclist/MusicListItem";
import BScroll from "better-scroll";
import './hotbetterscroll.scss.scss'

function addZeroPrefix(num) {
    return num >= 10 ? num : '0' + num
}

const limit = 20

class Hot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            update: new Date(),
            hotRankList: [],
            tracks: [],
            start: 1,
            footerText: '下拉加载更多'
        }
    }

    async getRankList() {
        let data = await RANK_LIST(RANK_TYPE.hot)
        console.log(data.playlist)
        this.setState(({start}) => ({
            update: new Date(data.playlist.updateTime),
            tracks: data.playlist.tracks,
            hotRankList: data.playlist.tracks.slice(0, limit * start),
            start: start + 1
        }))
    }

    // 初始化better-scroll
    initialBetterScroll() {
        if (this.hotView) {
            this.hotScroll = new BScroll(this.hotView, {
                bounce: {
                    top: false, //  关闭上方弹簧效果
                    bottom: true // 只开启下方弹簧效果
                },
                pullUpLoad: {
                    threshold: 50 // 开启下拉刷新功能,当内容距离容器多少像素时开启上拉加载
                }
            })
            // 上拉加载
            this.hotScroll.on('pullingUp', () => {
                console.log('开启上拉加载');
                this.pullingUpHandle()
            })
        }
    }

    pullingUpHandle() {
        if (this.state.hotRankList.length >= this.state.tracks.length) {
            this.setState({
                footerText: '没有更多数据了'
            })
            this.hotScroll.closePullUp()
        } else {
            this.setState(({start, tracks}) => ({
                hotRankList: tracks.slice(0, start * limit + limit),
                start: start + 1
            }))
        }
    }

    componentDidMount() {
        this.getRankList()
        this.initialBetterScroll()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevState.hotRankList !== this.state.hotRankList && prevState.hotRankList.length) {
            // 先重新计算下元素内容的高度
            this.hotScroll.refresh()
            // 下拉加载数据完毕
            this.hotScroll.finishPullUp()
        }
    }


    render() {
        const {update, hotRankList, footerText} = this.state

        return (
            <div className="app-view hot-view" ref={el => this.hotView = el}>
                <div>
                    <div className="hot-banner">
                        <div className="banner-logo"/>
                        <p className="banner-update">更新日期: {addZeroPrefix(update.getMonth() + 1)}月{addZeroPrefix(update.getDate())}日</p>
                    </div>
                    <ul>
                        {hotRankList.map((m, i) => (
                            <li className="hot-music-list" key={m.id}>
                                <span className="hot-music-rank">{addZeroPrefix(i + 1)}</span>
                                <div className="hot-music-item">
                                    <MusicListItem
                                        id={m.id}
                                        name={m.name}
                                        alias={m.alia}
                                        artists={m.ar}
                                    />
                                </div>
                            </li>
                        ))}
                    </ul>
                    <footer className="pull-up-label">{footerText}</footer>
                </div>
            </div>
        )
    }
}

export default Hot