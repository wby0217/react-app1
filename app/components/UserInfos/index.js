import React,{Component} from 'react';
import './index.less'

class UserInfo extends Component{
    render(){
        return (
            <div className="user-info">
                <span>用户名:{this.props.userInfo.username}</span>
                <span>城市:{this.props.userInfo.cityName}</span>
            </div>
        )
    }
}
export default UserInfo
