import React from 'react'
import {landingData} from "../../../data/landingData";

export const Posts = () => {
    return (
        <div className="posts">
            <div className="posts__wrapper">
                <ul className="posts__list">
                    {landingData.map(post => (
                        <li className="posts__post" key={post.id}>
                            <h3 className="posts__post-title">{post.title}</h3>
                            <p className="posts__post-text">{post.text}</p>
                            <div className="posts__buttons-wrapper">
                                <button className="posts__button">Add to bookmarks</button>
                                <button className="posts__button">Read more</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
