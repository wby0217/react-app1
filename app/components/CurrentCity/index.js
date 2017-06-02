import React,{Component} from 'react';

class CurrentCity extends Component{
    render(){
        return (
            <div>
                {
                    this.props.cityName
                }
            </div>
        )
    }
}
export default CurrentCity
