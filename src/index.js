import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './resetcss/reset.css';
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/redux-store";

ReactDOM.render(
  <HashRouter>
      <React.StrictMode>
          <Provider store={store}>
              <App />
          </Provider>
      </React.StrictMode>
  </HashRouter>,
  document.getElementById('root')
);

