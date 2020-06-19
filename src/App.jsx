import React from 'react';
import './scss/App.scss';
import {PostsContainer} from "./components/PostsContainer/PostsContainer";
import {NavBarContainer} from "./components/NavBarContainer/NavBarContainer";
import {Route} from "react-router-dom";
import {ProfileContainer} from "./components/ProfileContainer/ProfileContainer";
import {PostContainer} from "./components/PostContainer/PostContainer";
import {BookmarksContainer} from "./components/BookmarksContainer/BookmarksContainer";

export const App = () => {
    return (
        <div className="app">
            <NavBarContainer />
            <div className="app-wrapper-content">
                <Route exact path="/" render={() => <PostsContainer />} />
                <Route path="/profile" render={() => <ProfileContainer />} />
                <Route path="/post" render={() => <PostContainer />} />
                <Route path="/bookmarks" render={() => <BookmarksContainer />} />
            </div>
        </div>
    );
}

