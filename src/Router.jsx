import { createBrowserRouter } from "react-router-dom";
import Home from "./Layout/Home/Home";
import App from "./App";
import AllPublisher from "./Layout/AllPublisher/AllPublisher";
import Plans from "./Layout/Plans/Plans";
import Login from "./Layout/Login/Login";
import Register from "./Layout/Register/Register";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <div>404</div>,
        children:[
            {
                path:"/",
                element: <Home></Home>
            },
            {
                path:"all-publisher",
                element: <AllPublisher></AllPublisher>
            },
            {
                path:"plans",
                element: <Plans></Plans>
            },
        ]
    },
    {
        path: "login",
        element: <Login></Login>
    },
    {
        path: "register",
        element: <Register></Register>
    },
])