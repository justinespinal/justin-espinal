import LottieTech from "../../ui/components/LottieTech";
export default function Page() {
    return (
    <div className="flex flex-col h-full justify-evenly bg-gradient-to-l from-transparent to-blue-950 overflow-auto">
        <div className="flex flex-col md:flex-row justify-evenly items-center text-[1vw] fadeInAnimation">
            <div className="flex items-center md:w-[50vw] lg:w-[30vw]">
                <LottieTech/>
            </div>
            <div className="w-[75vw] md:w-[35vw] h-full md:p-5 flex flex-col justify-evenly rounded-md mb-4 md:mb-0 gap-8">
                <div className="h-[1/3vh] w-full rounded-md flex flex-col divide-y divide-sky-700">
                    <h1 className="text-4xl md:text-2xl font-bold">About Me</h1>
                    <p className="text-2xl md:text-lg pt-2">Hello! I'm Justin Espinal, a software developer passionate about leveraging technology to drive innovation, solving real-world problems, and leading others to do their best! With a background in Software Engineering, my expertise spans a variety of different areas! I am also a leader, with a substantial background in public speaking through founding Code for All, an orginization with 1,500+ members</p>
                </div>
                <div className="h-[1/3vh] w-full flex flex-col divide-y divide-cyan-700">
                    <h1 className="font-bold text-4xl md:text-2xl">Skills</h1>
                    <div className="flex">
                        <ul className="list-disc list-inside text-2xl md:text-lg pt-2 mr-auto">
                            <li>Java</li>
                            <li>Javascript</li>
                            <li>C++</li>
                            <li>Python</li>
                            <li>Ruby</li>
                        </ul>
                        <ul className="list-disc list-inside text-2xl md:text-lg pt-2 mr-auto">
                            <li>Typescript</li>
                            <li>SQL</li>
                            <li>React</li>
                            <li>Vue</li>
                            <li>Next.js</li>
                        </ul>
                    </div>
                </div>
                <div className="h-[1/3vh] pt-2 w-full text-sm rounded-md flex flex-col divide-y divide-sky-600">
                    <h1 className="text-4xl md:text-2xl font-bold">Education</h1>
                    <ul className="pt-2">
                        <h1 className="text-2xl md:text-xl font-bold">CUNY Queens College</h1>
                        <h3 className="text-base md:text-lg">Degree: Computer Science B.S.</h3>
                        <h3 className="text-base md:text-lg">Expected: May 2025</h3>
                        <h1 className="text-2xl md:text-xl font-bold">Relevant Course Work</h1>
                        <ul className="list-disc ml-5 text-base md:text-lg">
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