import {
    Menu,
    Package2
} from "lucide-react"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList
} from "@/components/ui/command"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Navs } from "@/navigation/Vertical"
import { BellIcon, GearIcon, LinkBreak2Icon, LockClosedIcon, QuestionMarkCircledIcon } from "@radix-ui/react-icons"
import { useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"

export const Header = () => {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const down = (e) => {
            if (e.key === "q" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }
        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

    return (
        <header className="relative sticky top-0 backdrop-blur-md flex h-14 items-center gap-4 border-b bg-white/75 px-4 lg:h-[60px] lg:px-6 z-50">
            <CommandDialog open={open} onOpenChange={setOpen} className="text-dark">
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Suggestions">
                        {
                            Navs.map((item, index) => (
                                <Link key={index} to={item.link} onClick={() => setOpen(!open)}>
                                    <CommandItem className="gap-2">
                                        {item.icon}
                                        {item.name}
                                    </CommandItem>
                                </Link>
                            ))
                        }

                    </CommandGroup>
                </CommandList>
            </CommandDialog>
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
                            Navs.map((navigation, index) => (
                                <NavLink
                                    key={index}
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
                        <Button onClick={() => setOpen(!open)} variant='outline' className="relative flex justify-start  rounded-lg w-full shadow-none md:w-2/3 lg:w-72">
                            Recherche de page...
                            <p className="absolute right-8 flex items-center h-4 w-4 text-sm text-muted-foreground">
                                <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                                    <span className="text-xs">⌘</span>q
                                </kbd>
                            </p>
                        </Button>

                    </div>
                </form>
            </div>
            <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <div className="px-4 border-r-2">
                            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
                                <BellIcon className="h-4 w-4" />
                                <span className="sr-only">Toggle notifications</span>
                            </Button>
                        </div>
                        <Avatar className="w-8 h-8">
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div>
                            <h3 className="font-semibold"> Acme Inc</h3>
                            <p className="text-gray-400 text-xs flex gap-1"><LockClosedIcon />admin</p>
                        </div>
                    </div>

                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Mon compte</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem><Link to={'/paramettre'} className="flex gap-2 items-center"><GearIcon /> Paramèttre</Link></DropdownMenuItem>
                    <DropdownMenuItem className="gap-2"><QuestionMarkCircledIcon /> Support</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </header>
    )
}
