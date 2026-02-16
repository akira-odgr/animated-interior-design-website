"use client"
import { processItems } from "@/data/data"
import { cn } from "@/libs/cn"
import { gsap, useGSAP, SplitText, ScrollTrigger } from "@/libs/gsap"
import { useRef } from "react"

const OurProcess = () => {
    const processRef = useRef<HTMLElement | null>(null)

    useGSAP(() => {
        if (!processRef.current) return

        const processTextSplit = SplitText.create(".text", {
            type: "words, lines",
            linesClass: "line"
        })

        const processTextSplitTl = gsap.timeline({
            scrollTrigger: {
                trigger: processRef.current,
                start: "top center",
                markers: true
            }
        })

        processTextSplitTl.from(processTextSplit.words, {
            yPercent: 100,
            ease: "power2.inOut",
            duration: 1,
            stagger: 0.01
        })

        // card animation
        const cards = gsap.utils.toArray<HTMLDivElement>(".card")
        const spacer = 20
        const minScale = 0.8

        const distributor = gsap.utils.distribute({
            base: minScale,
            amount: 0.2,
        })

        cards.forEach((card, index) => {
            const scaleVal = distributor(index, cards[index], cards)

            const tween = gsap.to(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top top",
                    scrub: true,
                    invalidateOnRefresh: true,
                    markers: true
                },
                ease: "none",
                scale: scaleVal,
            })

            ScrollTrigger.create({
                trigger: card,
                start: `top-=${index * spacer} top`,
                endTrigger: ".cards",
                end: `bottom top+=${200 + cards.length * spacer}`,
                pin: true,
                pinSpacing: false,
                id: "pin",
                invalidateOnRefresh: true,
                markers: true,
            })

        })

    }, { scope: processRef })


    return (
        <section ref={processRef} className={cn("section", "h-[400svh]")}>
            <div className={cn("container")}>
                {/* Title */}
                <div className={cn("flex flex-col items-start gap-3", "lg:flex-row lg:justify-between")}>
                    <p className={cn("text")}>Our Process</p>
                    <h2 className={cn("text", "section-title", "max-w-2xl")}>
                        Our Portfolio showcases the diversity of our creativity.
                    </h2>
                </div>
                {/* Wrapper */}
                <div className={cn("cards", "mx-auto max-w-3/4 space-y-10 mt-20", "lg:mt-24")}>
                    {processItems.map(item => (
                        // Card
                        <div key={item.id} className={cn("card", "bg-neutral-900 space-y-3 text-neutral-50 p-5 border mb-6 rounded-xl", "sm:p-10", "lg:px-16")}>
                            <span className={cn("text-4xl font-semibold inline-block", "sm:text-5xl")}>0{item.id}</span>
                            <h2 className={cn("text-2xl")}>0{item.title}</h2>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OurProcess