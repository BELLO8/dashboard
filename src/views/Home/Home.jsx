import { Counter } from "@/components/Stats/Counter"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { TokensIcon } from "@radix-ui/react-icons"
import {
    Package2,
    Settings
} from "lucide-react"
import wallet from '../../assets/icons/Wallet.svg'

export const HomePage = () => {
    return (
        <div className="flex min-h-screen w-full bg-muted/40">
            <aside className="hidden w-64 flex-col border-r bg-background sm:flex">
                <nav className="flex flex-col items-start gap-4 px-2 sm:py-4">
                    <a
                        href="#"
                        className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
                    >
                        <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
                        <span className="sr-only">Acme Inc</span>
                    </a>
                    <div className="flex gap-1 bg-red-600 w-full rounded-md text-white shadow-md py-[6px] px-2">
                        <a
                            href="#"
                            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                        >
                            <TokensIcon className="h-5 w-5" color="white" />
                        </a>
                        <p className="my-auto text-sm font-semibold">Tableau de bord</p>
                    </div>


                </nav>
                <nav className="mt-auto flex flex-col items-start gap-4 px-2 sm:py-4">
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <a
                                href="#"
                                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                            >
                                <Settings className="h-5 w-5" />
                                <span className="sr-only">Settings</span>
                            </a>
                        </TooltipTrigger>
                        <TooltipContent side="right">Settings</TooltipContent>
                    </Tooltip>
                </nav>
            </aside>
            <div className="p-3 pt-8 grow min-h-screen">
                <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-2 ">
                    <Counter title={"Chiffre d'affaire"} count={'50 000 F CFA'} text={'+19% par rapport au mois dernier'} icon={wallet} />
                    <Counter title={"Produits"} count={'387'} text={'+20,1% par rapport au mois dernier'} icon={wallet} />
                    <Counter title={"Clients"} count={'147'} text={'+19% par rapport au mois dernier'} icon={wallet} />
                    <Counter title={"Transactions"} count={'9857'} text={'+201 depuis la dernière heure'} icon={wallet} />
                </div>
            </div>

        </div>
    )
}
