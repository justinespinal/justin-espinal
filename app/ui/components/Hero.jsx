"use client";

import justin from "../images/justin.jpg"
import Socials from "./Socials";
import { Typewriter } from "react-simple-typewriter";
import "../styling/hero.css"
import Image from "next/image";
export default function Hero() {
    return (
        <div className="flex items-center justify-around w-screen h-screen bg-black">
          <Image 
            src={justin}
            id="justinImage"
            width={500}
            height={700}
            alt="Headshot image of Justin Espinal"
          />
          <div className="w-[30vw] h-[75vh] flex flex-col justify-center">
            <div className="flex items-center gap-[10px] text-3xl font-bold">
              <h1>Justin Espinal</h1>
              <Socials size="2xl" />
            </div>
            <div className="text-xl font-medium">
                <h1>A Software Engineer dedicated to</h1>
                <h1>
                <span className="typeWriter">
                    <Typewriter
                    id="typeWriter"
                    words={[
                        "being a leader",
                        "helping others",
                        "fostering success",
                        "creating solutions",
                        "communicating new ideas",
                        "working in teams",
                    ]}
                    loop={true}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                    />
                </span>
                </h1>
            </div>
          </div>
        </div>
      );
}