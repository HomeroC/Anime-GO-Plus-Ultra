import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import HomeScreen from './Screens/HomeScreen'
import Watchlist from './Screens/Watchlist'
import Auth from './Screens/Auth'

function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          index: true,
          path: 'home',
          element: <HomeScreen />
        },
        {
          path: 'watchlist',
          element: <Watchlist />
        },
        {
          path: 'login',
          element: <Auth />
        }
      ],
    }
   
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default Router