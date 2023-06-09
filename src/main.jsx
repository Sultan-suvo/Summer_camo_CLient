import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import {  HelmetProvider } from 'react-helmet-async';
import router from './Routes/Routes.jsx'
import AuthProvider from './Providers/AuthProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='m-0 md:mx-12'>
    <React.StrictMode>
      <HelmetProvider>
        <AuthProvider>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />         
        </QueryClientProvider>
        </AuthProvider>
      </HelmetProvider>
    </React.StrictMode>
  </div>,
)
