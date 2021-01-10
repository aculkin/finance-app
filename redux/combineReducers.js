import { combineReducers } from 'redux'

import { userReducer } from './user'
import { accountReducer } from './account'
import { balanceReducer } from './balance'
import { transactionReducer } from './transaction'

// COMBINED REDUCERS
const reducers = {
  user: userReducer,
  accounts: accountReducer,
  balances: balanceReducer,
  transactions: transactionReducer,
}

export default combineReducers(reducers)
