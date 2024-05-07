import { ProductDatatable } from "@/components/Product/ProductDatatable"
import { Button } from "@/components/ui/button"
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

            <ProductDatatable />

        </>
    )
}
