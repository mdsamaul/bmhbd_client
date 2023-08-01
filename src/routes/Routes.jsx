import { createBrowserRouter } from 'react-router-dom'
import LoginLayout from '../layouts/LoginLayout.jsx'
import Main from '../layouts/Main.jsx'
import Home from '../pages/Home/Home/Home.jsx'
import Login from '../pages/Login/Login.jsx'
import Registration from '../pages/Registration/Registration.jsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home></Home>
      }
    ]
  }, {
    path: '/login',
    element: <LoginLayout />,
    children: [
      {
        path: '/login',
        element: <Login />
      }
    ]
  }, {
    path: '/registration',
    element: <Registration />
  }
])
