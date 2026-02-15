"use client"
import { useSplitTextScrollAnimation } from "@/hooks/useSplitTextScrollAnimation"
import { status } from "@/data/data"
import { cn } from "@/libs/cn"
import { useRef } from "react"

const About = () => {
    const aboutRef = useRef<HTMLElement | null>(null)

    useSplitTextScrollAnimation({
        trigger: ".about-wrapper",
        scope: aboutRef,
        // markers: true
    })

    return (
        <section ref={aboutRef} className={cn("py-16 bg-neutral-950 text-neutral-50")}>
            <div className={cn("about-wrapper", "container", "space-y-8")}>
                <p className={cn("text", "max-w-2xl mx-auto text-xl text-center")}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic minus nostrum eveniet
                    reprehenderit, exercitationem odit fugit quia tempore nihil possimus recusandae quo sit
                    error praesentium alias eligendi impedit! Quos, repudiandae?
                </p>

                {/* status */}
                <div className={cn("grid gap-8 max-w-max mx-auto", "lg:grid-cols-3 lg:divide-x")}>
                    {status.map(item => (
                        <div key={item.id} className={cn("text", "px-8 text-center")}>
                            <h2 className={cn("text", "text-2xl")}>{item.value}</h2>
                            <p className={cn("text")}>{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default About