import React from 'react'
import { SignatureIcon } from '.'

const SignatureFooter = () => {
  return (
    <div style={{
      position: 'fixed',
      display: 'flex',
      alignItems: 'center',
      bottom: '0%',
      width: '100%',
      justifyContent: 'center'
    }}>
      Made with ❤️ by&nbsp;<a href="https://github.com/Sepiac" target="_blank" rel="noreferrer"><SignatureIcon /></a>
    </div>
  )
}

export default SignatureFooter
