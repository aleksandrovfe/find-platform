import React from 'react';
import './scss/App.scss';
import { landingData } from './data/landingData'

const App = () => {
  return (
   <div className="app">
     <div className="app__wrapper">
      <h1 className="app__title">Application</h1>
      <ul className="app__post-list">
        {landingData.map(post => (
          <li className="app__post" key={post.id}>
              <h3 className="app__post-title">{post.title}</h3>
              <p className="app__post-text">{post.text}</p>
              <div className="app__buttons-wrapper">
                <button className="app__button">Add to bookmarks</button>
                <button className="app__button">Read more</button>
              </div>
          </li>
        ))}
      </ul>
     </div>
   </div>
  );
}

export default App;
