import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends, deleteFriend } from '../../actions';
import UpdateFriend from '../UpdateFriend/UpdateFriend';

import './FriendsList.css';

class FriendsList extends Component {

    componentDidMount() {
        console.log('props: ', this.props);
        this.props.getFriends();
    }
    
    render() {
        return (
            <div>
            <UpdateFriend />
            <ul>
            {this.props.friends.map(friend => {
                return <li key={friend.id}>
                <div>{friend.id}</div>
                <div>{friend.name}</div>
                <div>{friend.age}</div>
                <div>{friend.email}</div>
                <button id={friend.id} onClick={() => this.props.deleteFriend(friend.id)}>Delete {friend.name}</button>
                </li>
            })} 
            </ul>
            </div>
        )
    }
}

FriendsList.defaultProps = {
    friends: [],
}

const mapStateToProps = state => {
    return {
        friends: state.friends,
        fetching: state.fetching,
        error: state.error,
    }
}

export default connect(mapStateToProps, { getFriends, deleteFriend })(FriendsList);
