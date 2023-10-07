import React, { useContext } from 'react'
import { faGlobe, faHeart } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BackgroundTheme, LanguageContext } from '../../context/theme';
import DropdownBTN from '../../shared/DropDown';
import { useSelector } from 'react-redux';

export default function Header() {
    const { backgroundTheme, setBackgroundTheme } = useContext(BackgroundTheme); // To set background theme
    const handleChangeMode = () => {
        if (backgroundTheme === true) {
            setBackgroundTheme(false);
        } else {
            setBackgroundTheme(true)
        }
    }
    const watchListNum = useSelector(state=>state.WatchListData.data.length)

    return (
        <nav className="navbar" style={{ padding: '0.5% 5%', background: '#fbe352',direction:"ltr" }}>
            <div className="container-fluid d-flex justify-content-between">
                <NavLink to="/" className="navbar-brand fw-bold fs-4">Movie App</NavLink>
                <div className='d-flex justify-content-end align-items-center'>
                <NavLink className="nav-link active mx-2 fw-semibold">
                        <button onClick={handleChangeMode} className={`btn ${backgroundTheme ? 'btn-light' : 'btn-dark'} `}>{backgroundTheme ? 'Light' : 'Dark'}</button>
                    </NavLink>
                    <DropdownBTN/>
                    <NavLink to="/watch-list" className="nav-link active mx-2 fw-semibold">
                    <FontAwesomeIcon icon={faHeart} style={{ color: "#000000", }} className='mx-1' />
                    <span>Watch List : {watchListNum}</span> </NavLink>
                </div>
                
            </div>
        </nav>
    )
}
