import React, { useContext } from 'react'
import { PrivateContext } from '../context/PrivateContext'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = () => {

  const {token} = useContext(PrivateContext)

  return (
    token ? <Outlet/> : <Navigate to="/"/>
  )
}

export default PrivateRoutes