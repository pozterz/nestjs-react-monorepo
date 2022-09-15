import { Button as AntButton } from 'antd'
import React from 'react'
export const Button = (props) => {
  return React.createElement(
    AntButton,
    {
      className: `rounded bg-black text-white hover:bg-black hover:text-white hover:border-black ${
        props.className || ''
      }`,
      ...props,
    },
    props.children || ''
  )
}
export const ButtonOutline = (props) => {
  return React.createElement(
    AntButton,
    {
      ...props,
      className: `rounded border-black text-black ${props.className || ''}`,
    },
    props.children || ''
  )
}
