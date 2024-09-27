"use client";

import justin from "../images/justin.jpg"
import Socials from "./Socials";
import { Typewriter } from "react-simple-typewriter";
import "../styling/hero.css"
import Image from "next/image";
export default function Hero() {
    return (
      <div className="flex justify-center">
        <div className="w-screen h-screen items-center lg:justify-evenly fadeInAnimation flex flex-col xl:flex-row">
          <Image 
            src={justin}
            id="justinImage"
            width={500}
            height={700}
            alt="Headshot image of Justin Espinal"
          />
          <div className="w-[50vw] h-[75vh] flex flex-col justify-center items-center">
            <div className="flex flex-col md:flex-row items-center gap-[10px] text-3xl font-bold">
              <h1 className="text-center">Justin Espinal</h1>
              <Socials size="2xl" />
            </div>
            <div className="text-xl font-medium md:mr-[45px]">
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
                        "being their best self"
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
      </div>
      );
}