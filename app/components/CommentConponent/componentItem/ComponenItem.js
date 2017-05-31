import React,{Component} from 'react';
import Star from '../../Star/index'
import './index.less'

class ComponentItem extends Component{
    render(){
        let {username, comment, star} = this.props.data;
        return (

            <div className="comment-item">
                <div>
                    <i className="iconnfont icon-yonghufill"></i>
                    {username}
                </div>
                <Star count={star}/>
                <div>
                    {comment}
                </div>
            </div>

        )
    }
}
export default ComponentItem
