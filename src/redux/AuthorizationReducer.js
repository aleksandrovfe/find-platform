const SET_USER_DATA = 'SET_USER_DATA'

const initialState = {
    userData: null,
};

export const AuthorizationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                userData: action.payload,
            };
        default:
            return state;
    }
};

export const setUserData = payload => ({
    type: SET_USER_DATA,
    payload
})
