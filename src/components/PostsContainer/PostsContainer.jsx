import React from 'react'
import {Posts} from "./Posts/Posts";
import {connect} from "react-redux";
import {addPostToBookmarks} from "../../redux/BookmarksReducer";

export const PostsContainer = props => {
    console.log(props.addPostToBookmarks)
    return (
        <Posts addPostToBookmarks={props.addPostToBookmarks}/>
    )
}

const mapStateToProps = state => ({
    dataForBookmarks: state.bookmarks.dataForBookmarks,
    act: state.bookmarks.act
})

connect(mapStateToProps, {
    addPostToBookmarks
})(PostsContainer)
