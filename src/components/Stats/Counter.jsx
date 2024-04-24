import { Card } from "@/components/ui/card"

export const Counter = ({ title, count, text, icon }) => {
    return (
        <>
            <Card className="flex items-center px-4 py-4">
                <div className="bg-slate-700 w-12 h-12 rounded-full flex items-center justify-center">
                    <img src={icon} alt="" className="w-8 h-8" />
                </div>
                <div className="mx-2">
                    <p className="text-sm font-semibold">{title}</p>
                    <div className="text-lg font-bold">{count}</div>
                    <p className="text-xs text-muted-foreground">{text}</p>
                </div>
            </Card>
        </>
    )
}
