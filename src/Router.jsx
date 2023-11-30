import { createBrowserRouter } from "react-router-dom";
import Home from "./Layout/Home/Home";
import App from "./App";
import AllPublisher from "./Layout/AllPublisher/AllPublisher";
import Plans from "./Layout/Plans/Plans";
import Login from "./Layout/Login/Login";
import Register from "./Layout/Register/Register";
import ErrorPage from "./Layout/ErrorPage/ErrorPage";
import Dashboard from "./Layout/Dashboard/Dashboard";
import AllUsers from "./Layout/Dashboard/AllUsers";
import AllArticles from "./Layout/Dashboard/AllArticles";
import AddPublisher from "./Layout/Dashboard/AddPublisher";
import AddArticle from "./Layout/AddArticles/AddArticles";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                index:"/",
                element: <Home></Home>
            },
            {
                path:"add-articles",
                element: <AddArticle></AddArticle>
            },
            {
                path:"all-articles",
                element: <AllArticles></AllArticles>
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
        path: "dashboard",
        element: <Dashboard></Dashboard>,
        children:[
            {
                path: "all-users",
                element: <AllUsers></AllUsers>
            },
            {
                path: "all-articles",
                element: <AllArticles></AllArticles>
            },
            {
                path: "add-publisher",
                element: <AddPublisher></AddPublisher>
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