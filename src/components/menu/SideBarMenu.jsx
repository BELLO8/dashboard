import {
    Package2
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Navs } from "@/navigation/Vertical"
import { LinkBreak2Icon } from "@radix-ui/react-icons"
import { Link, NavLink } from "react-router-dom"

export const SideBarMenu = () => {

    return (
        <div className="hidden border-r bg-white md:block relative shadow">
            <div className=" flex h-full max-h-screen flex-col gap-2 sticky top-0 left-0">
                <div className="flex h-14 items-center px-4 lg:h-[60px] lg:px-6">
                    <a href="/" className="flex items-center gap-2 font-semibold">
                        <Package2 className="h-6 w-6" />
                        <span className="font-extrabold">DashBoard App</span>
                    </a>

                </div>
                <div className="flex-1">
                    <nav className="grid items-start px-2 text-sm font-medium lg:px-4 space-y-1">
                        {
                            Navs.map((navigation, index) => (
                                <NavLink key={index}
                                    to={navigation.link}
                                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all"
                                >
                                    {navigation.icon}
                                    {navigation.name}
                                </NavLink>
                            ))
                        }

                    </nav>
                </div>
                <div className="mt-auto p-4">
                    <Card x-chunk="dashboard-02-chunk-0">
                        <CardHeader className="p-2 pt-0 md:p-4">
                            <CardTitle>Upgrade to Pro</CardTitle>
                            <CardDescription>
                                Unlock all features and get unlimited access to our support
                                team.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                            <Link to={'/login'}>
                                <Button size="sm" variant='destructive' className="w-full gap-2">
                                    <LinkBreak2Icon /> Deconnexion
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
