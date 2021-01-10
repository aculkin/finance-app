import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Layout, Menu, Button } from 'antd'
const { Header } = Layout
import Link from 'next/link'

import { getNavItems } from './navItems'
import { meThunk, logoutThunk } from '../../redux/user'

export const NavBar = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  useEffect(() => dispatch(meThunk()), [])
  const { left, right } = getNavItems(user)

  const logout = async () => {
    try {
      dispatch(logoutThunk())
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <Menu mode="horizontal" theme="dark">
        {left.map((menuItem) => {
          const { name, key, address } = menuItem
          return (
            <Menu.Item key={key} style={{ float: 'left' }}>
              <Link href={address}>{name}</Link>
            </Menu.Item>
          )
        })}
        {right.map((menuItem) => {
          const { name, key, address } = menuItem
          return (
            <Menu.Item key={key} style={{ float: 'right' }}>
              <Link href={address}>{name}</Link>
            </Menu.Item>
          )
        })}
        {user?.id && (
          <Menu.Item onClick={logout} style={{ float: 'right' }}>
            Logout
          </Menu.Item>
        )}
      </Menu>
    </Header>
  )
}

export default NavBar
