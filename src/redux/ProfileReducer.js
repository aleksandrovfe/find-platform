const SET_PROFILE_DATA = 'SET_PROFILE_DATA'

const initialState = {
    profileData: null,
};

export const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE_DATA:
            return {
                ...state,
                profileData: action.payload,
            };
        default:
            return state;
    }
};

export const setProfileData = payload => ({
    type: SET_PROFILE_DATA,
    payload
})
