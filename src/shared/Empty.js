import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartCrack } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.css';

export default function Empty(props) {
    const {msg} = props
  return (
    <div className='empty-wishlsit'>
        <FontAwesomeIcon style={{fontSize:"300px"}} icon={faHeartCrack} />
        <p style={{fontSize:"24px",margin:"32px"}}>{msg}</p>
        <button style={{paddingLeft:"100px",paddingRight:"100px"}} className='btn btn-warning'>Back to home</button>
    </div>
  )
}
