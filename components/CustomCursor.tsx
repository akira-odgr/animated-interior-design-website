"use client"

import { gsap, useGSAP } from '@/libs/gsap'
import { useRef } from 'react'
import { cn } from '@/libs/cn'

const CustomCursor = () => {
    const cursorRef = useRef<HTMLDivElement | null>(null)

    useGSAP(() => {
        gsap.set(cursorRef.current, {
            yPercent: -50,
            xPercent: -50
        })

        const xTo = gsap.quickTo(cursorRef.current, "x", {
            duration: 0.6,
            ease: "power3"
        })

        const yTo = gsap.quickTo(cursorRef.current, "y", {
            duration: 0.6,
            ease: "power3"
        })

        const handleMouseMove = (e: MouseEvent) => {
            xTo(e.clientX)
            yTo(e.clientY)

            const el = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement | null
            if (!el) return

            const bg = window.getComputedStyle(el).backgroundColor

            // rgb → 数値抽出
            const rgb = bg.match(/\d+/g)?.map(Number)
            if (!rgb) return

            const [r, g, b] = rgb

            // 明度判定（シンプルなluminance計算）
            const luminance = (0.299 * r + 0.587 * g + 0.114 * b)

            if (luminance < 128) {
                gsap.to(cursorRef.current, {
                    backgroundColor: "#ffffff",
                    duration: 0.2,
                    overwrite: "auto"
                })
            } else {
                gsap.to(cursorRef.current, {
                    backgroundColor: "#000000",
                    duration: 0.2,
                    overwrite: "auto"
                })
            }
        }

        window.addEventListener("mousemove", handleMouseMove)

        const hoverTargets = document.querySelectorAll("a, button, p, span, h1, h2, h3")

        const handleMouseEnter = () => {
            gsap.to(cursorRef.current, {
                scale: 1.8,
                duration: 0.3,
                ease: "power3.out"
            })
        }

        const handleMouseLeave = () => {
            gsap.to(cursorRef.current, {
                scale: 1,
                duration: 0.3,
                ease: "power3.out"
            })
        }

        hoverTargets.forEach((el) => {
            el.addEventListener("mouseenter", handleMouseEnter)
            el.addEventListener("mouseleave", handleMouseLeave)
        })

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)

            hoverTargets.forEach((el) => {
                el.removeEventListener("mouseenter", handleMouseEnter)
                el.removeEventListener("mouseleave", handleMouseLeave)
            })
        }
    })
    return (
        <div ref={cursorRef} className={cn("fixed top-0 left-0 size-12 rounded-full bg- pointer-events-none mix-blend-difference z-80")} />
    )
}

export default CustomCursor