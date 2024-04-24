
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ReloadIcon } from "@radix-ui/react-icons"
import { useState } from "react"

export function LoginPage1() {
    const [isSubmit, setSubmit] = useState(false)

    return (
        <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
            <div className="flex items-center justify-center py-12">
                <div className="mx-auto grid gap-6">
                    <div className="grid gap-2 text-center">
                        <h1 className="text-3xl font-bold text-red-700">Connexion</h1>
                        <p className="text-balance text-muted-foreground">
                            Entrez votre email ci-dessous pour vous connecter à votre compte
                        </p>
                    </div>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">Password</Label>
                                <a
                                    to="/forgot-password"
                                    className="ml-auto inline-block text-sm underline"
                                >
                                    Mot de passe oublié?
                                </a>
                            </div>
                            <Input id="password" type="password" required />
                        </div>
                        <Button type="submit" disabled={!isSubmit ? false : true} className="w-full bg-red-700">
                            {
                                !isSubmit ? 'Connexion' : (<>
                                    <ReloadIcon className="mx-1 animate-spin" />
                                    <p>connexion en cours</p>
                                </>
                                )
                            }
                        </Button>
                        <Button variant="outline" className="w-full">
                            Connexion avec Google
                        </Button>
                    </div>
                    <div className="mt-4 text-center text-sm">
                        Vous n'avize pas  de compte?{" "}
                        <a href="#" className="underline">
                            S'inscrire
                        </a>
                    </div>
                </div>
            </div>
            <div className="hidden bg-muted lg:block">
                <img
                    src="https://ui.shadcn.com/placeholder.svg"
                    alt=""
                    width="1920"
                    height="1080"
                    className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                />
            </div>
        </div>
    )
}
