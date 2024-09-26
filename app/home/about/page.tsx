import Image from "next/image";
import mike from "@/app/ui/images/mike.jpeg"
import LottieTech from "../../ui/components/LottieTech";
export default function Page() {
    return (
    <div className="flex flex-col h-full justify-evenly bg-black overflow-auto">
        <div className="flex flex-col md:flex-row justify-evenly items-center text-[1vw] fadeInAnimation">
            <div className="flex items-center md:w-[30vw]">
                <LottieTech/>
            </div>
            <div className="w-[75vw] md:w-[35vw] h-full md:p-5 flex flex-col justify-evenly border-x-white border-4 rounded-md mb-4 md:mb-0">
                <div className="border-x-red-200 border-2 m-4 h-[1/3vh] p-2 rounded-md">
                    <h1 className="text-center text-4xl md:text-2xl font-bold">About me</h1>
                    <p className="text-2xl md:text-lg text-center">Hello! I'm Justin Espinal, a software developer passionate about leveraging technology to drive innovation, solving real-world problems, and leading others to do their best! With a background in Software Engineering, my expertise spans a variety of different areas!</p>
                </div>
                <div className="border-x-red-200 border-2 m-4 p-2 h-[1/3vh] rounded-md">
                    <h1 className="text-center font-bold text-4xl md:text-2xl">Skills</h1>
                    <ul className="list-disc ml-5 text-2xl md:text-lg">
                        <li>Java, Javascript, C++, Python, Ruby, Typescript, SQL</li>
                        <li>React, Vue, Next.js</li>
                        <li>HTML, CSS, Tailwind CSS, SCSS</li>
                        <li>Jira, Figma, Agile, CI/CD</li>
                        <li>Fullstack Development, App Development</li>
                    </ul>
                </div>
                <div className="border-x-red-200 border-2 m-4 p-2 h-[1/3vh] text-sm rounded-md">
                    <h1 className="text-center text-4xl md:text-2xl font-bold">Education</h1>
                    <ul>
                        <h1 className="text-3xl font-bold">CUNY Queens College</h1>
                        <h3 className="text-2xl">Degree: Computer Science B.S.</h3>
                        <h3 className="text-2xl">Expected: May 2025</h3>
                        <h1 className="text-3xl font-bold">Relevant Course Work</h1>
                        <ul className="list-disc ml-5 text-2xl">
                            <li>Data Structures & Algorithms</li>
                            <li>OOP in C++ & Java</li>
                            <li>Software Engineering</li>
                        </ul>

                    </ul>
                </div>
            </div>
        </div>
    </div>
    );
}