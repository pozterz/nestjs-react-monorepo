import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { ConfigProvider, Layout } from 'antd'
import { AUTH_STORAGE_NAME } from '../constants/_environment'
import { isExpiredToken } from '../utils/session'
import { Content } from 'antd/lib/layout/layout'

export const PrivateRoute = ({
  component: Component,
  title = '',
  ...rest
}): any => {
  const token = localStorage.getItem(AUTH_STORAGE_NAME)
  const isExpired = isExpiredToken(token)

  return (
    <Route
      {...rest}
      render={(props) =>
        token && !isExpired ? (
          <ConfigProvider>
            <Layout style={{ minHeight: '100vh', overflow: 'hidden' }}>
              <Layout className="site-layout">
                <Content
                  className="site-layout-background"
                  style={{
                    margin: '24px 16px',
                    padding: 24,
                    minHeight: 280,
                  }}
                >
                  <Component {...props} />
                </Content>
              </Layout>
            </Layout>
          </ConfigProvider>
        ) : (
          <Redirect to={{ pathname: '/unauthorized' }} />
        )
      }
    />
  )
}
