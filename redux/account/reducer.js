import * as types from './types'

const initialState = []

export const accountReducer = (state = initialState, { type, id, payload }) => {
  switch (type) {
    case types.CREATE_ACCOUNT:
    case types.GET_ACCOUNT:
      return [...state, payload]
    case types.EDIT_ACCOUNT:
      const editedAccountState = state.filter((account) => account.id !== id)
      return [...editedAccountState, payload]
    case types.DELETE_ACCOUNT:
      const deletedAccountState = state.filter((account) => account.id !== id)
      return deletedAccountState
    default:
      return state
  }
}
