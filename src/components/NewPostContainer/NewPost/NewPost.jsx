import React from 'react'


export const NewPost = ({title, description, price, setTitle, setDescription, setPrice, handleSubmit}) => {
    return (
        <div className="new-post">
            <h1>New post</h1>
            <input type="text" placeholder='title' value={title} onChange={event => setTitle(event.target.value)} />
            <input type="text" placeholder='description' value={description} onChange={event => setDescription(event.target.value)} />
            <input type="text" placeholder='price' value={price} onChange={event => setPrice(event.target.value)} />
            <button onClick={handleSubmit}>Post</button>
        </div>
    )
}


