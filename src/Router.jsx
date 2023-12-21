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
import PrivateRoute from "./Router/PrivateRoute";

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
                element: <PrivateRoute><AddArticle></AddArticle></PrivateRoute>
            },
            {
                path:"all-articles",
                element: <PrivateRoute><AllArticles></AllArticles></PrivateRoute>
            },
            {
                path:"all-publisher",
                element: <PrivateRoute><AllPublisher></AllPublisher></PrivateRoute>
            },
            {
                path:"plans",
                element: <PrivateRoute><Plans></Plans></PrivateRoute>
            },
        ]
    },
    {
        path: "dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children:[
            {
                path: "all-users",
                element: <PrivateRoute><AllUsers></AllUsers></PrivateRoute>
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