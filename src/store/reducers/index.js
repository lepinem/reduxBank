// reducers/index.js

import {USER_SELECTED, ACCOUNT_SELECTED, WITHDRAW_FUNDS} from '../constants';
import userList from '../data/users';
import update from 'immutability-helper';

const initialState = {
  users: userList(),
  selectedUser: null,
  selectedAccount: null
}

// #####################################################
// Write the reducer for the `*SOME_CONSTANT*` action
// Provide the reducer function declaration with the necessary parameters
// Give the `state` parameter a default value of `initialState`
// #######################################################
const reducer = function(state = initialState, action) {
  switch (action.type) {
    case USER_SELECTED:
      return update(state, {
        selectedUser: {
          $set: action.payload
        }
      })

    case ACCOUNT_SELECTED:
      return update(state, {
        selectedAccount: {
          $set: action.payload
        }
      })

      case WITHDRAW_FUNDS:
        const userIdx = state.users.findIndex(user => user._id === state.selectedUser._id);
        const accountIdx = state.users[userIdx].accounts.findIndex(account => account.id === state.selectedAccount.id);

        let newState = update(state, {
          users: {
            [userIdx]: {
              accounts: {
                [accountIdx]: {
                  balance: {
                    $apply: function(balance) {
                    console.log("balance - ", balance - action.payload);
                    return balance - action.payload
                    }
                  }
                }
              }
            }
          }
        })
        newState.selectedAccount = newState.users[userIdx].accounts[accountIdx]
        return newState
    default:
        return state;
      }
  }

export default reducer;
