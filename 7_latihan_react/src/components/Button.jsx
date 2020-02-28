import React,{Component} from 'react'

class Button extends Component{
    render(){
     
      return(
        <div onClick={this.props.functionKlik} style={{display:'inline-block',padding:'10px'
        ,backgroundColor:'red'}}>
         {this.props.a}
        </div>
      )
    }
}

export default Button;


