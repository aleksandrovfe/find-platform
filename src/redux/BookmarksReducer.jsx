const ADD_POST_TO_BOOKMARKS = 'ADD_POST_TO_BOOKMARKS'

const initialState = {
    dataForBookmarks: ['asdasd'],
};

export const BookmarksReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST_TO_BOOKMARKS:
            return {
                ...state,
                dataForBookmarks: [...state.dataForBookmarks, action.payload],
            };
        default:
            return state;
    }
};

export const addPostToBookmarks = payload => ({
    type: ADD_POST_TO_BOOKMARKS,
    payload
})
