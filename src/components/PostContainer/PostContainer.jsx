import React from 'react'
import {Post} from "./Post/Post";
import {connect} from "react-redux";
import {addPostToBookmarks} from "../../redux/BookmarksReducer";

const PostContainer = props => {
    return (
        <Post {...props}/>
    )
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps, {addPostToBookmarks})(PostContainer)
