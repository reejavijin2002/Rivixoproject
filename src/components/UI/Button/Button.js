import React from 'react'
import './Button.css'
const Button = (props) =>{
    return(
        <div className='log-btn' style={props.btnStyle}>{props.name}</div>

    )
}
export default Button