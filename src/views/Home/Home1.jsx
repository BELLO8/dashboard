import { columns } from "@/components/Datatable/columns/columns"
import { payments } from "@/components/Datatable/data/payment"
import { DataTable } from "@/components/Datatable/dataTable/Datatable"
import { DatePickerWithRange } from "@/components/DatePicker/DatePickerRanger"
import { Counter } from "@/components/Stats/Counter"
import Order from "@/components/Widget/OrderWidget"
import Sales from "@/components/Widget/Sales"
import Transaction from "@/components/Widget/Transaction"
import {
    Card,
    CardDescription,
    CardTitle
} from "@/components/ui/card"
import 'chart.js/auto'
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
                display: false,
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
                backgroundColor: '#3a3637',
                borderColor: 'white',
                borderRadius: 4,
                borderSkipped: false,
            },

        ],
    };

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
                <div className=" p-4 rounded-lg border border-dashed shadow-sm" >
                    <div className="grid gap-2">
                        <CardTitle>Chiffre d'affaire</CardTitle>
                        <CardDescription>
                            Recent transactions from your store.
                        </CardDescription>
                    </div>
                    <Bar height={250} options={options} data={data} />
                </div>
                <Transaction />
            </div>
            <div className="grid grid-cols-2 gap-4">

                <Sales />
                <Order />
            </div>
            <Card className="container mx-auto py-4">
                <DataTable columns={columns} data={payments} />
            </Card>

        </div>

    )
}
