"use client"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { ReloadIcon } from "@radix-ui/react-icons";
import { useState } from "react";

const FormSchema = z.object({
    username: z.string().min(2, {
        message: "Le nom d'utilisateur doit comporter au moins 2 caractères.",
    }),
    password: z.string().min(8, {
        message: "Le mot de passe doit comporter au moins 2 caractères.",
    }),
})

export function LoginPage() {
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
    }

    return (
        <div className="flex h-screen items-center justify-center px-2">
            <Card>
                <CardHeader>
                    <CardTitle className="text-3xl font-bold text-red-700">
                        Connexion
                    </CardTitle>
                    <CardDescription>
                        Veuillez renseigner tout les champs pour vous connecter.
                    </CardDescription>
                </CardHeader>
                <CardContent>
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
                                <a href={""} className="ml-auto inline-block text-sm underline">
                                    Mot de passe oublié?
                                </a>
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
                </CardContent>
            </Card>
        </div>



    )
}
