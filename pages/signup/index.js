import { useState } from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import { useDispatch } from 'react-redux'

import { FixedNavBar } from '../../layouts/FixedNavBar'
import { signupThunk } from '../../redux/user'

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

export const SignupPage = () => {
  const dispatch = useDispatch()
  const [signupFormData, setSignupFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleChange = ({ target }) => {
    const { name, value } = target
    setSignupFormData({ ...signupFormData, [name]: value })
  }

  const handleSubmit = async () => {
    try {
      dispatch(signupThunk(signupFormData))
    } catch (error) {
      console.log(error)
    }
  }

  const onFinishFailed = () => {
    console.log('failed')
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
          label="First Name"
          name="firstName"
          value={signupFormData.firstName}
          onChange={handleChange}
          rules={[
            {
              required: true,
              message: 'Please input your first name!',
            },
          ]}
        >
          <Input name="firstName" />
        </Form.Item>
        <Form.Item
          label="Last Name"
          name="lastName"
          value={signupFormData.lastName}
          onChange={handleChange}
          rules={[
            {
              required: true,
              message: 'Please input your last name!',
            },
          ]}
        >
          <Input name="lastName" />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          value={signupFormData.email}
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
          value={signupFormData.password}
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
        <Form.Item
          label="Confirm Password"
          name="confirmPassword"
          value={signupFormData.password}
          onChange={handleChange}
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
          ]}
        >
          <Input.Password name="confirmPassword" />
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

export default SignupPage
