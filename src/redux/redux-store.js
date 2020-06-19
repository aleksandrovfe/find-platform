import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import {BookmarksReducer} from "./BookmarksReducer";

const reducer = combineReducers({
    bookmarks: BookmarksReducer
});

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;
