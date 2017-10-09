// actions/index.js

import {USER_SELECTED} from '../constants'
import {ACCOUNT_SELECTED} from '../constants'

import {WITHDRAW_FUNDS} from '../constants'

export function selectUser(userId) {
  return {
    type: USER_SELECTED,
    payload: userId
  }
}

export function selectAccount(accountId) {
  return {
    type: ACCOUNT_SELECTED,
    payload: accountId
  }
}



export function withdrawFunds(amount) {
  return {
    type: WITHDRAW_FUNDS,
    //need to change the amount to an integer value
    payload: parseInt(amount, 10)
  }
}
