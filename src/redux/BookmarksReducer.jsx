const ADD_POST_TO_BOOKMARKS = 'ADD_POST_TO_BOOKMARKS'

const initialState = {
    favoritesList: [],

};

export const BookmarksReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST_TO_BOOKMARKS:
            return {
                ...state,
                favoritesList: [...state.favoritesList, action.payload],
            };
        default:
            return state;
    }
};

export const addPostToBookmarks = payload => ({
    type: ADD_POST_TO_BOOKMARKS,
    payload
})
