import React from 'react'
import {Profile} from "./Profile/Profile";
import {connect} from "react-redux";

const ProfileContainer = props => {
    return (
        <Profile {...props}/>
    )
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps, {})(ProfileContainer)
