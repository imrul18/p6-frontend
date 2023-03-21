// ** React Imports
import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

const UserList = lazy(() => import('./list'))
const UserAdd = lazy(() => import('./add'))
// const UserView = lazy(() => import('./view'))


const UserRoute = [  
  {
    element: <UserList />,
    path: '/user'
  },
  {
    element: <UserAdd />,
    path: '/user-add',
  }
  // {
  //   element: <UserView />,
  //   path: '/apps/user/view/:id'
  // }
]

export default UserRoute
