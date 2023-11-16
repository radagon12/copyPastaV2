import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { PrivateContextProvider } from './context/PrivateContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ChakraProvider>
  <BrowserRouter>
  <PrivateContextProvider>
    <App />
  </PrivateContextProvider>
  </BrowserRouter>
  </ChakraProvider>
  </React.StrictMode>,
)
