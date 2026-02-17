import { cn } from '@/libs/cn'
import { RiFacebookFill, RiInstagramFill, RiPinterestFill, RiTwitterFill } from '@remixicon/react'
import React from 'react'

const SocialIcons = () => {
    return (
        <div className={cn("flex items-center gap-4")}>
            {[RiFacebookFill, RiPinterestFill, RiInstagramFill, RiTwitterFill].map((Icon, index) => (
                <a href="#" key={index} className={cn("transition-transform", "hover:-translate-y-0.5")}>
                    <Icon />
                </a>
            ))}
        </div>
    )
}

export default SocialIcons