import { BackpackIcon, DragHandleDots2Icon } from "@radix-ui/react-icons"
import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"

export const Customer = ({ item }) => {
    return (
        <>
            <Card className="shadow-sm border border-gray-200">
                <CardContent className="py-8 px-4">
                    <div className="mx-auto  bg-slate-200 w-20 h-20 rounded-full"></div>
                    <div className="text-center">
                        <h4 className="text-lg font-extrabold">{item.name}</h4>
                        <h4 className="text-sm">{item.jobTitle}</h4>
                    </div>
                    <div className="mt-8 mb-3 space-y-3">
                        <p className="text-xs gap-2 flex"><DragHandleDots2Icon />{item.phone}</p>
                        <p className="text-xs gap-2 flex"> <BackpackIcon />{item.email}</p>
                    </div>
                    <div className="flex justify-center mt-8">
                        <Button variant="secondary">Detail du client</Button>
                    </div>
                </CardContent>

            </Card>
        </>
    )
}
