import { DatePicker } from "@/components/DatePicker/DatePicker"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export const Profile = () => {
    return (
        <div>
            <div class="space-y-6">
                <div>
                    <h3 class="text-lg font-medium">Profil utilisateur</h3>
                    <p class="text-sm text-muted-foreground">
                        Mettez à jour les paramètres de votre compte. Définissez votre langue et votre fuseau horaire préférés.                    </p>
                </div>
                <div
                    data-orientation="horizontal"
                    role="none"
                    class="shrink-0 bg-border h-[1px] w-full"
                ></div>
                <form class="space-y-8">
                    <div class="space-y-2">
                        <Label>Votre nom</Label>
                        <Input type="text" placeholder="Jean Aka" />
                        <p
                            class="text-[0.8rem] text-muted-foreground"
                        >
                            C'est le nom qui sera affiché sur votre profil et dans les courriels.
                        </p>
                    </div>
                    <div class="space-y-2 flex flex-col">
                        <Label>Date de naissance</Label>
                        <DatePicker />
                        <p
                            class="text-[0.8rem] text-muted-foreground"
                        >
                            Votre date de naissance est utilisée pour calculer votre âge.
                        </p>
                    </div>
                    <div class="space-y-2 flex flex-col">
                        <Label>Langue</Label>
                        <Select>
                            <SelectTrigger className="w-[280px]">
                                <SelectValue placeholder="Langue" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="light">Anglais</SelectItem>
                                <SelectItem value="dark">Français</SelectItem>
                                <SelectItem value="system">System</SelectItem>
                            </SelectContent>
                        </Select>

                        <p
                            id=":rfh:-form-item-description"
                            class="text-[0.8rem] text-muted-foreground"
                        >
                            Il s'agit de la langue qui sera utilisée dans le tableau de bord.

                        </p>
                    </div>
                    <Button>Modifier mon profil</Button>
                </form>
            </div>

        </div>
    )
}
