import { BaseLayout } from "@/layout/BaseLayout";
import { AjoutProduit } from "@/views/Ajout-produit/AjoutProduit";
import { Notfound } from "@/views/Error/Notfound";
import { Dashboard } from "@/views/Home/Home1";
import { LoginPage } from "@/views/LoginPage/Login";
import { LoginPage1 } from "@/views/LoginPage/LoginPage1";
import { Paramettre } from "@/views/Paramettre/Paramettre";
import { Produit } from "@/views/Produits/Produit";
import { Profile } from "@/views/Profil/Profile";
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
            {
                path: "/produits",
                element: <Produit />
            },
            {
                path: "/ajouter-produit",
                element: <AjoutProduit />
            },
            {
                path: "/paramettre",
                element: <Paramettre />,
            },
            {
                path: '/profil',
                element: <Profile />
            }

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
