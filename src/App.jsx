import { useState } from 'react'

import './App.css'


import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import Analytics from './components/Analytics/Analytics'
import Invoice from './components/Invoice/Invoice'
import Schedule from './components/Schedule/Schedule'
import Messages from './components/Messages/Messages'
import Notification from './components/Notification/Notification'
import Settings from './components/Settings/Settings'
import DashNav from './components/DashNav/DashNav'
import Calendar from './components/Calendar/Calendar'
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
import AddCustomer from './components/Analytics/AddCustomer'
import CalMonth from './components/Calendar/CalMonth'
import CalYear from './components/Calendar/CalYear'
import BoardList from './components/Settings/BoardList'
import Timeline from './components/Settings/Timeline'
import Recover from './components/Login/Recover'
import Confirm from './components/SignUp/Confirm'
import CreateEvent from './components/Calendar/CreateEvent'
import CreateInvoice from './components/Invoice/CreateInvoice'
import Product from './components/Dashboard/Product'
import AddProduct from './components/Dashboard/AddProduct'



function App() {
  const [count, setCount] = useState(0)


  const router =   createBrowserRouter([
   
    {
      path:'/',
      element: <><Login/></>
    },
    {
      path:'/SignUp',
      element: <><SignUp/></>
    },
    {
      path:'/Dashboard',
      element: <><DashNav/><Dashboard/></>
    },
    {
      path:'/Analytics',
      element: <><DashNav/><Analytics/></>
    },
    {
      path:'/Invoice',
      element: <><DashNav/><Invoice/></>
    },
    {
      path:'/Schedule',
      element: <><DashNav/><Schedule/></>
    },
    {
      path:'/Calendar',
      element: <><DashNav/><Calendar/></>
    },
    {
      path:'/Messages',
      element: <><DashNav/><Messages/></>
    },
    {
      path:'/Notification',
      element: <><DashNav/><Notification/></>
    },
    {
      path:'/Settings',
      element: <><DashNav/><Settings/></>
    },
    
   
    {
      path:'/AddCustomer',
      element: <><DashNav/><AddCustomer/></>
    },
    {
      path:'/CalMonth',
      element: <><DashNav/><CalMonth/></>
    },
    {
      path:'/CalYear',
      element: <><DashNav/><CalYear/></>
    },
    {
      path:'/BoardList',
      element: <><DashNav/><BoardList/></>
    },
    {
      path:'/Timeline',
      element: <><DashNav/><Timeline/></>
    },
    {
      path:'/Confirm',
      element: <><Confirm/></>
    },
    {
      path:'/Recover',
      element: <><Recover/></>
    },
    {
      path:'/CreateEvent',
      element: <><CreateEvent/></>
    },
    {
      path:'/CreateInvoice',
      element: <><DashNav/><CreateInvoice/></>
    },
    {
      path:'/Product',
      element: <><DashNav/><Product/></>
    },
    {
      path:'/AddProduct',
      element: <><DashNav/><AddProduct/></>
    },
   
  ])
    return (
      <>
     
     <div className='flex' > <RouterProvider  router={router} /></div>
      </>
    )
}

export default App
