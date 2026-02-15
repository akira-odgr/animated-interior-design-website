"use client"
import { servicesItems } from "@/data/data"
import { useSplitTextScrollAnimation } from "@/hooks/useSplitTextScrollAnimation"
import { cn } from "@/libs/cn"
import { gsap, useGSAP } from "@/libs/gsap"
import Image from "next/image"
import { useRef } from "react"

const Services = () => {
    const servicesRef = useRef<HTMLElement | null>(null)

    useSplitTextScrollAnimation({
        trigger: ".services-wrapper",
        scope: servicesRef,
        // markers: true
    })
    useGSAP(() => {
        const image = gsap.utils.toArray<HTMLImageElement>(".services-img", servicesRef.current)
        image.forEach(img => {
            gsap.to(img, {
                yPercent: 50,
                ease: "none",
                scrollTrigger: {
                    trigger: img.parentElement,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            })
        })
    }, { scope: servicesRef })

    return (
        <section ref={servicesRef} className={cn("section", "pb-20", "lg:pb-28")}>
            <div className={cn("services-wrapper", "container")}>
                {/* Title */}
                <div className={cn("flex items-center justify-between gap-8 flex-wrap")}>
                    <h2 className={cn("text")}>Our Services</h2>
                    <p className={cn("text", "section-title")}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae!
                    </p>
                </div>
                {/* Wrapper */}
                <div className={cn("space-y-16 mt-20", "lg:mt-32")}>
                    {servicesItems.map(item => (
                        <div key={item.id} className={cn("relative flex items-start max-w-3xl", "odd:mx-auto")}>
                            {/* content */}
                            <div className={cn("absolute top-6 left-0 z-20")}>
                                <p>service 0{item.id}</p>
                                <h2 className={cn("text-5xl max-w-1/2 font-medium w-full", "lg:text-7xl")}>{item.title}</h2>
                            </div>
                            {/* Image */}
                            <div className={cn("relative max-w-max h-96 ml-auto overflow-hidden aspect-16/10 z-10")}>
                                <Image src={item.img} alt={item.title} width={740} height={622} className={cn("services-img", "absolute bottom-0 left-0 w-full h-[150%] object-cover object-center")} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services