import React,{Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as Actions from '../../actions/userInfo'
import HeaderComponent from '../../components/HeaderComponent/index'
import CurrentCity from '../../components/CurrentCity/index'
import ChooseCity from '../../components/ChooseCity/index'

class City extends Component{
    render(){
        return (
            <div>
                <HeaderComponent title="选择城市" history={this.props.history}/>
                <CurrentCity cityName={this.props.userInfo.cityName}/>
                <ChooseCity changeCity={this.changeCity.bind(this)} />
            </div>
        )
    }
    changeCity(city) {
        let oldInfo = this.props.userInfo;
            oldInfo.cityName = city;
        this.props.userActions.update(oldInfo);
        this.props.history.push('/');
    }
}
export default connect(
    state=>{
        return {userInfo:state.userInfo}
    },
    dispatch=>{
        return {userActions:bindActionCreators(Actions,dispatch)}
    }
)(City)
