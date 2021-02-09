import React, {useState} from 'react'
import {connect} from "react-redux";
import {NewPost} from "./NewPost/NewPost";
import {db} from "../../firebase/firebaseInfo";
import firebase from "firebase";

const NewPostContainer = props => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')

    const handleSubmit = () => {
        db.collection('posts').add({
            userId: props.userData.uid,
            title: title,
            description: description,
            price: price,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
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
