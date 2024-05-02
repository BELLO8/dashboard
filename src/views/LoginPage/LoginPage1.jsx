import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";
const FormSchema = z.object({
    username: z.string().min(2, {
        message: "Le nom d'utilisateur doit comporter au moins 2 caractères.",
    }),
    password: z.string().min(8, {
        message: "Le mot de passe doit comporter au moins 2 caractères.",
    }),
})

export function LoginPage1() {

    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: "",
            password: ""
        },
    })
    const [isSubmit, setSubmit] = useState(false)


    function onSubmit(data) {
        console.log(data);
        setSubmit(true);
        isSubmit === true ? window.location.replace('/') : window.location.replace('/login')
    }

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
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)}>
                                <div className="space-y-4 my-5">
                                    <FormField
                                        control={form.control}
                                        name="username"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Username</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="shadcn@200" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="password"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Mot de passe </FormLabel>
                                                <FormControl>
                                                    <Input type="password" placeholder="Mot de passe" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="flex items-center mb-2">
                                    <Link href={""} className="ml-auto inline-block text-sm underline">
                                        Mot de passe oublié?
                                    </Link>
                                </div>
                                <div className="flex">
                                    <Button type="submit" disabled={!isSubmit ? false : true} size="lg" className="grow bg-red-700">
                                        {
                                            !isSubmit ? 'Connexion' : (<>
                                                <ReloadIcon className="mx-1 animate-spin" />
                                                <p>connexion en cours</p>
                                            </>
                                            )
                                        }

                                    </Button>
                                </div>
                            </form>
                        </Form>
                        <Button variant="outline" className="w-full">
                            Connexion avec Google
                        </Button>
                    </div>
                    <div className="mt-4 text-center text-sm">
                        Vous n'avize pas  de compte?{" "}
                        <Link to={''} className="underline">
                            S'inscrire
                        </Link>
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
