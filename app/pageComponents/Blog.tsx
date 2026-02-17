"use client"
import { gsap, useGSAP, ScrollTrigger, SplitText } from "@/libs/gsap"
import { blogItems } from "@/data/data"
import { cn } from "@/libs/cn"
import Image from "next/image"
import SocialIcons from "./SocialIcons"
import { useRef } from "react"

const getCurrentYear = new Date().getFullYear()

const Blog = () => {
    const blogRef = useRef<HTMLElement | null>(null)

    useGSAP(() => {
        // text split
        const blogTextSplit = SplitText.create(".text", {
            type: "words, lines",
            linesClass: "line"
        })

        const blogTextSplitTl = gsap.timeline({
            scrollTrigger: {
                trigger: blogRef.current,
                start: "top center",
                markers: true
            }
        })

        blogTextSplitTl.from(blogTextSplit.words, {
            yPercent: 100,
            ease: "power2.inOut",
            duration: 1,
            stagger: 0.01
        })
    }, { scope: blogRef })

    return (
        <section ref={blogRef} className={cn("section", "pb-24", "lg:pb-28")}>
            <div className={cn("container")}>
                {/* title */}
                <h2 className={cn("text", "section-title", "max-w-sm")}>Browse our news & articles</h2>

                {/* wrapper */}
                <div className={cn("grid gap-8 mt-16", "lg:grid-cols-2")}>
                    {/* content */}
                    <div className={cn("space-y-4 flex flex-col")}>
                        <h3 className={cn("text", "text-3xl font-semibold", "lg:text-4xl")}>12 design tricks for picking home color palatte</h3>
                        <p className={cn("text")}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo nam illum perspiciatis dicta fugiat dolorem iusto dignissimos minima, optio, necessitatibus quae. Earum ratione, consequatur distinctio molestias commodi porro. Debitis, soluta!
                        </p>
                        <p className={cn("text")}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo nam illum perspiciatis dicta fugiat dolorem iusto dignissimos minima, optio, necessitatibus quae. Earum ratione, consequatur distinctio molestias commodi porro. Debitis, soluta!
                        </p>
                        <p className={cn("text")}>Design - Dec 20, {getCurrentYear}</p>
                        <div>
                            <SocialIcons />
                        </div>
                    </div>
                    {/* Image */}
                    <div className={cn("max-w-max mx-auto")}>
                        <Image
                            src="/images/blog-img-1.png"
                            alt="Blog image"
                            width={490}
                            height={343}
                            className={cn("w-full h-auto object-cover")} />
                    </div>
                </div>
                {/* wrapper */}
                <div className={cn("grid gap-6 mt-8 border-t border-gray-200 pt-7", "lg:grid-cols-2 lg:gap-11")}>
                    {blogItems.map(item => (
                        <div key={item.id} className={cn("space-y-3")}>
                            <h3 className={cn("text", "text-2xl font-bold", "lg:text-3xl")}>{item.title}</h3>
                            <p className={cn("text", "max-w-md")}>{item.text}</p>
                            <p className={cn("text")}>{item.date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Blog