// ** React Imports
import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

const ProductList = lazy(() => import('./list'))
const ProductAdd = lazy(() => import('./add'))
// const UserView = lazy(() => import('./view'))


const UserRoute = [  
  {
    element: <ProductList />,
    path: '/product'
  },
  {
    element: <ProductAdd />,
    path: '/product-add',
  }
  // {
  //   element: <UserView />,
  //   path: '/apps/user/view/:id'
  // }
]

export default UserRoute
