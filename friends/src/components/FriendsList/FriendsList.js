import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends } from '../../actions';

import './FriendsList.css';

class FriendsList extends Component {

    componentDidMount() {
        console.log('props: ', this.props);
        this.props.getFriends();
    }
    
    render() {
        return (
            <ul>
            {this.props.friends.map(friend => {
                return <li key={friend.name}>
                <div>{friend.name}</div>
                <div>{friend.age}</div>
                <div>{friend.email}</div>
                </li>
            })} 
            </ul>
        )
    }
}

FriendsList.defaultProps = {
    friends: [],
}

const mapStateToProps = state => {
    return {
        friends: state.friends,
    }
}

export default connect(mapStateToProps, { getFriends })(FriendsList);
