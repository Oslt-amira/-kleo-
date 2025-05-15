import { RefreshCcw } from "lucide-react";
import { Button } from "./ui/button";
import { ChatProps } from "@/types/chat";


export default function ChatErrorMessage({
    reload
}: Pick<ChatProps, "reload">) {
    return <div className="w-full h-fit flex flex-col items-center gap-3">
        <div className="flex flex-col items-center gap-1">
            <span className="font-semibold text-gray-1200 text-sm">An Error occured</span>
            <span className="text-gray-1100 text-sm font-medium">You can reload by pressing the reload button</span>
        </div>
        <Button variant={"outline"} onClick={reload} className="font-semibold" size="sm"> <RefreshCcw /> Reload</Button>
    </div>
}