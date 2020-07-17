import React from 'react';
import './scss/App.scss';
import {NavBarContainer} from "./components/NavBarContainer/NavBarContainer";
import {Route} from "react-router-dom";
import PostsContainer from "./components/PostsContainer/PostsContainer";
import BookmarksContainer from "./components/BookmarksContainer/BookmarksContainer";
import ProfileContainer from "./components/ProfileContainer/ProfileContainer";
import PostContainer from "./components/PostContainer/PostContainer";
import NewPostContainer from "./components/NewPostContainer/NewPostContainer";
import AuthorizationContainer from "./components/AuthorizationContainer/AuthorizationContainer";

export const App = () => {
    return (
        <div className="app">
            <NavBarContainer />
            <div className="app-wrapper-content">
                <Route exact path="/" render={() => <PostsContainer />} />
                <Route path="/profile" render={() => <ProfileContainer />} />
                <Route path="/post" render={() => <PostContainer />} />
                <Route path="/bookmarks" render={() => <BookmarksContainer />} />
                <Route path="/new-post" render={() => <NewPostContainer />} />
                <Route path="/auth" render={() => <AuthorizationContainer />} />
            </div>
        </div>
    );
}

