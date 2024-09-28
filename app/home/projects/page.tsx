import ProjectCard from "@/app/ui/components/ProjectCard"
import { fetchProjects } from "@/app/lib/data"

export default async function Page({}) {
    const projects = await fetchProjects();

    return (
        <div className="bg-gradient-to-l from-transparent to-blue-950 h-full lg:p-10">
            <div className="fadeInAnimation flex flex-col h-full items-center">
                <h1 className="p-1 text-4xl font-bold bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 inline-block text-transparent bg-clip-text">Projects</h1>
                <div className="flex flex-col m-4 lg:m-0 h-full gap-5 justify-center lg:flex-row lg:items-center lg:flex-wrap overflow-auto">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} title={project.title} about={project.about} tech={project.tech} site={project.site} github={project.github} />
                    ))}
                </div>
            </div>
        </div>
    )
}