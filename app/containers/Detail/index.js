import React,{Component} from 'react';
import HeaderComponent from '../../components/HeaderComponent/index'
import  Info from './subpage/Info'
import Conment from './subpage/Conment'
import Buy from '../../components/Buy/index'
import {connect} from 'react-redux'
import * as Actions from '../../actions/store'
import {bindActionCreators} from 'redux'

class Detail extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isStore:false
        }
    }
    render(){
        return (
            <div>
                <HeaderComponent title="商户详情" history={this.props.history}/>
                <Info id={this.props.match.params.id} />
                <Buy buy={this.buy.bind(this)} store={this.store.bind(this)} isStore={this.state.isStore}/>
                <Conment/>
            </div>
        )
    }
    componentDidMount() {
        let id = this.props.match.params.id;
        let flag = this.props.store.some(item=>item === id);
        if(flag) {
            this.setState({
                isStore: flag
            })
        }
        console.log(this.props.store)
    }
    checkLogin() {
        if(this.props.userInfo.username) {
            return true
        }else {
            return false
        }
    }
    buy() {
        let flag  = this.checkLogin()
        if(flag) {
            this.props.history.push('/user')
        }else {
            this.props.history.push('/login/'+encodeURIComponent('/detail/'+this.props.match.params.id))
        }
    }
    store() {
        let flag  = this.checkLogin();
        let id = this.props.match.params.id;
        if(!flag) {
            this.props.history.push('/login/'+encodeURIComponent('/detail/'+this.props.match.params.id))
        }
        if(this.state.isStore){
            this.props.storeActions.remove(id);
        }else {
            this.props.storeActions.add(id);
        }
        this.setState({
            isStore: !this.state.isStore
        })
    }
}
export default connect(
    state=>{
        return {
            userInfo:state.userInfo,
            store:state.store
        }
    },
    dispatch=>{
        return {storeActions:bindActionCreators(Actions,dispatch)}
    }
)(Detail)
