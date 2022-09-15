import React, { useState } from 'react'
import { Input, Form, notification, Button } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { AuthenStore } from '../../store'
import { login } from '../../actions/auth.actions'
import { AxiosError } from 'axios'

interface Props {}

export const LoginPage = (props: Props) => {
  const { setUserAuthen } = AuthenStore()
  const [loading, setLoading] = useState(false)

  const handleLogin = async (values) => {
    try {
      const { email, password } = values
      setLoading(true)
      const { data } = await login({ email, password })
      if (data) {
        setUserAuthen(data)
      }
      setLoading(false)
    } catch (error) {
      if (error) {
        const err = error as AxiosError
        if (err.response?.status !== 401) {
          notification.error({
            message: err.response?.data?.message,
          })
        }
      }
      setLoading(false)
    }
  }

  return (
    <div
      style={{ backgroundColor: '#DBDBDB' }}
      className="flex items-center justify-center w-full h-screen"
    >
      <div className="flex flex-col p-6 md:w-124">
        <div className="relative bg-white rounded-lg">
          <div className="relative z-10 flex flex-col justify-center">
            <div className="p-10 md:px-14 lg:px-20">
              <Form onFinish={handleLogin}>
                <Form.Item
                  name="email"
                  className="mb-2"
                  rules={[{ required: true, message: 'กรุณากรอกอีเมล' }]}
                >
                  <Input
                    className="p-4 rounded-lg"
                    prefix={<UserOutlined />}
                    placeholder="กรุณาพิมพ์อีเมล"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  className="mb-2"
                  rules={[{ required: true, message: 'กรุณากรอกรหัสผ่าน' }]}
                >
                  <Input.Password
                    prefix={<LockOutlined />}
                    className="p-4 rounded-lg"
                    placeholder="กรุณาพิมพ์รหัสผ่าน"
                  />
                </Form.Item>
                <div className="mt-4 mb-6 text-right text-blue-primary">
                  <Link to={'/forgot-password'}>ลืมรหัสผ่าน ?</Link>
                </div>
                <Button
                  className="h-16 font-bold"
                  loading={loading}
                  block
                  htmlType="submit"
                >
                  เข้าสู่ระบบ
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
