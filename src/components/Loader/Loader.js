import React from 'react'

export default function Loader() {
    return (
        <div className='d-flex justify-content-center align-items-center mt-5 pt-5'>
        <div className="spinner-border" style={{color:"#D48166"}} role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
        </div>
    )
}