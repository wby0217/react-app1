import React,{Component} from 'react';
import ComponentItem from './ComponentItem/ComponenItem'

class CommentComponent extends Component{
    render(){
        return (
            <div>
                {
                    this.props.data.map((item,index)=>(
                        <ComponentItem key={index} data={item}/>
                    ))
                }
            </div>
        )
    }
}
export default CommentComponent
