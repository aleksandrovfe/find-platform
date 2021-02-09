import React, {useState} from 'react'
import {connect} from "react-redux";
import {NewPost} from "./NewPost/NewPost";

const NewPostContainer = props => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')

    const handleSubmit = () => {
        console.log('sent')
    }

    return (
        <NewPost title={title} setTitle={setTitle} description={description} setDescription={setDescription}
                 price={price} setPrice={setPrice} handleSubmit={handleSubmit}/>
    )
}

const mapStateToProps = state => ({
    userData: state.auth.userData,
})

export default connect(mapStateToProps, {})(NewPostContainer)
