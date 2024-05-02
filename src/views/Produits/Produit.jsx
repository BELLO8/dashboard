import { columns } from "@/components/Datatable/columns/columns"
import { payments } from "@/components/Datatable/data/payment"
import { DataTable } from "@/components/Datatable/dataTable/Datatable"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Link } from "react-router-dom"
export const Produit = () => {
    return (
        <>
            <div className="flex max-w-6xl gap-2">
                <h1 className="w-full text-3xl font-extrabold">Liste des produits</h1>
                <Link to={'/ajouter-produit'}><Button variant="outline">Ajouter un produit</Button></Link>
            </div>

            <Card className="border-none container mx-auto py-1">
                <DataTable columns={columns} data={payments} />
            </Card>
        </>
    )
}
