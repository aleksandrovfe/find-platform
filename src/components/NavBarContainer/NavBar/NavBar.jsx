import React from 'react'
import {NavLink} from "react-router-dom";

export const NavBar = () => {
    return (
        <nav className="navigation">
            <NavLink exact activeClassName="navigation__active-link" className="navigation__link" to="/">
                Posts
            </NavLink>
            <NavLink activeClassName="navigation__active-link" className="navigation__link" to="/profile">
                Profile
            </NavLink>
        </nav>
    )
}
