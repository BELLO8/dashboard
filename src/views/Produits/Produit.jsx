import { columns } from "@/components/Datatable/columns/columns"
import { payments } from "@/components/Datatable/data/payment"
import { DataTable } from "@/components/Datatable/dataTable/Datatable"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Link } from "react-router-dom"
export const Produit = () => {
    return (
        <>
            <div className="flex items-center gap-4">
                <h1 className="w-full text-3xl font-extrabold">Liste des produits</h1>
                <div className="hidden items-center gap-2 md:ml-auto md:flex">
                    <Link to={'/ajouter-produit'}><Button variant="outline">Ajouter un produit</Button></Link>
                </div>
            </div>


            <Card className="border-none container mx-auto py-1">
                <DataTable columns={columns} data={payments} />
            </Card>
        </>
    )
}
