import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'

import { AuthProvider } from './AuthContext.jsx'
import router from './router.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
<RouterProvider router={router} />
</AuthProvider>

  </React.StrictMode>,
)
