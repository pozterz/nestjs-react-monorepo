import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import { AUTH_STORAGE_NAME } from '@example/shared/src/constants/_environment'
import { isExpiredToken } from '@example/shared/src/utils/session'
import { Layout } from 'antd'
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
            <Layout className="h-screen">
              <Layout className="h-full bg-white md:bg-grey-light">
                <Content className="bg-white md:bg-grey-light">
                  <div className="container h-full px-2 py-6 mx-auto overflow-y-auto ">
                    <Component {...props} />
                  </div>
                </Content>
              </Layout>
            </Layout>
          </ConfigProvider>
        ) : (
          <Redirect to={{ pathname: '/login' }} />
        )
      }
    />
  )
}
