import {createBrowserRouter, Navigate } from "react-router"
import Login from "./features/auth/pages/Login"
import Register from "./features/auth/pages/Register"
import Protected from "./features/auth/components/protected"
import Home from "./features/interview/pages/Home"
import  interview from "./features/interview/pages/Interview"


export const router=createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/login" replace />
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/register",
        element:<Register/>
    },
    {
        path:"/",
        element:<Protected><Home/></Protected>
    },
    {
       path:"/interview/:interviewId",
       element: <Protected><interview/></Protected>
    }
])