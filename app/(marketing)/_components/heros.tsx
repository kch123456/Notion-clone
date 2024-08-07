import Image from "next/image";

export const Heroes = () =>{
    return(
        <div className="flex flex-col item-center justify-center
        max-w-5xl">
            <div className="flex item-center">
                <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px]
                md:w-[400px] md:h-[400px]">
                    <Image 
                        src="/documents.png" 
                        fill 
                        className="object-contain dark:hidden"
                        alt="Documents"></Image>
                        <Image 
                        src="/documents-dark.png" 
                        fill 
                        className="object-contain hidden dark:block"
                        alt="Documents"></Image>
                </div>
                <div className="relative h-[400px] w-[400px] hidden md:block">
                    <Image
                        src="/reading.png"
                        fill
                        className="object-contain dark:hidden"
                        alt="Reading"></Image>
                        <Image
                        src="/reading-dark.png"
                        fill
                        className="object-contain hidden dark:block"
                        alt="Reading"></Image>
                </div>
            </div>
        </div>
    );
}