import { Package, ShoppingCart, Users } from "lucide-react";

import { DashboardIcon } from "@radix-ui/react-icons";

export const navs = [
  {
    name: "Tableau de bord",
    link: "/",
    icon: <DashboardIcon />,
  },
  {
    name: "Produits",
    link: "/categorie-vehicule",
    icon: <Package className="h-4 w-4" />,
  },
  {
    name: "Commandes",
    link: "/commandes",
    icon: <ShoppingCart className="h-4 w-4" />,
  },
  {
    name: "Clients",
    link: "/clients",
    icon: <Users className="h-4 w-4" />,
  },
];
