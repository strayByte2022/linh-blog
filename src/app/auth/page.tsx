import React from 'react'
import LeftPanel from '../components/auth/LeftPanel'
import RightPanel from '../components/auth/RightPanel'

const LoginPage = () => {
  return (
    <div className='flex'>
        <LeftPanel/>
        <RightPanel/>
    </div>
  )
}

export default LoginPage