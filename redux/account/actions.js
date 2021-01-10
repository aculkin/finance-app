import * as types from './types'
import { API } from '../../front-end-api'

export const createAccount = (payload) => ({
  type: types.CREATE_ACCOUNT,
  payload,
})
export const getAccount = (payload) => ({
  type: types.GET_ACCOUNT,
  payload,
})
export const editAccount = (id, payload) => ({
  type: types.EDIT_ACCOUNT,
  id,
  payload,
})
export const deleteAccount = (id) => ({
  type: types.DELETE_ACCOUNT,
  id,
})

export const createAccountThunk = (payload) => async (dispatch) => {
  try {
    const { data: account } = await API.accounts.createAccount(payload)
    dispatch(createAccount(account))
  } catch (error) {
    return error
  }
}
export const getAccountThunk = (id) => async (dispatch) => {
  try {
    const { data: account } = await API.accounts.getAccount(id)
    dispatch(getAccount(account))
  } catch (error) {
    return error
  }
}
export const editAccountThunk = (id, payload) => async (dispatch) => {
  try {
    const { data: account } = await API.accounts.editAccount(id, payload)
    dispatch(editAccount(id, account))
  } catch (error) {
    return error
  }
}
export const deleteAccountThunk = (id) => async (dispatch) => {
  try {
    await API.accounts.deleteAccount(id)
    dispatch(deleteAccount(id))
  } catch (error) {
    return error
  }
}
