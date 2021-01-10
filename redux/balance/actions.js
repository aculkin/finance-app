import * as types from './types'
import { API } from '../../front-end-api'

export const createBalance = (payload) => ({
  type: types.CREATE_BALANCE,
  payload,
})
export const getBalance = (payload) => ({
  type: types.GET_BALANCE,
  payload,
})
export const editBalance = (id, payload) => ({
  type: types.EDIT_BALANCE,
  id,
  payload,
})
export const deleteBalance = (id) => ({
  type: types.DELETE_BALANCE,
  id,
})

export const createBalanceThunk = (payload) => async (dispatch) => {
  try {
    const { data: balance } = await API.balances.createBalance(payload)
    dispatch(createBalance(balance))
  } catch (error) {
    return error
  }
}
export const getBalanceThunk = (id) => async (dispatch) => {
  try {
    const { data: balance } = await API.balances.getBalance(id)
    dispatch(getBalance(balance))
  } catch (error) {
    return error
  }
}
export const editBalanceThunk = (id, payload) => async (dispatch) => {
  try {
    const { data: balance } = await API.balances.editBalance(id, payload)
    dispatch(editBalance(id, balance))
  } catch (error) {
    return error
  }
}
export const deleteBalanceThunk = (id) => async (dispatch) => {
  try {
    await API.balances.deleteBalance(id)
    dispatch(deleteBalance(id))
  } catch (error) {
    return error
  }
}
