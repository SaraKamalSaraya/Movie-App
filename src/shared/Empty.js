import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartCrack } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';

export default function Empty(props) {
    const {msg} = props
    const navigate = useNavigate();
  return (
    <div className='empty-wishlsit'>
        <FontAwesomeIcon style={{fontSize:"300px"}} icon={faHeartCrack} />
        <p style={{fontSize:"24px",margin:"32px"}}>{msg}</p>
        <button style={{paddingLeft:"100px",paddingRight:"100px", backgroundColor:'#D48166'}} className='btn' onClick={()=>navigate("/")}>Back to home</button>
    </div>
  )
}
