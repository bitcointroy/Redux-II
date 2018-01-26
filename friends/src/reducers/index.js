// REDUCERS

import { GETTING_FRIENDS, FRIENDS_RECEIVED, ADDING_FRIEND, FRIEND_ADDED, ERROR } from '../actions';

const initialState = {
    friends: [],
    fetching: false,
    fetched: false,
    addingFriend: false,
    friendAdded: false,
    error: null,
}

export const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETTING_FRIENDS:
            return { ...state, fetching: true };
        case FRIENDS_RECEIVED:
            return { ...state, friends: action.payload, fetching: false, fetched: true };
        case ADDING_FRIEND:
            return { ...state,  
            addingFriend: true };
        case FRIEND_ADDED:
            return { ...state, friends: action.payload,
            friendAdded: true, addingFriend: false };
        case ERROR:
            return { ...state, fetching: false, addingFriend: false, error: action.payload };
        default:
            return state;
    }
}