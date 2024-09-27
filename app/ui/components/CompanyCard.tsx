"use client";

import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import { useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default function CompanyCard(
    {
        id, 
        company, 
        position, 
        image_url, 
    }: {
        id: string; 
        company: string; 
        position: string; 
        image_url: string, 
    }
    ){
    const searchParameters = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()

    const openCard = () => {
        const params = new URLSearchParams(searchParameters)
        if(params.has("companyId") && params.get("companyId")==id){
            params.delete("companyId")
        }else
            params.set("companyId", id)
        replace(`${pathname}?${params.toString()}`)
    }

    const companyId = searchParameters.get("companyId");


    return (
        <div className="bg-[rgb(24,24,27)] border-gray-700 border w-full md:w-[50vw] h-[20vh] p-10 rounded-md flex items-center">
            <Image
              src={"/assets"+image_url}
              height={100}
              width={100}
              alt={company+" company logo"}
              className="w-[75px] md:w-[100px] rounded-md"
            />
            <div className="flex flex-col pl-2">
               <h1 className="text-[2.5vh] md:text-[2em]">{company}</h1> 
               <h3 className="text-[1em]">{position}</h3>
            </div>
            <FontAwesomeIcon icon={companyId === id ? faChevronLeft : faChevronRight} style={{color: "#374151"}} className="ml-auto cursor-pointer" onClick={openCard}/>
        </div>
    )
}