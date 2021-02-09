const ADD_NEW_POST = 'ADD_NEW_POST'

const initialState = {
    userData: null,
};

export const NewPostReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_POST:
            return {
                ...state,
                userData: action.payload,
            };
        default:
            return state;
    }
};

export const AddNewPost = payload => ({
    type: ADD_NEW_POST,
    payload
})

export const AddNewPostAC = (post) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        dispatch({type: ADD_NEW_POST, post})
    }
}
