// AccountDetail.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectAccount }  from '../store/actions';
//make sure action created flows through all reducers
import { bindActionCreators } from 'redux';
//import router Link
import { Link } from 'react-router-dom';
import Transactions from './Transactions'

class AccountDetail extends Component {

  render() {
    if(!this.props.user) {
      return (
        <div>Please select an account...</div>
      )
    }
    //get account id from params of URL
    const { id } = this.props.match.params;
    //map over the accounts for the user to create links to them.
    let accounts = this.props.user.accounts.map(account => {

      //creating a Link with the account type for
      //each account.
      return (
        <div key={account.id}>
          <Link
            onClick={() => this.props.selectAccount(account)}
            to={`/users/${id}/${account.id}`}>{account.accountType}</Link>
        </div>

      )
    })
    return (
      <div className="col-md-6">
        <div className= "card">
          <div className= "card-block">
            <h4 className= "card-title">Account Information</h4>
            <h6 className="card-subtitle mb-2 text-muted">
              {this.props.account.accountType}
            </h6>
            <div className="card-text">
              <div>
                {this.props.account.balance}
              </div>
            </div>
          </div>
          <Transactions />
          <Link className="btn btn-primary" to="/users">
            Back to List of Users
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.selectedUser,
    account: state.selectedAccount
  };
}

function mapDispatchToProps(dispatch) {
  // whenever selectUser is called, the result should be passed to
  // the reducer.
    return bindActionCreators({
            selectAccount: selectAccount
        }, dispatch)
    }


/*

You will need to create a mapDispatchToProps function here and
return the action creator selectAccount - HINT: see the UserList
component.

*/



export default connect(mapStateToProps,  mapDispatchToProps)(AccountDetail);
