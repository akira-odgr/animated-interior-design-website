"use client"

import { gsap, useGSAP } from "@/libs/gsap"
import { navItems } from '@/data/data'
import { cn } from '@/libs/cn'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from "react"

const Header = () => {
    const headerRef = useRef(null)
    const menuBtn = useRef<HTMLButtonElement | null>(null)

    useGSAP(() => {
        const menuBerTl = gsap.timeline()
        menuBerTl.to(".bar-1", {
            duration: 0.5,
            attr: { d: "M8,2 L2,8" },
            x: 1,
            ease: "power2.inOut"
        }).to(".bar-2", {
            duration: 0.5,
            autoAlpha: 0,
        }, "<").to(".bar-3", {
            duration: 0.5,
            attr: { d: "M8,8 L2,2" },
            x: 1,
            ease: "power2.inOut"
        }, "<")

        menuBerTl.reverse()

        // nav Tl
        const navTl = gsap.timeline({ paused: true })
        navTl.to(".menu", {
            duration: 0,
            display: "block",
            ease: "expo.inOut"
        }).from(".menu-bg span", {
            duration: 1,
            x: "100%",
            stagger: 0.1,
            ease: "expo.inOut"
        }).from(".link", {
            duration: 1.5,
            y: "100%",
            stagger: 0.2,
            ease: "expo.inOut"
        }, "-=0.5").from(".social-list", {
            duration: 1,
            y: "-100%",
            opacity: 0,
            stagger: 0.1,
            ease: "expo.inOut"
        })

        navTl.reverse()
        const toggleMenu = () => {
            menuBerTl.reversed(!menuBerTl.reversed())
            navTl.reversed(!navTl.reversed())
        }

        menuBtn.current?.addEventListener("click", toggleMenu)
        return () => {
            menuBtn.current?.removeEventListener("click", toggleMenu)
        }

    }, { scope: headerRef })

    return (
        <header ref={headerRef} className={cn("fixed top-0 left-0 w-full py-4 z-50 bg-linear-to-b from-neutral-900 to-80%")}>
            <div className={cn(
                "container",
                "flex items-center justify-between")
            }>
                {/* Logo */}
                <Link href={"/"} className={cn("font-bold text-3xl text-white inline-block")}>
                    <Image src={"/images/logo.svg"} alt='logo' width={40} height={40} />
                </Link>
                {/* Menu btn */}
                <button ref={menuBtn} className={cn("relative z-70 bg-transparent border-none cursor-pointer")}>
                    <svg viewBox="0 0 12 10" className="hamburger" height="40px" width="40px">
                        <path d="M10,2 L2,2" className="bar-1"></path>
                        <path d="M2,5 L10,5" className="bar-2"></path>
                        <path d="M10,8 L2,8" className="bar-3"></path>
                    </svg>
                </button>

                {/* Menu wrapper */}
                <div className={cn(
                    "menu",
                    "fixed top-0 left-0 w-full h-svh hidden z-50"
                )}>
                    <div className={cn(
                        "menu-inner",
                        "flex items-center h-full px-15"
                    )}>
                        {/* Menu bg */}
                        <div className={cn(
                            "menu-bg",
                            "w-full h-full absolute top-0 left-0"
                        )}>
                            {[1, 2, 3].map(span => (
                                <span key={span} className={cn(
                                    "menu-bg",
                                    "h-[33.334%] block bg-neutral-950 w-full"
                                )} />
                            ))}
                        </div>

                        {/* navbar */}
                        <nav className={cn(
                            "nav",
                            "container",
                            "relative z-10",
                        )}>
                            <ul className={cn("flex flex-col gap-4")}>
                                {navItems.map(item => (
                                    <li key={item.id} className={cn("overflow-hidden transition-transform duration-300 ease-in-out")}>
                                        <Link href={item.href} className={cn(
                                            "link",
                                            "inline-block text-white text-6xl uppercase font-medium leading-none transition-opacity",
                                            "lg:text-7xl",
                                            "hover:opacity-75"
                                        )}>
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        {/* Social links */}
                        <div className={cn(
                            "absolute bottom-0 left-0 py-10 px-15 z-10",
                            "lg:px-32"
                        )}>
                            <ul className={cn("flex items-center text-white gap-7")}>
                                {["Facebook", "Instagram", "Twitter"].map(link => (
                                    <li key={link} className={cn("social-list")}>
                                        <a href="#" className={cn("uppercase fon-medium")}>
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header