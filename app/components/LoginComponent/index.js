import React,{Component} from 'react';
import './index.less'

class LoginComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            val: ''
        }
    }
    render(){
        return (
            <div className="login-component">
                <input type="text" onChange={this.changeValue.bind(this)} placeholder="请输入用户名"/>
                <button className="back" onClick={this.login.bind(this)}>登录</button>
            </div>
        )
    }
    login() {
        this.props.login(this.state.val)
    }
    changeValue(e) {
        this.setState({
            val: e.target.value
        })
    }
}
export default LoginComponent
