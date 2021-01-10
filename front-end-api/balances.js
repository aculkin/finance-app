import axios from 'axios'

import { apiRoutes } from './utility/apiRoutes'

export const balances = {
  createBalance: async (payload) =>
    await axios.post(apiRoutes.balances.base, payload),
  getBalance: async (id) => {
    await axios.get(apiRoutes.balances.specific(id))
  },
  editBalance: async (id, payload) =>
    await axios.put(apiRoutes.balances.specific(id), payload),
  deleteBalance: async (id) =>
    await axios.delete(apiRoutes.balances.specific(id)),
}
