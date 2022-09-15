import React, { useState } from 'react';
import el from '../assets/el.png';
import cl from '../assets/cl.png';
import logo from '../assets/logo.png';
import { Divider, Input, Form } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
// import { AuthenStore } from '../../store'
// import { login } from '../../actions/auth.actions'
import { Button } from '../Button';
export const Login = ({ handleLogin }) => {
    const history = useHistory();
    // const { setUserAuthen } = AuthenStore()
    const [loading, setLoading] = useState(false);
    // const handleLogin = async (values) => {
    //   try {
    //     const { email, password } = values
    //     setLoading(true)
    //     const { data } = await login({ email, password })
    //     if (data) {
    //       setUserAuthen(data)
    //       if (data.role == 'Clinic') {
    //         return history.push('/cloud')
    //       } else if (data.role === 'Admin' || data.role === 'Superadmin') {
    //         return history.push('/admin')
    //       }
    //     }
    //     setLoading(false)
    //   } catch (error) {
    //     setLoading(false)
    //     message.error({
    //       content: 'ไม่สามารถเข้าสู่ระบบได้ กรุณาลองใหม่ภายหลัง',
    //     })
    //   }
    // }
    return (React.createElement("div", { style: { backgroundColor: '#DBDBDB' }, className: "flex items-center justify-center w-full h-screen" },
        React.createElement("div", { className: "flex flex-col p-6 md:w-124" },
            React.createElement("img", { className: "mb-2", src: logo, alt: "" }),
            React.createElement("div", { className: "relative bg-white rounded-lg" },
                React.createElement("img", { src: el, alt: "", className: "absolute top-0 left-0 z-0" }),
                React.createElement("div", { className: "relative z-10 flex flex-col justify-center" },
                    React.createElement("div", { className: "mx-auto mt-24" },
                        React.createElement("div", { className: "mb-6" },
                            React.createElement("img", { src: cl, alt: "" })),
                        React.createElement("div", { className: "text-center" }, "\u0E17\u0E35\u0E48\u0E40\u0E01\u0E47\u0E1A\u0E23\u0E27\u0E1A\u0E23\u0E27\u0E21\u0E2A\u0E37\u0E48\u0E2D\u0E21\u0E31\u0E25\u0E15\u0E34\u0E21\u0E35\u0E40\u0E14\u0E35\u0E22\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E04\u0E25\u0E35\u0E19\u0E34\u0E01"),
                        React.createElement("div", { className: "text-center" }, "\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E40\u0E02\u0E49\u0E32\u0E43\u0E08\u0E19\u0E27\u0E31\u0E15\u0E01\u0E23\u0E23\u0E21\u0E02\u0E2D\u0E07 MERZ \u0E2D\u0E22\u0E48\u0E32\u0E07\u0E41\u0E17\u0E49\u0E08\u0E23\u0E34\u0E07")),
                    React.createElement("div", { className: "p-10 md:px-14 lg:px-20" },
                        React.createElement(Form, { onFinish: handleLogin },
                            React.createElement(Form.Item, { name: "email", rules: [{ required: true, message: 'กรุณากรอกอีเมล' }] },
                                React.createElement(Input, { className: "p-4 my-2 rounded-md", prefix: React.createElement(UserOutlined, null), placeholder: "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E1E\u0E34\u0E21\u0E1E\u0E4C\u0E2D\u0E35\u0E40\u0E21\u0E25" })),
                            React.createElement(Form.Item, { name: "password", rules: [{ required: true, message: 'กรุณากรอกรหัสผ่าน' }] },
                                React.createElement(Input.Password, { prefix: React.createElement(LockOutlined, null), className: "p-4 my-2 rounded-md", placeholder: "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E1E\u0E34\u0E21\u0E1E\u0E4C\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19" })),
                            React.createElement("div", { className: "my-3 text-right" },
                                React.createElement(Link, { to: '/forgot-password' }, "\u0E25\u0E37\u0E21\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19 ?")),
                            React.createElement(Button, { loading: loading, block: true, htmlType: "submit" }, "\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A"))),
                    React.createElement("div", { className: "flex items-center justify-center mt-12 mb-3" },
                        React.createElement("a", null, "\u0E01\u0E25\u0E31\u0E1A\u0E40\u0E27\u0E47\u0E1A\u0E2B\u0E25\u0E31\u0E01"),
                        React.createElement(Divider, { className: "border-black", type: "vertical" }),
                        React.createElement("a", null, "\u0E19\u0E42\u0E22\u0E1A\u0E32\u0E22\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2A\u0E48\u0E27\u0E19\u0E15\u0E31\u0E27")))))));
};
