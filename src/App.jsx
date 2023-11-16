import React, { useContext, useState } from 'react'
import Navbar from './components/Navbar'
import Textbox from './components/Textbox'
import Footer from './components/Footer'
import Home from './components/Home'
import Layout from './components/Layout'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import {PrivateContext} from './context/PrivateContext'
import PrivateRoutes from './components/PrivateRoutes'
import LoadingBar from 'react-top-loading-bar'

const App = () => {

  const {token} = useContext(PrivateContext)
  const [progress, setProgress] = useState(0)

  return (
    <>
    <LoadingBar
        color='white'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element ={<Home setProgress={setProgress}/>} />
        <Route element={<PrivateRoutes/>}>
          <Route path='/private' exact element={<Textbox setProgress={setProgress}/>}/>
          <Route path='/global' exact element={<Textbox setProgress={setProgress}/>} />
        </Route>
        <Route path='/global' element={<Textbox setProgress={setProgress}/>} />
      </Route>
    </Routes>
    </>
  )
}

export default App