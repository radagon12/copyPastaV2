import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'

function Layout() {
  return (
    <main>
        <Navbar/>
        <Outlet/>
    </main>
  )
}

export default Layout