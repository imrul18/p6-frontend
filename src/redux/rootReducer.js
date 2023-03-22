import layout from "./layout";
import navbar from "./navbar";
import Auth from '@src/views/Auth/store'
import users from '@src/views/User/store'
import roles from '@src/views/Role/store'
import permissions from '@src/views/Permission/store'
import products from '@src/views/Product/store'

const rootReducer = { 
    navbar, 
    layout,
    Auth,
    users,
    roles,
    permissions,
    products
 };

export default rootReducer;
