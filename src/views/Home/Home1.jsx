import { DatePickerWithRange } from "@/components/DatePicker/DatePickerRanger"
import { ProductDatatable } from "@/components/Product/ProductDatatable"
import { Counter } from "@/components/Stats/Counter"
import Order from "@/components/Widget/OrderWidget"
import Sales from "@/components/Widget/Sales"
import Transaction from "@/components/Widget/Transaction"
import { Button } from "@/components/ui/button"
import {
    CardDescription,
    CardTitle
} from "@/components/ui/card"
import 'chart.js/auto'
import { ListFilterIcon } from "lucide-react"
import { Bar } from "react-chartjs-2"
import wallet from '../../assets/icons/Wallet.svg'
import client from '../../assets/icons/client.svg'
import commande from '../../assets/icons/commande.svg'
export function Dashboard() {

    const labels = ['janv', 'fev', 'mars', 'avril', 'mai', 'juin', 'juillet'];
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            y: {
                display: true,
                grid: {
                    display: false,
                },
            },
            xAxes: [
                {
                    maxBarThickness: 100,
                },
            ],
            x: {

                grid: {
                    display: false,
                },
            },
        },
    };
    const data = {
        labels: labels,
        datasets: [
            {
                label: "Nombre courses",
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: '#616dca',
                borderColor: 'white',
                borderRadius: 6,
                borderSkipped: false,
            },

        ],
    };
    return (
        <div className="space-y-4">
            <div className="flex items-center gap-4">
                <div className="">
                    <div className="lg:flex gap-x-2 ">
                        <h1 className="lg:text-4xl font-extrabold text-primary sm:text-lg my-auto">Salut ! </h1><h1 className='lg:text-2xl text-black  my-auto font-medium'>Mr Acme Inc</h1>
                    </div>
                    <p className="text-muted-foreground">Bienvenue sur votre tableau de bord ! 🎉 </p>
                </div>
                <div className="items-center gap-2 md:ml-auto md:flex">
                    <DatePickerWithRange className="" />
                    <Button variant="outline" className="gap-2"><ListFilterIcon size={14} /> Filtre</Button>
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-2 ">
                <Counter title={"Chiffre d'affaire"} count={'50 000 F CFA'} text={'+19% par rapport au mois dernier'} icon={wallet} />
                <Counter title={"Produits"} count={"358"} text={"+21% par rapport au mois dernier"} icon={commande} />
                <Counter title={"Clients"} count={'147'} text={'+19% par rapport au mois dernier'} icon={client} />
                <Counter title={"Transactions"} count={'9857'} text={'+201 depuis la dernière heure'} icon={wallet} />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg shadow-sm" >
                    <div className="bg-muted/50 grid gap-2 p-4">
                        <CardTitle>Chiffre d'affaire</CardTitle>
                        <CardDescription>
                            Recent transactions from your store.
                        </CardDescription>
                    </div>

                    <Bar className="mt-4 p-4" height={200} options={options} data={data} />
                </div>

                <Transaction />
            </div>
            <div className="grid grid-cols-2 gap-4">

                <Sales />
                <Order />
            </div>
            <ProductDatatable />

        </div>

    )
}
