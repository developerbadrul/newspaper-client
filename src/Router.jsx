import { createBrowserRouter } from "react-router-dom";
import Home from "./Layout/Home/Home";
import App from "./App";
import AllPublisher from "./Layout/AllPublisher/AllPublisher";

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
            }
        ]
    }
])