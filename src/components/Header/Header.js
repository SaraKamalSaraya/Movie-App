import React, { useContext } from 'react'
import { faHeart, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
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
    const watchListNum = useSelector(state => state.WatchListData.data.length)

    return (
        <nav className="navbar" style={{ padding: '0.5% 5%', background: '#D48166', color:'white', direction: "ltr" }}>
            <div className="container-fluid d-flex justify-content-between">
                <NavLink to="/home" className="navbar-brand fw-bold fs-4" style={{color:'white'}}>Movie App</NavLink>
                <div className='d-flex justify-content-end align-items-center'>
                    <NavLink className="nav-link active mx-2 fw-semibold" onClick={handleChangeMode}>
                        <FontAwesomeIcon icon={backgroundTheme ? faSun : faMoon} style={{  fontSize: '1.2rem' }}/>
                        <span className='mx-1' style={{  fontSize: '1.2rem' }}>{backgroundTheme ? 'Light' : 'Dark'}</span>
                    </NavLink>
                    <DropdownBTN />
                    <NavLink to="/watch-list" className="nav-link active mx-2 fw-semibold d-flex align-items-center">
                        <FontAwesomeIcon icon={faHeart} style={{  fontSize: '1.2rem' }} className='mx-1' />
                        <span >
                            <span style={{ marginRight: '0.08rem', fontSize: '1.2rem' }}>Watch List: </span>
                            <span className='' style={{ padding: '0.09rem 0.5rem', backgroundColor: '#373A36', borderRadius: '30%', textAlign:'center', color:'white'}}>{watchListNum}</span>
                        </span>
                    </NavLink>
                </div>

            </div>
        </nav>
    )
}
