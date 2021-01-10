import * as types from './types'

const initialState = []

export const balanceReducer = (state = initialState, { type, id, payload }) => {
  switch (type) {
    case types.CREATE_BALANCE:
    case types.GET_BALANCE:
      return [...state, payload]
    case types.EDIT_BALANCE:
      const editedBalanceState = state.filter((balance) => balance.id !== id)
      return [...editedBalanceState, payload]
    case types.DELETE_BALANCE:
      const deletedBalanceState = state.filter((balance) => balance.id !== id)
      return deletedBalanceState
    default:
      return state
  }
}
