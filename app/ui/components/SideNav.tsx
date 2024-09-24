import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

import { faHouse } from "@fortawesome/free-solid-svg-icons"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { faStar } from "@fortawesome/free-solid-svg-icons"

export default function SideNav(){
    return (
        <div className="flex flex-col mr-auto">
            <Link 
              className="p-4 hover:bg-slate-500"
              href="/home"
            >
                <span><FontAwesomeIcon icon={faHouse} /></span>
            </Link>
            <Link
              className="p-4 hover:bg-slate-500"
              href="/home/about"
            >
                <span><FontAwesomeIcon icon={faUser} style={{color: "#ffffff",}} /></span>
            </Link>
            <Link
              className="p-4 hover:bg-slate-500"
              href="/home/experience"
            >
                <span><FontAwesomeIcon icon={faStar} style={{color: "#ffffff",}} /></span>
            </Link>
        </div>
    )
}