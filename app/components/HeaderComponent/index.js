import React,{Component} from 'react';
import './index.less'

class HeaderComponent extends Component{
    render(){
        return (
            <div className="back header-component">
                <i className="iconfont icon-fanhui" onClick={this.back.bind(this)}></i>
                <span>
                    {this.props.title}
                </span>
            </div>
        )
    }
    back() {
        if(this.props.back){
            this.props.history.push('/')
        }else {
            this.props.history.go(-1)
        }
    }
}
export default HeaderComponent
