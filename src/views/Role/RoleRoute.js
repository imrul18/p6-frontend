// ** React Imports
import { lazy } from 'react'

const RoleList = lazy(() => import('./list'))
const RoleAdd = lazy(() => import('./add'))
const RolePermission = lazy(() => import('./permission'))


const RoleRoute = [  
  {
    element: <RoleList />,
    path: '/role'
  },
  {
    element: <RoleAdd />,
    path: '/role-add',
  },
  {
    element: <RolePermission />,
    path: '/role-permission/:id',
  }
]

export default RoleRoute
