"use client";

export default function ProjectCard({
    title, 
    about, 
    tech, 
    site, 
    github
    }: {
        title: string, 
        about: string, 
        tech: string, 
        site: string, 
        github: string
}) {

    function navigate() {
        window.location.href=github
    }

    return (
        <div>
            <div onClick={navigate} className="bg-[rgb(24,24,27)] border-gray-700 hover:border-slate-300 border rounded-md hover:cursor-pointer h-auto p-3 flex flex-col gap-4 lg:h-[15em] lg:w-[30em]">
                <h1 className="text-xl font-bold bg-gradient-to-l from-blue-700 to-blue-500 inline-block text-transparent bg-clip-text">{title}</h1>
                <h3 className="text-sm">{about}</h3>
                <div className="flex justify-between mt-auto">
                    <h4>{tech}</h4>
                    {site!=null && 
                        <a href={site} className="hover:underline">Site</a>
                    }
                </div>
            </div>
        </div>
    )
}