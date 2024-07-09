import { Button } from "@/components/ui/button"
import {Logo} from "./logo"
export const Footer = () =>{
    return (
        <div className="flex item-center w-full p-6
        bg-background z-50 dark:bg-[#1F1F1F]">
            <Logo></Logo>
            <div className="md:ml-auto w-full justify-between
            md:justify-end flex item-center gap-x-2
            text-muted-foreground"></div>
            <Button variant="ghost" size="sm">
                Privacy Policy
            </Button>
            <Button variant="ghost" size="sm">
                Terms & Conditions
            </Button>
        </div>
    )
}