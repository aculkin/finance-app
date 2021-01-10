import * as types from './types'
import { API } from '../../front-end-api'

//user actions
export const signup = (payload) => ({ type: types.SIGNUP, payload })
export const login = (payload) => ({ type: types.LOGIN, payload })
export const logout = () => ({ type: types.LOGOUT })
export const me = (payload) => ({ type: types.ME, payload })
export const edit = (payload) => ({ type: types.EDIT_USER, payload })

//user thunks
export const signupThunk = (payload) => async (dispatch) => {
  try {
    const { data: user } = await API.auth.signup(payload)
    dispatch(signup(user))
  } catch (error) {
    return error
  }
}
export const loginThunk = (payload) => async (dispatch) => {
  try {
    const { data: user } = await API.auth.login(payload)
    dispatch(login(user))
  } catch (error) {
    return error
  }
}
export const logoutThunk = () => async (dispatch) => {
  try {
    await API.auth.logout()
    dispatch(logout())
  } catch (error) {
    return error
  }
}
export const meThunk = () => async (dispatch) => {
  try {
    const { data: user } = await API.auth.me()
    dispatch(me(user))
    return user
  } catch (error) {
    return error
  }
}
export const editUserThunk = (editedUser) => async (dispatch) => {
  try {
    const { data: user } = await API.users.editUser(editedUser)
    dispatch(edit(user))
  } catch (error) {
    return error
  }
}
