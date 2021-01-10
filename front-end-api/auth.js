import axios from 'axios'

import { apiRoutes } from './utility/apiRoutes'

export const auth = {
  signup: async (payload) => await axios.post(apiRoutes.auth.signup, payload),
  login: async (loginDetails) =>
    await axios.post(apiRoutes.auth.login, loginDetails),
  logout: async () => await axios.post(apiRoutes.auth.logout),
  me: async () => await axios.get(apiRoutes.auth.me),
}
