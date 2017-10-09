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
      const userId = state.users.find(user => user.id === state.selectedUser);
      const accountId = state.users[userId].accounts.find(account => account.id === state.selectedAccount);

        return update(state, {
          users: {
            [userId]: {
              accounts: {
                [accountId]: {
                  balance: {
                    $apply: (balance) => {
                      return balance - action.payload
                    }
                  }
                }
              }
            }
          }
        })
    default:
      return state;
  }
}

export default reducer;
