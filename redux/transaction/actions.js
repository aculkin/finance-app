import * as types from './types'
import { API } from '../../front-end-api'

export const createTransaction = (payload) => ({
  type: types.CREATE_TRANSACTION,
  payload,
})
export const getTransaction = (payload) => ({
  type: types.GET_TRANSACTION,
  payload,
})
export const editTransaction = (id, payload) => ({
  type: types.EDIT_TRANSACTION,
  id,
  payload,
})
export const deleteTransaction = (id) => ({
  type: types.DELETE_TRANSACTION,
  id,
})

export const createTransactionThunk = (payload) => async (dispatch) => {
  try {
    const { data: transaction } = await API.transactions.createTransaction(
      payload
    )
    dispatch(createTransaction(transaction))
  } catch (error) {
    return error
  }
}
export const getTransactionThunk = (id) => async (dispatch) => {
  try {
    const { data: transaction } = await API.transactions.getTransaction(id)
    dispatch(getTransaction(transaction))
  } catch (error) {
    return error
  }
}
export const editTransactionThunk = (id, payload) => async (dispatch) => {
  try {
    const { data: transaction } = await API.transactions.editTransaction(
      id,
      payload
    )
    dispatch(editTransaction(id, transaction))
  } catch (error) {
    return error
  }
}
export const deleteTransactionThunk = (id) => async (dispatch) => {
  try {
    await API.transactions.deleteTransaction(id)
    dispatch(deleteTransaction(id))
  } catch (error) {
    return error
  }
}
