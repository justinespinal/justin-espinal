import { fetchCompanies } from "@/app/lib/data"
import { fetchCompanyById } from "@/app/lib/data";
import "../../ui/global.css"
import CompanyCard from "@/app/ui/components/CompanyCard"
import Image from "next/image";

export default async function Page({
    searchParams,
}: {
    searchParams?: {
        companyId ?: string;
    }
}){
    const companies = await fetchCompanies()
    console.log(searchParams)
    const companyById = await fetchCompanyById(searchParams?.companyId)
    console.log(companyById[0])
    return (
        <div className="h-full bg-gradient-to-l from-transparent to-blue-950 overflow-y-auto overflow-x-hidden">
          <div className="flex flex-col md:flex-row justify-evenly items-center h-full fadeInAnimation pt-6">
            <div className="flex flex-col gap-6">
                {companies?.map((company) => (
                    <div 
                      className="flex"
                      key={company.id}
                    >
                        <CompanyCard id={company.id} company={company.name} position={company.position} image_url={company.image_url}/>
                    </div>
                ))}
            </div>
            {searchParams?.companyId &&
              companyById.map((company) => (
                <div 
                  className="w-auto m-4 md:m-0 md:w-[30vw] h-[80vh] bg-[rgb(24,24,27)] border-gray-700 border p-2 rounded-lg flex flex-col divide-y divide-gray-700 items-center gap-2 fadeInLeftAnimation"
                  key={company.id}
                >
                  <Image
                    src={"/assets"+company.image_url}
                    alt={company.name + " logo"}
                    width={100}
                    height={100}
                  />
                  <h1 className="w-full pt-2">{company.info}</h1>
                  <div>
                  <Image
                    src={"/assets"+company.info_url}
                    alt={company.name + " info pic"}
                    width={1000}
                    height={100}
                    className="pt-4 rounded-lg"
                  />
                  </div>
                </div>
              ))
            }
          </div>
        </div>
    )
}