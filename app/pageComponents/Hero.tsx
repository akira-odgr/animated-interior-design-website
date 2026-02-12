"use client"
import { cn } from '@/libs/cn'

const Hero = () => {
    return (
        <section className={cn(
            "hero-bg",
            "bg-neutral-950 text-white relative min-h-screen flex flex-col z-20"
        )}>
            <div className={cn("hero-wrapper", "container", "flex flex-1 flex-col justify-between py-10")}>
                <h1 className={cn("font-semibold text-[90px] my-auto", "sm:text-9xl", "lg:text-[200px]")}>Desint</h1>

                {/* Wrapper */}
                <div className={cn("flex flex-col space-y-5", "lg:flex-row lg:items-center lg:justify-between")}>
                    <p className={cn("text", "lg:max-w-2xl")}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic minus nostrum eveniet
                        reprehenderit, exercitationem odit fugit quia tempore nihil possimus recusandae quo sit
                        error praesentium alias eligendi impedit! Quos, repudiandae?
                    </p>
                    <p className={cn("text", "shrink-0", "lg:ml-8")}>scroll down</p>
                </div>
            </div>
        </section>
    )
}

export default Hero