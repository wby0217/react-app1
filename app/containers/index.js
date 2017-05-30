
import React,{Component} from 'react';
import RouterMap from '../routers/index'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as Actions from '../actions/userInfo'
import {getStorage} from '../local/index'

 class App extends Component{
     constructor(){
         super()
         this.state = {
             done:false
         }
     }
    render(){
        return (
            <div>
                {this.state.done?<RouterMap/>:<div>加载</div>}
            </div>
        )
    }
     componentDidMount(){
        let cityName = getStorage('cityName');
        if(cityName == null) {
            cityName = '杭州'
        }
         this.props.userActions.update({
             cityName
         })
         this.setState({
             done:true
         });
     }
}

export default connect(
    state=>{
        return {}
    },
    dispatch=>{
        return {
            userActions: bindActionCreators(Actions,dispatch)
        }
    }
)(App)