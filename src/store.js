import {configureStore} from "@reduxjs/toolkit"
import { loadUser,user,userMethod,userLog } from "./Reducer/user";


const store=configureStore({
    reducer:{
       user:user,
       loadUser:loadUser,
       userMethod:userMethod,
       userLog:userLog
    },
});

export default store;