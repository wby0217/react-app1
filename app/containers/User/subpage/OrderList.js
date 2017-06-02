import React,{Component} from 'react';
import {getOrderList,postComment} from '../../../fetch/orderList/index'
import OderListComponent from '../../../components/OrderListComponent/index'

class OrderList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data:[]
        }
    }
    render(){
        return (
            <div>
                {
                    this.state.data?<OderListComponent data={this.state.data} comitComment={this.comitComment.bind(this)}/>: <div>加载中</div>
                }
            </div>
        )
    }
    comitComment(id, comment, callback) {
        console.log(comment)
        //callback()
        postComment({id,comment}).then(res=>res.json()).then(data=>{
            callback();
        });
    }
    componentDidMount() {
        getOrderList(this.props.username).then(res=>res.json()).then(data=>{
            this.setState({
                data
            })
        })
    }
}
export default OrderList
