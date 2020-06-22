import React from 'react'
import {Bookmarks} from "./Bookmarks/Bookmarks";

import {connect} from "react-redux";

const BookmarksContainer = props => {
    return (
        <Bookmarks {...props}/>
    )
}

const mapStateToProps = state => ({
    favoritesList: state.bookmarks.favoritesList,
})

export default connect(mapStateToProps, {})(BookmarksContainer)


