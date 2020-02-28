import React from 'react'

function Error (props){
    return(
        <div className={`alert alert-${props.warna}`}>
            {props.bebas}
        </div>
    )
}

export default Error