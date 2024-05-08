import { HomeIcon } from "@/components/Icons/HomeIcon";
import { OrderIcon } from "@/components/Icons/OrderIcon";
import { ProductIcon } from "@/components/Icons/ProductIcon";
import { UserIcon } from "@/components/Icons/UserIcon";
export const Navs = [
  {
    name: "Tableau de bord",
    link: "/",
    icon: <HomeIcon />,
  },
  {
    name: "Produits",
    link: "/produits",
    icon: <ProductIcon />,
  },
  {
    name: "Commandes",
    link: "/commandes",
    icon: <OrderIcon />,
  },
  {
    name: "Clients",
    link: "/clients",
    icon: <UserIcon />,
  },
];
