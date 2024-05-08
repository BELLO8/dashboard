import { Card } from "@/components/ui/card"
import { useStoreProducts } from "@/store/app"
import { useEffect } from "react"
import { columns } from "../Datatable/columns/columns"
import { DataTable } from "../Datatable/dataTable/Datatable"

export const ProductDatatable = () => {

    const getData = useStoreProducts()

    useEffect(() => {
        getData.products()
    }, [])
    return (
        <Card className="border-none shadow-none px-4">
            <DataTable columns={columns} data={getData?.data} />
        </Card>
    )
}
