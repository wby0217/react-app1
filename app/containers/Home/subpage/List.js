import React,{Component} from 'react';
import {getList} from '../../../fetch/home'
import ListComponent from '../../../components/ListComponent/index'
import LoadMore from '../../../components/loadMore/index'

class List extends Component{
    constructor(){
        super()
        this.state = {
             hasMore:true,
             data:[],
            hasMore:true, //是否有更多
             data:[],//所有数据
            page:0,//页码
            isLoading:true//是否正在加载
        }
    }
    render(){
        return (
            <div>
                {
                    this.state.data.length?<ListComponent data={this.state.data}/>:'加载中'
                }
                <LoadMore hasMore={this.state.hasMore} loadMore={this.loadMore.bind(this)} isLoading={this.state.isLoading}/>
            </div>
        )
    }
    componentDidMount() {
        this.procassDate(getList(this.props.cityName,0))
    }

    loadMore() {
        this.setState({
            page:this.state.page+1,
            isLoading:true
        },()=>{
            this.procassDate(getList(this.props.cityName,this.state.page))
        })
    }

    procassDate(result) {
        result.then(res=>res.json()).then(({hasMore,data})=>{
            this.setState({
                hasMore,
                data,
                data:this.state.data.concat(data),
                isLoading:false
            })
        })
    }
}

export default List;
