"use client"
import { gsap, useGSAP, ScrollTrigger, SplitText } from '@/libs/gsap'
import { useRef } from 'react'
import { RiCornerDownRightFill } from '@remixicon/react'
import SocialIcons from './SocialIcons'
import { cn } from '@/libs/cn'
import { start } from 'repl'

const Cta = () => {
    const ctaRef = useRef<HTMLElement | null>(null)
    const bgImgRef = useRef<HTMLDivElement | null>(null)

    useGSAP(() => {
        const ctaTextSplit = SplitText.create(".text", {
            type: "words, lines",
            linesClass: "line"
        })

        const ctaTextSplitTl = gsap.timeline({
            scrollTrigger: {
                trigger: ctaRef.current,
                start: "top center",
                markers: true
            }
        })

        ctaTextSplitTl.from(ctaTextSplit.words, {
            yPercent: 100,
            duration: 1,
            ease: "power2.inOut",
            stagger: 0.01
        })

        gsap.to(".img-cover", {
            yPercent: 50,
            ease: "none",
            scrollTrigger: {
                trigger: ctaRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        })
    }, { scope: ctaRef })

    return (
        <section ref={ctaRef} className={cn("relative py-20 h-screen flex flex-col justify-center w-full overflow-hidden")}>
            <div className={cn("cta-wrapper", "container", "space-y-5")}>
                <h2 className={cn("text", "text-white max-w-4xl text-6xl font-semibold w-full")}>Let&apos;s work together Get a quote today.</h2>

                {/* wrapper */}
                <div className={cn("flex flex-col justify-between border-t border-neutral-300 pt-5 space-y-5", "lg:items-center lg:flex-row")}>
                    {/* Btn */}
                    <button className={cn("bg-neutral-50 px-6 py-3 font-semibold flex items-center justify-center gap-2 transition-colors", "hover:bg-neutral-300")}>
                        <span>
                            <RiCornerDownRightFill />
                        </span>
                        Book a Consultation
                    </button>
                    {/* content */}
                    <div className={cn("text-white space-y-3", "sm:space-y-5")}>
                        <p className={cn("text", "max-w-lg text-lg")}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur facere maiores aspernatur. Libero impedit, nobis rerum, nesciunt, tempore magni vitae quia provident dolor odit non totam culpa sunt! Dolorum, illo.
                        </p>
                        <SocialIcons />
                    </div>
                </div>
            </div>

            {/* bg image */}
            <div className={cn("absolute inset-0 -z-10 overflow-hidden")}>
                <img src="/images/cta-img.png" alt="cta image" className={cn("img-cover", "absolute  bottom-0 left-0 block w-full h-[150%] object-cover")} />
            </div>
            {/* overlay */}
            <div className={cn("bg-neutral-950/45 absolute top-0 h-full w-full -z-10")} />
        </section>
    )
}

export default Cta