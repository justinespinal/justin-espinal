import { fetchCompanies } from "@/app/lib/data"
import { fetchCompanyById } from "@/app/lib/data";
import "../../ui/global.css"
import CompanyCard from "@/app/ui/components/CompanyCard"
import Image from "next/image";
import { refreshCompanies } from "@/app/lib/action";

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
        <div className="h-full bg-black overflow-auto">
          <form action={refreshCompanies}>
              <button>Refresh</button>
          </form>
          <div className="flex justify-evenly items-center h-full bg-black fadeInAnimation">
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
                  className="w-[25vw] h-[80vh] bg-black rounded-lg"
                  key={company.id}
                >
                  <Image
                    src={"/assets"+company.image_url}
                    alt={company.name + " logo"}
                    width={100}
                    height={100}
                  />
                  <h1>{company.info}</h1>
                </div>
              ))
            }
          </div>
        </div>
    )
}