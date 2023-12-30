import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AosContextProvider } from './Context/AosContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AosContextProvider>
      <App />
    </AosContextProvider>
  </React.StrictMode>,
)
