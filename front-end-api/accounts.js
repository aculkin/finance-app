import axios from 'axios'

import { apiRoutes } from './utility/apiRoutes'

export const accounts = {
  createAccount: async (account) =>
    await axios.post(apiRoutes.accounts.base, account),
  getAccount: async (id) => {
    await axios.get(apiRoutes.accounts.specific(id))
  },
  editAccount: async (id, payload) =>
    await axios.put(apiRoutes.accounts.specific(id), payload),
  deleteAccount: async (id) =>
    await axios.delete(apiRoutes.accounts.specific(id)),
}
