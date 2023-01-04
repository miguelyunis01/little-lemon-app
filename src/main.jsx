import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import BookingPage from './pages/BookingPage'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
  },
  {
    path: '/booking/new',
    element: <BookingPage />
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
