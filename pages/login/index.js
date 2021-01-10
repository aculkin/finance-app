import { useState } from 'react'
import { Form, Input, Button } from 'antd'
import { useDispatch } from 'react-redux'

import { FixedNavBar } from '../../layouts/FixedNavBar'
import { loginThunk } from '../../redux/user'

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
}
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
}

export const LoginPage = () => {
  const dispatch = useDispatch()
  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: '',
  })

  const onFinishFailed = () => {
    console.log('failed')
  }

  const handleChange = (e) => {
    setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    try {
      console.log('logging in')
      dispatch(loginThunk(loginFormData))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <FixedNavBar>
      <Form
        {...layout}
        name="basic"
        onFinish={handleSubmit}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Email"
          name="email"
          value={loginFormData.email}
          onChange={handleChange}
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}
        >
          <Input name="email" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          valuePropName="password"
          value={loginFormData.password}
          onChange={handleChange}
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password name="password" />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </FixedNavBar>
  )
}

export default LoginPage
