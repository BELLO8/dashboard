
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { ChevronLeft } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Profile } from "../Profil/Profile"

export function Paramettre() {
    const [active, setActive] = useState({ index: 0, value: "GENERAL" })
    const tab = [
        {
            label: 'General',
            'link': '#',
            value: 'GENERAL'
        },
        {
            label: 'Mon profil',
            'link': '#',
            value: 'PROFILE'
        },
        {
            label: 'Securité du compte',
            'link': '#',
            value: 'SECURITY'
        },
        {
            label: 'Support technique',
            'link': '#',
            value: 'SUPPORT'
        }
    ]
    return (
        <div className="">
            <div className="mb-3 mx-auto my-auto flex items-center w-full max-w-6xl gap-4">
                <Button variant="outline" size="icon" className="h-7 w-7" onClick={() => window.history.back()}>
                    <ChevronLeft className="h-4 w-4" />
                    <span className="sr-only">Back</span>
                </Button>
                <h1 className="text-3xl font-extrabold text-primary">Paramettre</h1>
            </div>
            <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
                <div
                    className="mt-2 grid text-sm text-muted-foreground"
                >
                    {
                        tab.map((item, index) => (
                            <Link onClick={() => {
                                setActive({ index: index, value: item.value })
                            }} key={index} to={item.link} className={`${active.index === index ? 'bg-gray-100 font-bold px-3 py-2 rounded-lg text-primary' : 'px-3 py-2 text-slate-900'}  `}>
                                {item.label}
                            </Link>
                        ))
                    }
                </div>
                {
                    active.value === "GENERAL" ? (
                        <div className="grid gap-6">
                            <Card x-chunk="dashboard-04-chunk-1">
                                <CardHeader>
                                    <CardTitle>Store Name</CardTitle>
                                    <CardDescription>
                                        Used to identify your store in the marketplace.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <form>
                                        <Input placeholder="Store Name" />
                                    </form>
                                </CardContent>
                                <CardFooter className="border-t px-6 py-4">
                                    <Button>Save</Button>
                                </CardFooter>
                            </Card>
                            <Card x-chunk="dashboard-04-chunk-2">
                                <CardHeader>
                                    <CardTitle>Plugins Directory</CardTitle>
                                    <CardDescription>
                                        The directory within your project, in which your plugins are
                                        located.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <form className="flex flex-col gap-4">
                                        <Input
                                            placeholder="Project Name"
                                            defaultValue="/content/plugins"
                                        />
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="include" defaultChecked />
                                            <label
                                                htmlFor="include"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                Allow administrators to change the directory.
                                            </label>
                                        </div>
                                    </form>
                                </CardContent>
                                <CardFooter className="border-t px-6 py-4">
                                    <Button>Save</Button>
                                </CardFooter>
                            </Card>
                        </div>
                    ) : active.value === "PROFILE" ? (
                        <Profile />
                    ) : active.value === "SECURITY" ? '' : ''
                }


            </div>
        </div>
    )
}
