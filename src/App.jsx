import React from 'react';
import './scss/App.scss';
import {PostsContainer} from "./components/PostsContainer/PostsContainer";
import {NavBarContainer} from "./components/NavBarContainer/NavBarContainer";
import {Route} from "react-router-dom";
import {ProfileContainer} from "./components/ProfileContainer/ProfileContainer";

const App = () => {
    return (
        <div className="app">
            <NavBarContainer />
            <div className="app-wrapper-content">
                <Route exact path="/" render={() => <PostsContainer />} />
                <Route path="/profile" render={() => <ProfileContainer />} />
            </div>
        </div>
    );
}

export default App;
