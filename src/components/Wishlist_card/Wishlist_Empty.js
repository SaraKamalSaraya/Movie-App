import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartCrack } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.css';
import Empty from '../../shared/Empty';

export default function Wishlist_Empty() {
  return (
    // <div className='empty-wishlsit'>
    //     <FontAwesomeIcon style={{fontSize:"300px"}} icon={faHeartCrack} />
    //     <p style={{fontSize:"24px",margin:"32px"}}>No Movies in watch list</p>
    //     <button style={{paddingLeft:"100px",paddingRight:"100px"}} className='btn btn-warning'>Back to home</button>
    // </div>
    <Empty msg='No Movies in watch list' />
  )
}
