import { BaseLayout } from "@/layout/BaseLayout";
import { Notfound } from "@/views/Error/Notfound";
import { Dashboard } from "@/views/Home/Home1";
import { LoginPage } from "@/views/LoginPage/Login";
import { LoginPage1 } from "@/views/LoginPage/LoginPage1";
import { createHashRouter } from "react-router-dom";

export const AppRoute = createHashRouter([
    {
        path: "/",
        element: <BaseLayout />,
        errorElement: <Notfound />,
        children: [
            {
                path: "/",
                element: <Dashboard />,
            },

        ],
    },

    {
        path: "/login",
        element: <LoginPage1 />,
    },
    {
        path: "/login1",
        element: <LoginPage />,
    },
]);
