import { Package, Users } from "lucide-react";

import { ArchiveIcon, TokensIcon } from "@radix-ui/react-icons";

export const Navs = [
  {
    name: "Tableau de bord",
    link: "/",
    icon: <TokensIcon />,
  },
  {
    name: "Produits",
    link: "/produits",
    icon: <Package className="h-4 w-4" />,
  },
  {
    name: "Commandes",
    link: "/commandes",
    icon: <ArchiveIcon className="h-4 w-4" />,
  },
  {
    name: "Clients",
    link: "/clients",
    icon: <Users className="h-4 w-4" />,
  },
];
