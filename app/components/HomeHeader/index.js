import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import './index.less'
import SearchInput from "../SearchInput/index"

class HomeHeader extends Component{
    render(){
        return (
            <div className="home-header back">
                <Link to='/city'>
                    <div className="city">
                        {this.props.cityName}
                        <i className="iconfont icon-xiangxia2"></i>
                    </div>
                </Link>
                <div className="search">
                    <i className="iconfont icon-sousuo-xianxing"></i>
                    <SearchInput fn={this.toSearch.bind(this)}/>
                </div>
                <Link to='/login'>
                    <div className="profile">
                        <i className="iconfont icon-yonghufill"></i>
                    </div>
                </Link>
            </div>
        )
    }
    toSearch(value) {
        this.props.history.push('/search/all/'+value);
    }
}
export default HomeHeader