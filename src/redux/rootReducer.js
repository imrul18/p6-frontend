import layout from "./layout";
import navbar from "./navbar";
import Auth from '@src/views/Auth/store'
import users from '@src/views/User/store'
import roles from '@src/views/Role/store'
import permission from '@src/views/Permission/store'

const rootReducer = { 
    navbar, 
    layout,
    Auth,
    users,
    roles,
    permission
 };

export default rootReducer;
