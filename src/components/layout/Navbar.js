import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
const Navbar = ({icon,title}) => {
    return (
        <nav className = "nav bg-primary">
            <h1 className = 'navbar-title'>
                <i className={icon} />{title}
            </h1>
            <ul className = 'navbar-links'>
                <li>
                    <Link to = "/" > Home</Link>
                </li>
                <li>
                    <Link to = "/about">About</Link>
                </li>
            </ul>
        </nav >
    )
}
Navbar.defaultProps = {
    title :'Github Finder',
    icon : 'fab fa-github'
};


Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};
export default Navbar;
