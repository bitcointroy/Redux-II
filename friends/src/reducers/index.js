// REDUCERS

import { GETTING_FRIENDS, FRIENDS_RECEIVED, ADDING_FRIEND, FRIEND_ADDED, ERROR, DELETING_FRIEND, FRIEND_DELETED, UPDATING_FRIEND, FRIEND_UPDATED } from '../actions';

const initialState = {
    friends: [],
    fetching: false,
    fetched: false,
    addingFriend: false,
    friendAdded: false,
    deletingFriend: false,
    friendDeleted: false,
    deletedFriend: false,
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
        case DELETING_FRIEND:
            return { ...state, deletingFriend: true };
        case FRIEND_DELETED:
            return { ...state, friends: action.payload, deletingFriend: false, deletedFriend: true };
        case UPDATING_FRIEND:
            return { ...state, updatingFriend: true };
        case FRIEND_UPDATED:
            return { ...state, friends: action.payload, updatingFriend: false, friendUpdated: true };
        case ERROR:
            return { ...state, fetching: false, addingFriend: false, deletingFriend: false, error: action.payload };
        default:
            return state;
    }
}