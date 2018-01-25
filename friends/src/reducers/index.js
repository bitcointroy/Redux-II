// REDUCERS

import { GETTING_FRIENDS, FRIENDS_RECEIVED } from '../actions';

const initialState = {
    friends: [],
    fetching: false,
    fetched: false,
    error: null,
}

export const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETTING_FRIENDS:
            return { ...state, fetching: true };
        case FRIENDS_RECEIVED:
            return { ...state, friends: action.payload, fetching: false, fetched: true };
        default:
            return state;
    }
}