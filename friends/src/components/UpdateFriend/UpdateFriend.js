import React, { Component } from 'react';
import { getFriends, updateFriend } from '../../actions';
import { connect } from 'react-redux';

class UpdateFriend extends Component {

    state = {
        id: null,
        name: null,
        age: null,
        email: null,
        addingFriend: false,
        friendAdded: false,
        updatingFriend: false,
        friendUpdated: false,
      }
    
      inputChangeHandler = ({ target }) => {
        this.setState({
          [target.name]: target.value,
        });
      }

      inputSubmitHandler = (event) => {
          event.preventDefault();
          const { id, name, age, email } = this.state;
          this.props.updateFriend({ id, name, age, email });
      }
    
    render() {
        return (
            <form onSubmit={(event) => this.inputSubmitHandler(event)}>
                <input onChange={this.inputChangeHandler} required placeholder='ID' name='id'></input>
                <input onChange={this.inputChangeHandler} required placeholder='Name' name='name'></input>
                <input onChange={this.inputChangeHandler} required placeholder='Age' name='age'></input>
                <input onChange={this.inputChangeHandler} required placeholder='email' name='email'></input>
                <button>Update Friend</button>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        error: state.error,
        updatingFriend: state.updatingFriend,
    }
};

export default connect (mapStateToProps, { getFriends, updateFriend })(UpdateFriend);
