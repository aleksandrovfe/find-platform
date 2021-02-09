import React, {useState} from 'react'
import {Profile} from "./Profile/Profile";
import {connect} from "react-redux";
import firebase from "firebase";
import {storage, db} from "../../firebase/firebaseInfo";

const ProfileContainer = props => {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [avatar, setAvatar] = useState('')
    const [progress, setProgress] = useState(0)
    const [openModal, setOpenModal] = useState(false)

    const handleChangeAvatar = (event) => {
        if (event.target.files[0]) {
            setAvatar(event.target.files[0])
        }
    }

    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${avatar.name}`).put(avatar)
        uploadTask.on(
            'state_changed',
            snapshot => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                )
                setProgress(progress)
            },
            error => console.log(error),
            () => {
                storage
                    .ref('images')
                    .child(avatar.name)
                    .getDownloadURL()
                    .then(url => {
                        db.collection('users').add({
                            userId: props.userData.uid,
                            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                            name: name,
                            surname: surname,
                            avatar: url,
                        })
                        setProgress(0)
                        setName('')
                        setSurname('')
                        setAvatar(null)
                    })
            }
        )
        setOpenModal(false)
    }


    return (
        <Profile name={name}
                 surname={surname}
                 openModal={openModal}
                 progress={progress}
                 setName={setName}
                 setOpenModal={setOpenModal}
                 setSurname={setSurname}
                 handleChangeAvatar={handleChangeAvatar}
                 handleUpload={handleUpload}
        />
    )
}

const mapStateToProps = state => ({
    userData: state.auth.userData,
})

export default connect(mapStateToProps, {})(ProfileContainer)
