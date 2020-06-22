import React from 'react'
import {connect} from "react-redux";
import {addPostToBookmarks} from "../../redux/BookmarksReducer";
import {Posts} from "./Posts/Posts";

const PostContainer = props => {
    return (
        <Posts {...props}/>
    )
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps, {addPostToBookmarks})(PostContainer)
