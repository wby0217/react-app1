import React,{Component} from 'react';
import OderListItem from './OderListItem/index'

class OderListComponent extends Component{
    render(){
        return (
            <div>
                <h3>订单列表</h3>
                {this.props.data.map((item,index)=>(
                    <OderListItem key={index} data={item} comitComment={this.props.comitComment}/>
                ))}
            </div>
        )
    }
}
export default OderListComponent
