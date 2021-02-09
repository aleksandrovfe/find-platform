import React from 'react'
import {connect} from "react-redux";

const AuthorizationContainer = props => {

    return (
        <div>
            <div>Auth</div>

        </div>
    )
}

const mapStateToProps = state => ({
    userData: state.auth.userData,
})

export default connect(mapStateToProps, {})(AuthorizationContainer)
