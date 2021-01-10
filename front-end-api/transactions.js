import axios from 'axios'

import { apiRoutes } from './utility/apiRoutes'

export const transactions = {
  createTransaction: async (payload) =>
    await axios.post(apiRoutes.transactions.base, payload),
  getTransaction: async (id) => {
    await axios.get(apiRoutes.transactions.specific(id))
  },
  editTransaction: async (id, payload) =>
    await axios.put(apiRoutes.transactions.specific(id), payload),
  deleteTransaction: async (id) =>
    await axios.delete(apiRoutes.transactions.specific(id)),
}
