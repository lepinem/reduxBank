// UserList.js

//normal react imports
import React, { Component } from 'react'

//the glue that binds React to Redux so they can communicate
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
//our action creator to select a user
import { selectUser }  from '../store/actions'

// The props that UserList receives come from our state.
// the mapStateToProps function below does this for us.
class UserList extends Component {
    render() {
        let users = this.props.users.map((user) => {
            return (
                <li key={user._id} className="list-group-item" onClick={() => this.props.selectUser(user)}>
                  <Link to={`/users/${user._id}`}>{user.name}</Link>
                </li>
            );
        });
        return (
            <div>
              <h5>Users with open accounts:</h5>
              <ul>
                {users}
              </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
  //what is returned will show up as props inside of the UserList container
  //inside of this function we generally return an object
  return {
    users: state.users,
  }
}

function mapDispatchToProps(dispatch) {
  // whenever selectUser is called, the result should be passed to
  // the reducer.
//     return {
//       selectUser: user => {
//         dispatch(selectUser(user))
//       }
//     }
// }
//
// function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        selectUser: selectUser
    }, dispatch)
}

// Promotes UserList from component to container.
// This connects our functions to our container component.
export default connect(mapStateToProps, mapDispatchToProps)(UserList)
