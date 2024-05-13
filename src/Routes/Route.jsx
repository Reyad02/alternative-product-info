import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import MyQueries from "../Pages/MyQueries/MyQueries";
import PrivateRoute from "./PrivateRoute";
import AddQuery from "../Pages/AddQuery/AddQuery";
import CardDetails from "../Pages/MyQueries/CardDetails";
import UpdateMyQuery from "../Pages/MyQueries/UpdateMyQuery";
import Queries from "../Pages/Queries/Queries";
import EachCardDetails from "../Pages/Queries/EachCardDetails";
import MyRecommendations from "../Pages/MyRecommendations/MyRecommendations";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <Signup />,
            },
            {
                path: "/myqueries",
                element: <PrivateRoute><MyQueries /></PrivateRoute>
            },
            {
                path: "/addQuery",
                element: <PrivateRoute><AddQuery /></PrivateRoute>
            },
            {
                path: "/details/:id",
                element: <PrivateRoute><CardDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:3000/myQueries/${params.id}`)
            },
            {
                path: "/details_update/:id",
                element: <PrivateRoute><UpdateMyQuery /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:3000/myQueries/${params.id}`)
            },
            {
                path: "/queries/",
                element: <Queries></Queries>,
            },
            {
                path: "/cardDetail/:id",
                element: <PrivateRoute><EachCardDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:3000/myQueries/${params.id}`)
            },
            {
                path: "/myRecommendations/",
                element: <PrivateRoute><MyRecommendations /></PrivateRoute>,
                // loader: ({ params }) => fetch(`http://localhost:3000/myQueries/${params.id}`)
            },
        ],

    },
]);

export default router;