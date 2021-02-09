import React, {useEffect, useState} from 'react'
import firebase from "firebase";
import {connect} from "react-redux";

const AuthorizationContainer = props => {
    const [isSignedIn, setIsSignedIn] = useState(false)
    const [user, setUser] = useState(null)
    const uiConfig = {
        signInFlow: 'popup',
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        ],
        callbacks: {
            signInSuccess: () => false,
        }
    }
    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            setIsSignedIn(!!user)
            setUser(user)
            // console.log(user)
        })
    }, [])
    return (
        <div>
            <div>Auth</div>
            {isSignedIn
                ? <div>
                    <button onClick={() => firebase.auth().signOut()}>Sign out</button>
                    <img src={firebase.auth().currentUser.photoURL} alt=""/>
                    <h1>{firebase.auth().currentUser.displayName}</h1>
                    </div>

                : <StyledFirebaseAuth
                    uiConfig={uiConfig}
                    firebaseAuth={firebase.auth()}
                />
            }
        </div>
    )
}

const mapStateToProps = state => ({
    userData: state.auth.userData,
})

export default connect(mapStateToProps, {setUserData})(AuthorizationContainer)
