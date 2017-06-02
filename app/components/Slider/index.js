
import React,{Component} from 'react';
import ReactSwipe from 'react-swipe';
import {Link} from 'react-router-dom'
import './index.less'
class Slider extends Component{
    constructor() {
        super();
        this.state = {
            index:0
        }
    }
    render(){
        let opts = {
            continuous: false,
            callback:(index) => {
                this.setState({
                    index
                })
            }
        }
        return (
            <div className="slider">
                <ReactSwipe className="carousel" swipeOptions={opts}>
                    <div>
                        <ul>
                            <Link to="/search/jingdian">
                                <li>
                                    <i className="iconfont icon-coupons"></i>
                                    <span>美食</span>
                                </li>
                            </Link>
                            <Link to="/search/jingdian">
                                <li>
                                    <i className="iconfont icon-coupons"></i>
                                    <span>美食</span>
                                </li>
                            </Link>
                            <Link to="/search/jingdian">
                                <li>
                                    <i className="iconfont icon-coupons"></i>
                                    <span>美食</span>
                                </li>
                            </Link>
                            <Link to="/search/jingdian">
                                <li>
                                    <i className="iconfont icon-coupons"></i>
                                    <span>美食</span>
                                </li>
                            </Link>
                            <Link to="/search/jingdian">
                                <li>
                                    <i className="iconfont icon-coupons"></i>
                                    <span>美食</span>
                                </li>
                            </Link>
                            <Link to="/search/jingdian">
                                <li>
                                    <i className="iconfont icon-coupons"></i>
                                    <span>美食</span>
                                </li>
                            </Link>
                            <Link to="/search/jingdian">
                                <li>
                                    <i className="iconfont icon-coupons"></i>
                                    <span>美食</span>
                                </li>
                            </Link>
                            <Link to="/search/jingdian">
                                <li>
                                    <i className="iconfont icon-coupons"></i>
                                    <span>美食</span>
                                </li>
                            </Link>
                            <Link to="/search/jingdian">
                                <li>
                                    <i className="iconfont icon-coupons"></i>
                                    <span>美食</span>
                                </li>
                            </Link>
                            <Link to="/search/jingdian">
                                <li>
                                    <i className="iconfont icon-coupons"></i>
                                    <span>美食</span>
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <Link to="/search/jingdian">
                                <li>
                                    <i className="iconfont icon-coupons"></i>
                                    <span>美食</span>
                                </li>
                            </Link>
                            <Link to="/search/jingdian">
                                <li>
                                    <i className="iconfont icon-coupons"></i>
                                    <span>美食</span>
                                </li>
                            </Link>
                            <Link to="/search/jingdian">
                                <li>
                                    <i className="iconfont icon-coupons"></i>
                                    <span>美食</span>
                                </li>
                            </Link>
                            <Link to="/search/jingdian">
                                <li>
                                    <i className="iconfont icon-coupons"></i>
                                    <span>美食</span>
                                </li>
                            </Link>
                            <Link to="/search/jingdian">
                                <li>
                                    <i className="iconfont icon-coupons"></i>
                                    <span>美食</span>
                                </li>
                            </Link>
                            <Link to="/search/jingdian">
                                <li>
                                    <i className="iconfont icon-coupons"></i>
                                    <span>美食</span>
                                </li>
                            </Link>
                            <Link to="/search/jingdian">
                                <li>
                                    <i className="iconfont icon-coupons"></i>
                                    <span>美食</span>
                                </li>
                            </Link>
                            <Link to="/search/jingdian">
                                <li>
                                    <i className="iconfont icon-coupons"></i>
                                    <span>美食</span>
                                </li>
                            </Link>
                            <Link to="/search/jingdian">
                                <li>
                                    <i className="iconfont icon-coupons"></i>
                                    <span>美食</span>
                                </li>
                            </Link>
                            <Link to="/search/jingdian">
                                <li>
                                    <i className="iconfont icon-coupons"></i>
                                    <span>美食</span>
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <Link to="/search/jingdian">
                                <li>
                                    <i className="iconfont icon-coupons"></i>
                                    <span>美食</span>
                                </li>
                            </Link>
                            <Link to="/search/jingdian">
                                <li>
                                    <i className="iconfont icon-coupons"></i>
                                    <span>美食</span>
                                </li>
                            </Link>
                            <Link to="/search/jingdian">
                                <li>
                                    <i className="iconfont icon-coupons"></i>
                                    <span>美食</span>
                                </li>
                            </Link>
                            <Link to="/search/jingdian">
                                <li>
                                    <i className="iconfont icon-coupons"></i>
                                    <span>美食</span>
                                </li>
                            </Link>
                            <Link to="/search/jingdian">
                                <li>
                                    <i className="iconfont icon-coupons"></i>
                                    <span>美食</span>
                                </li>
                            </Link>
                            <Link to="/search/jingdian">
                                <li>
                                    <i className="iconfont icon-coupons"></i>
                                    <span>美食</span>
                                </li>
                            </Link>
                            <Link to="/search/jingdian">
                                <li>
                                    <i className="iconfont icon-coupons"></i>
                                    <span>美食</span>
                                </li>
                            </Link>
                            <Link to="/search/jingdian">
                                <li>
                                    <i className="iconfont icon-coupons"></i>
                                    <span>美食</span>
                                </li>
                            </Link>
                            <Link to="/search/jingdian">
                                <li>
                                    <i className="iconfont icon-coupons"></i>
                                    <span>美食</span>
                                </li>
                            </Link>
                            <Link to="/search/jingdian">
                                <li>
                                    <i className="iconfont icon-coupons"></i>
                                    <span>美食</span>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </ReactSwipe>
                <ul className="dots">
                    <li className={this.state.index==0?'active':''}></li>
                    <li className={this.state.index==1?'active':''}></li>
                    <li className={this.state.index==2?'active':''}></li>
                </ul>
            </div>
        )
    }
}
export default Slider
