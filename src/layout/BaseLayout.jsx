import { Dashboard } from "@/views/Home/Home1";
import { createHashRouter } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { Login } from "../views/auth/login/Login";
import ErrorPage from "../views/notFound/ErrorPage";

export const AppRoute = createHashRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Dashboard />,
            },

        ],
    },

    {
        path: "/login",
        element: <Login />,
    },
]);
