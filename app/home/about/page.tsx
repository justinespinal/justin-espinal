import Image from "next/image";
import mike from "@/app/ui/images/mike.jpeg"

export default function Page() {
    return (
    <div className="flex flex-col h-[100vh] justify-evenly">
        <div className="flex justify-evenly items-center text-[1vw]">
            <div className="w-[35vw] h-[75vh] p-5 flex flex-col justify-evenly border-x-white border rounded-md shadow-2xl shadow-zinc-100">
                <div className="border-x-red-200 border m-4 h-1/3 p-2">
                    <h1 className="text-center text-2xl">About me</h1>
                    <p>Hello! I'm Justin Espinal, a software developer passionate about leveraging technology to drive innovation, solving real-world problems, and leading others to do their best! With a background in Software Engineering, my expertise spans a variety of different areas!</p>
                </div>
                <div className="border-x-red-200 border m-4 p-2 h-1/3">
                    <h1 className="text-center text-2xl">Skills</h1>
                    <ul className="list-disc ml-5">
                        <li>Java, Javascript, C++, Python, Ruby, Typescript, SQL</li>
                        <li>React, Vue, Next.js</li>
                        <li>HTML, CSS, Tailwind CSS, SCSS</li>
                        <li>Jira, Figma, Agile, CI/CD</li>
                        <li>Fullstack Development</li>
                    </ul>
                </div>
                <div className="border-x-red-200 border m-4 p-2 h-1/3 text-sm">
                    <h1 className="text-center text-2xl">Education</h1>
                    <ul>
                        <h1 className="text-xl font-bold">CUNY Queens College</h1>
                        <h3>Degree: Computer Science B.S.</h3>
                        <h3>Expected: May 2025</h3>
                        <h1 className="text-xl font-bold">Relevant Course Work</h1>
                        <ul className="list-disc ml-5">
                            <li>Data Structures & Algorithms</li>
                            <li>OOP in C++ & Java</li>
                            <li>Software Engineering</li>
                        </ul>

                    </ul>
                </div>
            </div>
            <div className="flex items-center shadow-2xl shadow-zinc-100">
                <Image
                    src={mike}
                    alt="Picture of Justin Espinal with Mike Bloomberg"
                    width={800}
                    height={1050}
                    className=""
                />
            </div>
        </div>
    </div>
    );
}