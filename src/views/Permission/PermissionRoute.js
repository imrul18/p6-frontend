// ** React Imports
import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

const PermissionList = lazy(() => import('./list'))


const UserRoute = [  
  {
    element: <PermissionList />,
    path: '/permission-list'
  }
]

export default UserRoute
