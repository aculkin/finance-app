import * as types from './types'

const initialState = []

export const transactionReducer = (
  state = initialState,
  { type, id, payload }
) => {
  switch (type) {
    case types.CREATE_TRANSACTION:
    case types.GET_TRANSACTION:
      return [...state, payload]
    case types.EDIT_TRANSACTION:
      const editedTransactionState = state.filter(
        (transaction) => transaction.id !== id
      )
      return [...editedTransactionState, payload]
    case types.DELETE_TRANSACTION:
      const deletedTransactionState = state.filter(
        (transaction) => transaction.id !== id
      )
      return deletedTransactionState
    default:
      return state
  }
}
