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
        searchParams
    }: {
        id: string; 
        company: string; 
        position: string; 
        image_url: string, 
        searchParams?: {
            companyId ?: string;
        }}
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
        <div className="bg-black w-[50vw] h-[15vh] p-10 rounded-md flex items-center">
            <Image
              src={"/assets"+image_url}
              height={100}
              width={100}
              alt={company+" company logo"}
              className="w-[5vw] h-[10vh]"
            />
            <div className="flex flex-col pl-2">
               <h1 className="text-[3vh]">{company}</h1> 
               <h3 className="text-[1.5vh]">{position}</h3>
            </div>
            <FontAwesomeIcon icon={companyId === id ? faChevronLeft : faChevronRight} className="ml-auto cursor-pointer" onClick={openCard}/>
        </div>
    )
}