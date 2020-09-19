import React, {Component} from "react";
import {SearchBar, List, Icon} from 'antd-mobile'
import {HOT_SEARCH, SEARCH_SUGGEST} from "../../api";
import './search.scss'
import SearchResultView from "./searchresultview/SearchResultView";

const Item = List.Item;

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: '',
            hots: [],
            suggestList: [],
            bestMatch: {},
            showResult: false
        }
        this.onChangeHandle = this.onChangeHandle.bind(this)
        this.searchCancel = this.searchCancel.bind(this)
    }

    async getHotSearchList() {
        let data = await HOT_SEARCH()
        console.log(data.result)
        this.setState({
            hots: data.result.hots
        })
    }

    componentDidMount() {
        this.getHotSearchList()
    }

    // 输入框内容更新
    onChangeHandle(keyword) {
        this.setState({
            keyword,
            showResult: false //   隐藏搜素结果页面
        })

        this.searchSuggest(keyword)
    }

    searchCancel() {
        this.setState({
            keyword: ''
        })
    }

    // 点击推荐搜索 label
    clickSearchLabel(keyword) {
        // 更新输入框文本内容
        this.setState({
            keyword,
            showResult: true //展示搜索结果页面
        })
        // 开始搜素
        this.searchBar.focus()
    }

    // 搜索建议
    searchSuggest(keyword) {
        if (keyword) {
            if (this.suggest) {
                clearTimeout(this.suggest)
            }
            // 函数防抖避免网络请求频繁触发触发
            this.suggest = setTimeout(() => {
                keyword = encodeURIComponent(keyword)
                SEARCH_SUGGEST(keyword).then(data => {
                    console.log(data)
                    this.suggest = null
                    if(data.code === 200) {
                        this.setState({
                            suggestList: data.result.allMatch
                        })
                    }
                })
            }, 300)
        }

    }


    render() {
        const {keyword, hots, suggestList, showResult} = this.state
        return (
            <div className="app-view">
                <div className="search-bar-wrapper">
                    <SearchBar
                        className="music-search-bar"
                        value={keyword}
                        onChange={this.onChangeHandle}
                        placeholder="搜素歌曲、歌手、专辑"
                        ref={el => this.searchBar = el}
                    />
                </div>

                {showResult && <SearchResultView keyword={keyword}/>}

                {keyword && !showResult && (
                    <List
                        className="search-suggest-list"
                        renderHeader={() => <h3 onClick={() => this.clickSearchLabel(keyword)}>搜索"{keyword}"</h3>}
                    >
                        {suggestList.map((s, i) => (
                            <Item
                                key={i}
                                thumb={<Icon type="search" size="xxs" color="#b5b4b4"/>}
                                onClick={() => this.clickSearchLabel(s.keyword)}
                            >{s.keyword}</Item>
                        ))}
                    </List>
                )}

                {
                    !keyword && (
                        <div className="hot-search-wrapper">
                            <h3 className="search-title">热门搜素</h3>
                            {hots.map((h, i) => (
                                <div
                                    className="search-label"
                                    onClick={() => this.clickSearchLabel(h.first)} key={i}
                                >{h.first}</div>
                            ))}
                        </div>
                    )
                }

            </div>
        )
    }
}

export default Search