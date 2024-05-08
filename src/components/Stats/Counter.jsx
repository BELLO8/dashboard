import { Card } from "@/components/ui/card"

export const Counter = ({ title, count, text, icon }) => {
    return (
        <>
            <Card className="border-none flex items-center px-4 py-4">
                <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center">
                    <img src={icon} alt="" className="w-8 h-8" />
                </div>
                <div className="mx-2">
                    <p className="text-sm font-semibold">{title}</p>
                    <div className="flex gap-2">
                        <p className="text-lg font-bold">{count}</p>
                    </div>
                    {/* <p className="bg-green-200 text-green-600 w-fit text-xs rounded my-auto px-1">{text}</p> */}
                    <p className="text-xs text-green-700">{text}</p>
                </div>
            </Card>
        </>
    )
}
