import React,{Component} from 'react';
import SearchInput from '../SearchInput/index'
import './index.less'
import List from '../../containers/Home/subpage/List'

class SearchHeader extends Component{
    render(){
        return (
            <div>
                <div className="back search-header">
                    <i className="iconfont icon-fanhui" onClick={this.back.bind(this)}></i>
                    <div className="search">
                        <i className="iconfont icon-sousuo-xianxing"></i>
                        <SearchInput value={this.props.value} fn={this.props.fn}/>
                    </div>
                </div>
                <div className="list-wrapt">
                    <List/>
                </div>
            </div>
        )
    }
    back() {
        this.props.history.go(-1)
    }
}
export default SearchHeader
