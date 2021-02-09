import React from 'react'
import {landingData} from "../../../data/landingData";
import {NavLink} from "react-router-dom";
import * as ROUTES from '../../../constants/routes/routes'

export const Posts = props => {
    return (
        <div className="posts">
            <div className="posts__wrapper">
                <ul className="posts__list">
                    {landingData.map(post => (
                        <li className="posts__post" key={post.id}>
                            <h3 className="posts__post-title">{post.title}</h3>
                            <p className="posts__post-text">{post.text}</p>
                            <div className="posts__teacher-information">
                                <img className="posts__teacher-avatar" src={post.avatar} alt=""/>
                                <div className="posts__teacher-description-wrapper">
                                    <h3 className="posts__teacher-name">{post.teacherName}</h3>
                                    <p className="posts__teacher-experience">{post.experience} years of experience</p>
                                </div>
                                <h4 className="teacher-price-wrapper">
                                    <p className="teacher-price">{post.price}$</p> per hour
                                </h4>
                            </div>
                            <div className="posts__buttons-wrapper">
                                <button onClick={() => props.addPostToBookmarks(post.teacherName)} className="posts__button">Add to bookmarks</button>
                                <NavLink to={ROUTES.POST}>
                                    <button className="posts__button">Read more</button>
                                </NavLink>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
