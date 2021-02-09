import {createStore, combineReducers} from "redux";
import { reducer as formReducer } from 'redux-form'
import {BookmarksReducer} from "./BookmarksReducer";
import {AuthorizationReducer} from "./AuthorizationReducer";
import {NewPostReducer} from "./NewPostReducer";

const reducer = combineReducers({
    bookmarks: BookmarksReducer,
    auth: AuthorizationReducer,
    NewPost: NewPostReducer,
    form: formReducer,
});


const store = createStore(
    reducer,
);


export default store;
