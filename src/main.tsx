import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SwigyCorporate from './Pages/SwigyCorporate'
import { Search } from 'lucide-react'
import Offers from './Pages/Offers'
import Help from './Pages/Help'
import SignIn from './Pages/SignIn'
import Cart from './Pages/Cart'
import RestaurantsMenu from './components/Cards/RestaurantsMenu'



const router = createBrowserRouter([
 {
  path : '/',
  element : <App />,
  children: [
    {
      path: '/',
      element: <SwigyCorporate />,
    },
    {
      path: '/Search',
      element: <Search />
    },
    {
      path : '/Offers',
      element : <Offers />
    },
    {
      path : '/Help',
      element : <Help />
    },
    {
      path : '/Signin',
      element : <SignIn />
    },
    {
      path : '/Cart',
      element : <Cart />
    },
    {
      path : 'restaurants/:resId',
      element : <RestaurantsMenu />
    },
    
  ]
 }
]
)


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   
    <RouterProvider router={router} />
  </React.StrictMode>,
)
