import React,{Component} from 'react';
import {getConment} from '../../../fetch/Detail/index'
import CommentComponent from '../../../components/CommentConponent/index'
import LoadMore from '../../../components/loadMore/index'

class Conment extends Component{
    constructor(props) {
        super(props);
        this.state = {
            page:0,
            data:[],
            hasMore:true,
            inLoading:true
        }
    }
    render(){
        return (
            <div>
                {
                    this.state.data?<CommentComponent data={this.state.data}/>: <div>加载中</div>
                }
                <LoadMore isLoading={this.state.isLoading} hasMore={this.state.hasMore} loadMore={this.loadMore.bind(this)}/>
            </div>
        )
    }
    componentDidMount() {
        this.processData(getConment(this.props.id,0))
    }

    loadMore(){ //用来加载更多的方法
        this.setState({
                isLoading:true,
                page:this.state.page+1
        },()=>{
                this.processData(getConment(this.props.id,this.state.page));
        })
    }

    processData(result) {
        result.then(res=>res.json()).then(({hasMore,data})=>{
            this.setState({
                hasMore,
                data,
                data:this.state.data.concat(data),
                inLoading:false
            })
        })
    }

}
export default Conment
