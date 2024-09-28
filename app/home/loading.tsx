import Image from "next/image"

export default function loading() {
    return (
        <div className="flex justify-center items-center bg-gradient-to-l from-transparent to-blue-950 h-full">
            <Image
                src={"/assets/loading-gif.gif"}
                height={100}
                width={100}
                alt="loading"
            />
        </div>
    )
}