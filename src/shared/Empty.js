import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartCrack } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';
import { BackgroundTheme } from '../context/theme';

export default function Empty(props) {
    const {msg} = props
    const navigate = useNavigate();
    const {backgroundTheme}=useContext(BackgroundTheme);
  return (
    <div className={`${backgroundTheme?"text-black":"text-white"} empty-wishlsit`} style={{height:"1000px"}}>
        <FontAwesomeIcon style={{fontSize:"300px"}} icon={faHeartCrack} />
        <p style={{fontSize:"24px",margin:"32px"}}>{msg}</p>
        <button style={{paddingLeft:"100px",paddingRight:"100px", backgroundColor:'#D48166'}} className='btn' onClick={()=>navigate("/")}><h4>Back To Home</h4></button>
    </div>
  )
}
