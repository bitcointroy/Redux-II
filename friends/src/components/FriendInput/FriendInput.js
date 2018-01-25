import React, { Component } from 'react';
import axios from 'axios';
import { getFriends } from '../../actions';
import { connect } from 'react-redux';

class FriendInput extends Component {

    state = {
        name: null,
        age: null,
        email: null,
      }
    
      inputChangeHandler = ({ target }) => {
        this.setState({
          [target.name]: target.value,
        });
      }

      inputSubmitHandler = (event) => {
          event.preventDefault();
          const url = 'http://localhost:5000/api/friends/create';
          axios.post(url, this.state)
            .then(this.props.getFriends())
            .then(this.setState({
                name: null,
                age: null,
                email: null,
            }))
            .catch(err => console.log('No friend added', err))
      }
    
    render() {
        return (
            <form onSubmit={this.inputSubmitHandler}>
                <input onChange={this.inputChangeHandler} placeholder='Name' name='name'></input>
                <input onChange={this.inputChangeHandler} placeholder='Age' name='age'></input>
                <input onChange={this.inputChangeHandler} placeholder='email' name='email'></input>
                <button>Add Friend</button>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        state,
    }
};

export default connect (mapStateToProps, { getFriends })(FriendInput);
