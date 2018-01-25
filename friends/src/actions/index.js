// ACTIONS

import axios from 'axios';

export const GETTING_FRIENDS = 'GETTING_FRIENDS';
export const FRIENDS_RECEIVED = 'FRIENDS_RECEIVED';

export const getFriends = () => {
    const friends = axios.get('http://localhost:5000/api/friends/get');
    return dispatch => {
        dispatch({ type: GETTING_FRIENDS });
        friends
            .then(({ data }) => {
                dispatch({ type: FRIENDS_RECEIVED, payload: data })
            })
            .catch(err => console.log(err));
    }
}
