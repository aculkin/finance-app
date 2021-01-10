export const apiRoutes = {
  base: '/api',
  auth: {
    base: '/api/auth',
    me: '/api/auth/me',
    signup: '/api/auth/signup',
    login: '/api/auth/login',
    logout: '/api/auth/logout',
  },
  users: {
    base: '/api/users',
    specific: (id) => `/api/users/${id}`,
  },
  accounts: {
    base: '/api/accounts',
    specific: (id) => `/api/accounts/${id}`,
  },
  balances: {
    base: '/api/balances',
    specific: (id) => `/api/balances/${id}`,
  },
  transactions: {
    base: '/api/transactions',
    specific: (id) => `/api/transactions/${id}`,
  },
}

export default apiRoutes
