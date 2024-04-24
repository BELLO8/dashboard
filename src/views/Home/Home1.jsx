import { columns } from "@/components/Datatable/columns/columns"
import { payments } from "@/components/Datatable/data/payment"
import { DataTable } from "@/components/Datatable/dataTable/Datatable"
import { DatePickerWithRange } from "@/components/DatePicker/DatePickerRanger"
import { Counter } from "@/components/Stats/Counter"
import Order from "@/components/Widget/OrderWidget"
import Sales from "@/components/Widget/Sales"
import Transaction from "@/components/Widget/Transaction"
import { Button } from "@/components/ui/button"
import {
    Card
} from "@/components/ui/card"
import wallet from '../../assets/icons/Wallet.svg'
import client from '../../assets/icons/client.svg'
import commande from '../../assets/icons/commande.svg'
export function Dashboard() {
    return (
        <div className="space-y-4">
            <div className="">
                <div className="lg:flex gap-x-2 ">
                    <h1 className="lg:text-4xl font-extrabold text-black sm:text-lg my-auto">Salut ! </h1><h1 className='lg:text-2xl text-black  my-auto font-medium'>Mr Acme Inc</h1>
                </div>
                <p className="">Bienvenue sur votre tableau de bord ! 🎉 </p>
            </div>
            <DatePickerWithRange className="" />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-2 ">
                <Counter title={"Chiffre d'affaire"} count={'50 000 F CFA'} text={''} icon={wallet} />
                <Counter title={"Produits"} count={'387'} text={''} icon={commande} />
                <Counter title={"Clients"} count={'147'} text={''} icon={client} />
                <Counter title={"Transactions"} count={'9857'} text={''} icon={wallet} />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <Transaction />
                <Sales />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div
                    className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm" x-chunk="dashboard-02-chunk-1"
                >

                    <div className="p-28 flex flex-col items-center gap-1 text-center">
                        <h3 className="text-2xl font-bold tracking-tight">
                            You have no products
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            You can start selling as soon as you add a product.
                        </p>
                        <Button className="mt-4">Add Product</Button>
                    </div>
                </div>
                <Order />
            </div>
            <Card className="container mx-auto py-4">
                <DataTable columns={columns} data={payments} />
            </Card>
        </div>

    )
}
