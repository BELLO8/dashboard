import { Customer } from "@/components/Widget/Customer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronLeft } from "lucide-react"
import { useState } from "react"

export const Clients = () => {

    const [customer, setCustomer] = useState([
        {
            "name": "Kouassi Jean Jack",
            "jobTitle": "Chief Executif Officer",
            "phone": "(+225) 02 784 456 96",
            "email": "Eliw.ertsw@biz.ezk",
            "company": "ABC Corporation",
            "address": "123 Rue des Entreprises, Abidjan, Côte d'Ivoire",
            "website": "www.abccorp.ci",
            "industry": "Technology",
            "customerSince": "2018-06-15"
        },
        {
            "name": "Emily Johnson",
            "jobTitle": "Marketing Manager",
            "phone": "(+1) 555-123-4567",
            "email": "emily.johnson@example.com",
            "company": "XYZ Marketing Agency",
            "address": "789 Main Street, Anytown, USA",
            "website": "www.xyzmarketing.com",
            "industry": "Marketing",
            "customerSince": "2019-02-28"
        },
        {
            "name": "Hiroshi Tanaka",
            "jobTitle": "Sales Director",
            "phone": "(+81) 090-1234-5678",
            "email": "hiroshi.tanaka@example.jp",
            "company": "Tanaka Electronics",
            "address": "456 Electronics Avenue, Tokyo, Japan",
            "website": "www.tanakaelectronics.co.jp",
            "industry": "Electronics",
            "customerSince": "2020-10-10"
        }
    ]);

    return (
        <div>
            <div className="flex items-center gap-4">
                <Button variant="outline" size="icon" className="h-7 w-7" onClick={() => window.history.back()}>
                    <ChevronLeft className="h-4 w-4" />
                    <span className="sr-only">Back</span>
                </Button>
                <div className="w-96">
                    <h1 className="w-full text-3xl font-extrabold">Liste des clients</h1>
                </div>
                <div className="hidden items-center gap-2 md:ml-auto md:flex">
                    <Button size="sm">Ajouter un client</Button>
                </div>
            </div>
            <div className="mt-12 flex max-w-6xl gap-2 w-96">
                <Input placeholder="Rechercher element ..." onChange={(e) => {
                    setCustomer(customer.filter((item) => {
                        return item.name.toLowerCase().includes(e.target.value.toLowerCase());
                    }));
                }} />
            </div>
            <div className=" my-8 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 lg:grid-cols-4 gap-2">
                {
                    customer?.map((item, index) => (
                        <Customer key={index} item={item} />
                    ))
                }
            </div>

        </div>
    )
}
