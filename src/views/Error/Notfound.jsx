import { Button } from "@/components/ui/button"
import { ArrowLeftIcon } from "@radix-ui/react-icons"
import { Link } from "react-router-dom"
import notfound from '../../assets/images/404.png'

export const Notfound = () => {
    return (
        <div class="max-w-[50rem] flex flex-col mx-auto size-full">
            <img src={notfound} alt="" className="m-auto w-72 h-72" />
            <div class="text-center py-1 px-4 sm:px-6 lg:px-8">
                <h1 class="block text-7xl font-bold text-gray-800 sm:text-9xl dark:text-white">404</h1>
                <p class="mt-3 text-gray-600 dark:text-neutral-400">Oups, il y a eu un problème.</p>
                <p class="text-gray-600 dark:text-neutral-400">Désolé, nous n'avons pas trouvé votre page.</p>
                <div class="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
                    <Link to={'/'}><Button className="gap-1"><ArrowLeftIcon />Retour au Tableau de bord</Button></Link>
                </div>
            </div>
            <footer class="mt-auto text-center py-5">
                <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
                    <p class="text-sm text-gray-500 dark:text-neutral-500">© Tous droits réservés. {new Date().getFullYear()}.</p>
                </div>
            </footer>
        </div>
    )
}
