import SocialIcons from '@/app/pageComponents/SocialIcons'
import { footerItems } from '@/data/data'
import { cn } from '@/libs/cn'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className={cn("bg-neutral-950 text-white pt-16", "lg:pt-24")}>
            <div className={cn("container", "divide-y divide-neutral-900")}>
                {/* Footer top */}
                <div className={cn("grid gap-7 pb-20", "sm:grid-cols-2", "lg:grid-cols-[1fr_0.6fr_0.6fr_0.6fr]")}>
                    {/* wrapper */}
                    <div className={cn("space-y-4")}>
                        {/* Logo */}
                        <div className={cn("flex items-center gap-2.5")}>
                            <span className={cn("inline-block")}>
                                <Image src={"/images/logo.svg"} alt='footer logo' width={40} height={40} />
                            </span>
                            <p className={cn("text-3xl font-semibold")}>Desint</p>
                        </div>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam dolor saepe quia minus voluptatem sed accusamus libero? Nulla iste, soluta perspiciatis quo facilis ratione, sed excepturi itaque alias at neque.
                        </p>
                        <SocialIcons />
                    </div>
                    {/* List */}
                    {footerItems.map(item => (
                        <div key={item.id}>
                            <p className={cn("text-lg font-semibold")}>{item.title}</p>
                            <ul className={cn("space-y-2 mt-3")}>
                                {item.list.map((label, index) => (
                                    <li key={index}>
                                        <a href="#" className={cn("text-neutral-300", "hover:underline")}>{label}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                {/* Footer bottom */}
                <p className={cn("text-center py-4")}>&copy; Copy {new Date().getFullYear()} keen coding AllRights reserved</p>
            </div>
        </footer>
    )
}

export default Footer