"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import clsx from "clsx"
import { usePathname } from "next/navigation"

import { faHouse, faUser, faStar, faTv } from "@fortawesome/free-solid-svg-icons"

export default function SideNav(){
    const pathname = usePathname()
    console.log(pathname)
    return (
        <div className="flex lg:flex-col lg:mr-auto">
            <Link 
              className={clsx(
                "p-4 hover:bg-gray-700",
                {
                  "bg-[rgb(24,24,15)]":  pathname === '/home'
                },
              )}
              href="/home"
            >
                <span><FontAwesomeIcon icon={faHouse} /></span>
            </Link>
            <Link
              className={clsx(
                "p-4 hover:bg-gray-700",
                {
                  "bg-[rgb(24,24,15)]":  pathname === '/home/about'
                },
              )}
              href="/home/about"
            >
                <span><FontAwesomeIcon icon={faUser} style={{color: "#ffffff",}} /></span>
            </Link>
            <Link
              className={clsx(
                "p-4 hover:bg-gray-700",
                {
                  "bg-[rgb(24,24,15)]":  pathname === '/home/projects'
                },
              )}
              href="/home/projects"
            >
              <span><FontAwesomeIcon icon={faTv} style={{color: "#ffffff",}} /></span>
            </Link>
            <Link
              className={clsx(
                "p-4 hover:bg-gray-700",
                {
                  "bg-[rgb(24,24,15)]":  pathname === '/home/experience'
                },
              )}
              href="/home/experience"
            >
                <span><FontAwesomeIcon icon={faStar} style={{color: "#ffffff",}} /></span>
            </Link>
        </div>
    )
}