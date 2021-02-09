import React from 'react'
import {NavBar} from "./NavBar/NavBar";
import {connect} from "react-redux";

const NavBarContainer = (props) => {
    return (
        <NavBar {...props}/>
    )
}

const mapStateToProps = state => ({
    userData: state.auth.userData,
})

export default connect(mapStateToProps, {})(NavBarContainer)
