import React,{Component} from 'react';
import HeaderComponent from '../../components/HeaderComponent/index'
import  Info from './subpage/Info'
import Conment from './subpage/Conment'

class Detail extends Component{
    render(){
        return (
            <div>
                <HeaderComponent title="商户详情" history={this.props.history}/>
                <Info id={this.props.match.params.id} />
                <Conment/>
            </div>
        )
    }
}
export default Detail
