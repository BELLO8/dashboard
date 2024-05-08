import { ProductDatatable } from "@/components/Product/ProductDatatable"
import { Button } from "@/components/ui/button"
import { ChevronLeftIcon } from "@radix-ui/react-icons"
import { Link } from "react-router-dom"
export const Produit = () => {
    return (
        <>
            <div className="flex items-center gap-4">
                <Button variant="outline" size="icon" className="h-7 w-7" onClick={() => window.history.back()}>
                    <ChevronLeftIcon className="h-4 w-4" />
                    <span className="sr-only">Back</span>
                </Button>
                <div className="w-96">
                    <h1 className="w-full text-3xl font-extrabold text-primary">Liste des produits</h1>
                </div>
                <div className="hidden items-center gap-2 md:ml-auto md:flex">
                    <Link to={'/ajouter-produit'}><Button size="sm">Ajouter un produit</Button></Link>
                </div>
            </div>
            <ProductDatatable />

        </>
    )
}
