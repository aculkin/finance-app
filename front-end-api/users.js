import axios from 'axios'

import { apiRoutes } from './utility/apiRoutes'

export const users = {
  editUser: async (editedUser) =>
    await axios.put(apiRoutes.users.edit, editedUser),
  changePassword: async (passwords) =>
    await axios.put(apiRoutes.users.changePassword, passwords),
}

export default users
