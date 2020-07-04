import React from 'react'
import {connect} from "react-redux";
import {NewPost} from "./NewPost/NewPost";

const NewPostContainer = props => {
    const onSubmit = formData => {
        console.log(formData)
    }

    return (
        <NewPost onSubmit={onSubmit} />
    )
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps, {})(NewPostContainer)
