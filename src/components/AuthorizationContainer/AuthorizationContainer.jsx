import React, { useState} from 'react'
import {auth} from "../../firebase/firebaseInfo";
import {connect} from "react-redux";
import {setUserData} from "../../redux/AuthorizationReducer";

const AuthorizationContainer = props => {
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signUp = (event) => {
        event.preventDefault()
        //
        // auth.createUserWithEmailAndPassword(email, password)
        //     .then(authUser => {
        //         return authUser.user.updateProfile({
        //             displayName: userName
        //         })
        //     })
        //     .catch((error) => alert(error.message))
    }

    const signIn = (event) => {
        event.preventDefault()

        // auth.signInWithEmailAndPassword(email, password)
        //     .catch((error) => alert(error.message))
    }

    return (
        <div>
            <div>Auth</div>
            {
                !props.userData ? (<div>
                    <form action="">
                        <input type="text" placeholder='User name' onChange={(e) => setUserName(e.target.value)}/>
                        <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
                        <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
                        <button onClick={signUp}>Sign up</button>
                    </form>
                    <form action="">
                        <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
                        <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
                        <button onClick={signIn}>Sign in</button>
                    </form>
                </div>)
                    : (<button>Logout</button>)
            }
        </div>
    )
}

const mapStateToProps = state => ({
    userData: state.auth.userData,
})

export default connect(mapStateToProps, {setUserData})(AuthorizationContainer)
