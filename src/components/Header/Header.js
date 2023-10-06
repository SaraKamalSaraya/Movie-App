import React from 'react'
import { faGlobe, faHeart } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Header() {
    return (
        <nav className="navbar" style={{ padding: '0.5% 5%', background:'#fbe352'}}>
            <div className="container-fluid d-flex justify-content-between">
                <NavLink to="/" className="navbar-brand fw-bold fs-4">Movie App</NavLink>
                <div className='d-flex justify-content-end align-items-center'>
                    <NavLink className="nav-link active mx-2 fw-semibold" onClick=''>
                        <FontAwesomeIcon icon={faGlobe} style={{ color: "#000000", }} className='mx-1' />
                        En</NavLink>
                    <NavLink to="/watch-list" className="nav-link active mx-2 fw-semibold">
                    <FontAwesomeIcon icon={faHeart} style={{color: "#000000",}} className='mx-1'/>
                    Watchlist</NavLink>
                </div>
            </div>
        </nav>
    )
}
