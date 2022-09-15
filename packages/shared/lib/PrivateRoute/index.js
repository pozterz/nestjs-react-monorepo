import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ConfigProvider, Layout } from 'antd';
import { AUTH_STORAGE_NAME } from '../constants/_environment';
import { isExpiredToken } from '../utils/session';
import { Content } from 'antd/lib/layout/layout';
export const PrivateRoute = ({ component: Component, title = '', ...rest }) => {
    const token = localStorage.getItem(AUTH_STORAGE_NAME);
    const isExpired = isExpiredToken(token);
    console.log(token, isExpired);
    return (React.createElement(Route, { ...rest, render: (props) => token && !isExpired ? (React.createElement(ConfigProvider, null,
            React.createElement(Layout, { style: { minHeight: '100vh', overflow: 'hidden' } },
                React.createElement(Layout, { className: "site-layout" },
                    React.createElement(Content, { className: "site-layout-background", style: {
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        } },
                        React.createElement(Component, { ...props })))))) : (React.createElement(Redirect, { to: { pathname: '/unauthorized' } })) }));
};
