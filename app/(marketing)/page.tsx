import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heading } from "./_components/header";
import { Heroes } from "./_components/heros";
import { Footer } from "./_components/footer";
const MarketingPage = () =>{
  return(
    <div className="min-h-full flex flex-col">
      <div className="flex flex-col item-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
        <Heading></Heading>
        <Heroes />
      </div>
      <Footer></Footer>
    </div>
  )
}
export default MarketingPage;
