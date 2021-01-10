import { Layout, Menu, Breadcrumb } from 'antd'
const { Header, Content, Footer } = Layout

import { NavBar } from '../Components/NavBar'

export const FixedNavBar = (props) => {
  const { children } = props
  return (
    <Layout>
      <NavBar />
      <Content
        className="site-layout"
        style={{ padding: '0 50px', marginTop: 64 }}
      >
        {children}
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  )
}

export default FixedNavBar
