import {
    CircleUser,
    Menu,
    Package2,
    Search
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { LinkBreak2Icon } from "@radix-ui/react-icons"
import { Link, NavLink } from "react-router-dom"
import { navs } from "./SideBarMenu"

export const Header = () => {
    return (
        <header className="relative sticky top-0 backdrop-blur-md flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6 z-50">
            <Sheet>
                <SheetTrigger asChild>
                    <Button
                        variant="outline"
                        size="icon"
                        className="shrink-0 md:hidden"
                    >
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="flex flex-col">
                    <nav className="grid gap-2 text-lg font-medium">
                        <Link
                            to={'/'}
                            className="flex items-center gap-2 text-lg font-semibold"
                        >
                            <Package2 className="h-6 w-6" />
                            <span className="sr-only">Acme Inc</span>
                        </Link>
                        {
                            navs.map((navigation) => (
                                <NavLink
                                    to={navigation.link}
                                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                                >
                                    {navigation.icon}
                                    {navigation.name}
                                </NavLink>
                            ))
                        }
                    </nav>
                    <div className="mt-auto">
                        <Card>
                            <CardHeader>
                                <CardTitle>Upgrade to Pro</CardTitle>
                                <CardDescription>
                                    Unlock all features and get unlimited access to our
                                    support team.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Link to={'/login1'}>
                                    <Button size="sm" className="w-full gap-2">
                                        <LinkBreak2Icon /> Deconnexion
                                    </Button>
                                </Link>

                            </CardContent>
                        </Card>
                    </div>
                </SheetContent>
            </Sheet>
            <div className="w-full flex-1">
                <form>
                    <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Recherche de pages..."
                            className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-72"
                        />
                    </div>
                </form>
            </div>
            <h3 className="font-medium"> Acme Inc</h3>
            <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild>
                    <Button variant="secondary" size="icon" className="rounded-full">
                        <CircleUser className="h-5 w-5" />
                        <span className="sr-only">Toggle user menu</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Mon compte</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem><Link to={'/paramettre'}>Paramèttre</Link></DropdownMenuItem>
                    <DropdownMenuItem>Support</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </header>
    )
}
