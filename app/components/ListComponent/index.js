
import React,{Component} from 'react';
import ListItem from './ListItem/index'
import './ListItem/index.less'

class ListComponent extends Component{
    render() {
        return (
            <div className="list-wrap">
                {
                    this.props.data.map((item,index)=>(
                        <ListItem key={index} data={item}/>
                    ))
                }
            </div>
        )
    }
}

export default ListComponent;
