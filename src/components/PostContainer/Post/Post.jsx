import React from 'react'
import {landingData} from "../../../data/landingData";

export const Post = props => {
    return (
        <div className="post">
            <div className="post__header">
                <img className="post__teacher-image"
                     src="https://images.pexels.com/photos/3623309/pexels-photo-3623309.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                     alt=""/>
                <div className="post__teacher-description">
                    <div>
                        <h2 className="post__teacher-name">{landingData[0].teacherName}</h2>
                        <p className="post__teacher-subject">{landingData[0].title}</p>
                        <button className="post__button">Message</button>
                        <button
                            onClick={() => { props.addPostToBookmarks(landingData[0].teacherName)}}
                            className="post__button"
                        >
                            Add to bookmarks
                        </button>
                    </div>
                    <h4 className="teacher-price-wrapper">
                        <p className="teacher-price">{landingData[0].price}$</p> per hour
                    </h4>
                </div>
            </div>
            <h3 className="post__subtitle">Description</h3>
            <p className="post__description">{landingData[0].text}</p>
        </div>
    )
}
