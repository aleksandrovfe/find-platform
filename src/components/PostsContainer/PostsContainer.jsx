import React from 'react'
import {Posts} from "./Posts/Posts";
import {connect} from "react-redux";
import {addPostToBookmarks} from "../../redux/BookmarksReducer";

const PostsContainer = props => {
    return (
        <Posts addPostToBookmarks={props.addPostToBookmarks}/>
    )
}

const mapStateToProps = state => ({
})

export default connect(mapStateToProps, {
    addPostToBookmarks
})(PostsContainer);
