import React from 'react'
import {NavLink} from "react-router-dom";
import * as ROUTES from '../../../constants/routes/routes'

export const NavBar = (props) => {
    return (
        <nav className="navigation">
            <h6 className="navigation__link">{props.userData && props.userData.displayName }</h6>
            <NavLink exact activeClassName="navigation__active-link" className="navigation__link" to={ROUTES.POSTS}>
                Posts
            </NavLink>
            <NavLink activeClassName="navigation__active-link" className="navigation__link" to={ROUTES.PROFILE}>
                Profile
            </NavLink>
            <NavLink activeClassName="navigation__active-link" className="navigation__link" to={ROUTES.BOOKMARKS}>
                Bookmarks
            </NavLink>
            <NavLink activeClassName="navigation__active-link" className="navigation__link" to={ROUTES.NEWPOST}>
                New post
            </NavLink>
            <NavLink activeClassName="navigation__active-link" className="navigation__link" to={ROUTES.SIGN_UP}>
                Sign-in
            </NavLink>
        </nav>
    )
}
