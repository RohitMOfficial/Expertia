import React, { useEffect, useState } from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Card.css'


const Card = (props) => {
    console.log(props);
    
  return (
    <div className='carddiv'>
        <div className='top'>
            <p>Created on :<span>{props.user.date}</span></p>
        </div>
        <div className='middle'>
            <div>
                <p>Role</p>
                <h4>{props.user.role}</h4>
            </div>
            <div>
                <p>Sourced</p>
                <div className='source-value'>
                    <h1>{props.user.sourced}</h1>
                    <h6>/10</h6>
                </div>
            </div>
            
        </div>
        <div className='bottom'>
                <p>HR POC: <span style={{fontWeight:"bold"}}>{props.user.hr}</span></p>
               
                <button className='detail'>Details</button>
            </div>

    </div>
  )
}

export default Card