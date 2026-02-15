import { RefObject } from "react";
import { gsap, SplitText, useGSAP } from "@/libs/gsap";

type UseSplitTextScrollAnimationOptions = {
    titleSelector?: string;
    textSelector?: string;
    trigger: string;
    start?: string;
    scope?: RefObject<HTMLElement | null>;
    markers?: boolean;
};

export const useSplitTextScrollAnimation = ({
    titleSelector = ".title",
    textSelector = ".text",
    trigger,
    start = "top center",
    scope,
    markers,
}: UseSplitTextScrollAnimationOptions) => {
    useGSAP(
        () => {
            const titleSplit = SplitText.create(
                titleSelector,
                {
                    type: "chars lines",
                    smartWrap: true,
                    linesClass: "line",
                },
            );

            const textSplit = SplitText.create(
                textSelector,
                {
                    type: "words lines",
                    smartWrap: true,
                    linesClass: "line",
                },
            );

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger,
                    start,
                    markers,
                },
            });

            tl.from(titleSplit.chars, {
                yPercent: 100,
                ease: "power2.inOut",
                duration: 1,
                stagger: 0.05,
            }).from(textSplit.words, {
                yPercent: 100,
                ease: "power2.inOut",
                duration: 1,
                stagger: 0.05,
            });
        },
        { scope },
    );
};
