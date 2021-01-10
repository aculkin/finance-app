export const loggedIn = {
  left: [
    { key: '1', name: 'Home', address: '/' },
    { key: '2', name: 'Dashboard', address: '/dashboard' },
    { key: '3', name: 'About', address: '/about' },
  ],
  right: [{ key: '4', name: 'Settings', address: '/settings' }],
}

export const notLoggedIn = {
  left: [
    { key: '1', name: 'Home', address: '/' },
    { key: '2', name: 'About', address: '/about' },
  ],
  right: [
    { key: '3', name: 'Login', address: '/login' },
    { key: '4', name: 'Signup', address: '/signup' },
  ],
}

export const getNavItems = (user) => (user ? loggedIn : notLoggedIn)

export default getNavItems
