import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "../Features/userslice";

export default configureStore({
    reducer:{
        user:userReducer,
    }
})