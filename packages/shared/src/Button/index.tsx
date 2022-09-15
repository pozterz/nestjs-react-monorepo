import { Button as AntButton } from 'antd'
import { ButtonProps } from 'antd/lib/button/button'
import React from 'react'

export const Button = (props: ButtonProps) => {
  return (
    <AntButton
      className={`rounded bg-black text-white hover:bg-black hover:text-white hover:border-black ${
        props.className || ''
      }`}
      {...props}
    >
      {props.children || ''}
    </AntButton>
  )
}

export const ButtonOutline = (props: ButtonProps) => {
  return (
    <AntButton
      {...props}
      className={`rounded border-black text-black ${props.className || ''}`}
    >
      {props.children || ''}
    </AntButton>
  )
}
