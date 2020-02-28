import React,{Component} from 'react'

class Button extends Component{
    render(){
      var nama = 'aa'
      return(
        <div style={{display:'inline-block',padding:'5px',padding:'10px'
        ,backgroundColor:'red'}}>
          Ini Component Button {nama.length > 3 ? "lebih dari tiga" : 'kurang dari tiga'}
        </div>
      )
    }
}

export default Button;


