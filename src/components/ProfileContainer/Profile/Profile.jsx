import React, {useState} from 'react'

export const Profile = ({name, surname, setName, setSurname, handleChangeAvatar, setOpenModal, openModal, progress, handleUpload}) => {

    return (
        <div className="profile">
            {openModal && (<div className="profile__modal-wrapper">
                <div className='profile__modal'>
                    <h6>Settings</h6>
                    <input type="text" placeholder='Name' value={name} onChange={event => setName(event.target.value)}/>
                    <input type="text" placeholder='Surname' value={surname}
                           onChange={event => setSurname(event.target.value)}/>
                    <input type="file" onChange={handleChangeAvatar}/>
                    <progress value={progress} max='100'></progress>
                    <button onClick={handleUpload}>Save</button>
                    <button onClick={() => setOpenModal(false)}>Close</button>
                </div>
            </div>)}
            <div>
                <img className="profile__avatar"
                     src="https://images.pexels.com/photos/3623309/pexels-photo-3623309.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                     alt=""/>
                <h2>Profile Name</h2>
                <button onClick={() => setOpenModal(true)}>Settings</button>
            </div>
            <div className="profile__posts-wrapper">
                <button className="profile__add-post">Add new post</button>
            </div>
        </div>
    )
}
