import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import { reducer as formReducer } from 'redux-form'
import {BookmarksReducer} from "./BookmarksReducer";
import {AuthorizationReducer} from "./AuthorizationReducer";
import thunk from "redux-thunk";
import {NewPostReducer} from "./NewPostReducer";
import {reduxFirestore, getFirestore} from "redux-firestore";
import {reactReduxFirebase, getFirebase} from "react-redux-firebase";
import {firebaseApp} from "../firebase/firebaseInfo";


const reducer = combineReducers({
    bookmarks: BookmarksReducer,
    auth: AuthorizationReducer,
    NewPost: NewPostReducer,
    form: formReducer,
});


const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
        reduxFirestore(firebaseApp),
        reactReduxFirebase(firebaseApp),
    )
);


export default store;
