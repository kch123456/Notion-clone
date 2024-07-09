"use client";
import { Spinner } from "@/components/spinner";
import {Button} from "@/components/ui/button"
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
export const Heading = () =>{
    const { isAuthenticated, isLoading} = useConvexAuth();
    return(
        <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
                Your Ideas, Documents, & Plans. United. 
                Welcome to <span className="underline">Kotion</span>
            </h1>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium">
                Kotion is the connected workspace where <br></br>
                better, faster work happens.
            </h3>
            {isLoading &&(
                /* trunk-ignore(git-diff-check/error) */
                <div className="w-full flex items-center justify-center"><Spinner size='lg'></Spinner></div>
            )}
            {isAuthenticated && !isLoading &&(
            <Button>
            Enter Kotion
            <ArrowRight className="h-4 w-4 ml-2"></ArrowRight>
            </Button>
            )}
        </div>
    )
}