import React,{Component} from 'react';
import {getList} from '../../../fetch/home'
import ListComponent from '../../../components/ListComponent/index'

class List extends Component{
    constructor(){
        super()
        this.state = {
            hasMore: true,
            data:[]
        }
    }
    render(){
        return (
            <div>
                {
                    this.state.data.length?<ListComponent data={this.state.data}/>:'加载中'
                }
            </div>
        )
    }
    componentDidMount() {
        this.procassDate(getList(this.props.cityName,0))
    }
    procassDate(result) {
        result.then(res=>res.json()).then(({hasMore,data})=>{
            this.setState({
                hasMore,
                data
            })
        })
    }
}

export default List;
