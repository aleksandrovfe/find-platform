import React, {useEffect} from 'react';
import './scss/App.scss';
import {Route} from "react-router-dom";
import PostsContainer from "./components/PostsContainer/PostsContainer";
import BookmarksContainer from "./components/BookmarksContainer/BookmarksContainer";
import ProfileContainer from "./components/ProfileContainer/ProfileContainer";
import PostContainer from "./components/PostContainer/PostContainer";
import NewPostContainer from "./components/NewPostContainer/NewPostContainer";
import AuthorizationContainer from "./components/AuthorizationContainer/AuthorizationContainer";
import * as ROUTES from './constants/routes/routes'
import NavBarContainer from "./components/NavBarContainer/NavBarContainer";
import {connect} from "react-redux";
import {auth} from "./firebase/firebaseInfo";
import {setUserData} from "./redux/AuthorizationReducer";

const App = ({userData, setUserData}) => {
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                setUserData(authUser)
            } else {
                setUserData(null)
            }
        })

        return () => unsubscribe()
    }, [setUserData, userData])

    return (
        <div className="app">
            <NavBarContainer />
            <div className="app-wrapper-content">
                <Route exact path={ROUTES.POSTS} render={() => <PostsContainer />} />
                <Route path={ROUTES.PROFILE} render={() => <ProfileContainer />} />
                <Route path={ROUTES.POST} render={() => <PostContainer />} />
                <Route path={ROUTES.BOOKMARKS} render={() => <BookmarksContainer />} />
                <Route path={ROUTES.NEWPOST} render={() => <NewPostContainer />} />
                <Route path={ROUTES.SIGN_UP} render={() => <AuthorizationContainer />} />
                <Route path={ROUTES.SIGN_IN} render={() => <AuthorizationContainer />} />
                <Route path={ROUTES.PASSWORD_FORGET} render={() => <AuthorizationContainer />} />
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    userData: state.auth.userData,
})

export default connect(mapStateToProps, {setUserData})(App)

