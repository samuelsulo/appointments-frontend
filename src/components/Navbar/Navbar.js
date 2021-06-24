import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';

import './Navbar.css';

export default function Navbar( props ) {
    const [user, setUser] = useState([]);
    const [isLogged, setIsLogged] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        setIsLogged(props.isLogged);
        setUser(props.user);
    }, [props.isLogged, props.user]);

    // Sidebar slide
    const [sidebar, setSidebar] = useState(false);
    const moveSidebar = () => {
        setSidebar(!sidebar);
    }

    const logout = () => {
        dispatch({type: 'LOGOUT'});
        setUser([]);
        setIsLogged(false);
        localStorage.setItem('auth-token', '');
    }
    
    return (
        <nav className={`navbar ${sidebar ? "dark" : ""}`}>
            <Link className="link logo" to="/">{isLogged ? user.firstName + ' ' + user.lastName : 'Logo'}</Link>
            <div className={`menu-slide ${sidebar ? "menu-slide-active" : ""}`}>
                <div className="page-links">
                    <Link className="link" to="/" onClick={moveSidebar}>Home</Link>
                    {!isLogged ? 
                    <Link className="link" to="/account/auth" onClick={moveSidebar}>Sign in</Link> 
                    : 
                    <Link className="link" to="/account/auth" onClick={() => { moveSidebar(); logout();}}>Logout</Link>}
                </div>
                <div className="social-links">
                    <a className="link" href="https://www.linkedin.com/in/samuel-sulo-669298209/"><LinkedInIcon /></a>
                    <a className="link" href="https://www.instagram.com/samuelsulo/"><InstagramIcon /></a>
                    <a className="link" href="https://github.com/Samuel-Sulo"><GitHubIcon /></a>
                </div>
            </div>
            <div className={`burger ${sidebar ? "burger-active" : ""}`} onClick={moveSidebar}>
                <div className="line line1"></div>
                <div className="line line2"></div>
                <div className="line line3"></div>
            </div>
        </nav>
    )
}
