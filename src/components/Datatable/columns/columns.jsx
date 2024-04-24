import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { CaretSortIcon } from "@radix-ui/react-icons"
import { MoreHorizontal } from "lucide-react"

export const columns = [
    {
        accessorKey: "image",
        header: ({ column }) => {
            return (
                <Button
                    className=""
                    variant="ghost"
                    size="sm"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Image
                    <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => (
            <div style={{ backgroundImage: `url("${row.getValue('image')}")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className="bg-gray-200 rounded-full w-12 h-12 border-2 mx-2">
            </div>
        ),
    },
    {
        accessorKey: "name",
        header: ({ column }) => {
            return (
                <Button
                    className="-mx-3"
                    variant="ghost"
                    size="sm"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Nom du produit
                    <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "description",
        header: ({ column }) => {
            return (
                <div className="-mx-3">
                    <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Description
                        <CaretSortIcon className="ml-2 h-4 w-4" />
                    </Button>
                </div>

            )
        },
    },
    {
        accessorKey: "quantity",
        header: ({ column }) => {
            return (
                <Button
                    className="-mx-2"
                    variant="ghost"
                    size="sm"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Quantité
                    <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => (
            <p className="bg-white w-fit border rounded-md px-2 text-xs font-extrabold text-orange-700 py-1 text-dark">{row.getValue("quantity")}</p>
        ),
    },
    {
        accessorKey: "amount",
        header: () => <div className="">Prix</div>,
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("amount"))
            const formatted = new Intl.NumberFormat('fr', { style: 'currency', currency: 'XOF' }).format(amount)

            return <div className="font-medium">{formatted}</div>
        },
    },
    {
        id: "actions",
        header: 'Action',
        cell: ({ row }) => {
            const payment = row.original
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(payment.id)}
                        >
                            Voir le produit
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            Modifier le produit
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            Supprimer le produit
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]