"use client"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from "react"

// Correct SplitText type definition
type SplitTextType = {
	new(element: Element, options: { type: string }): { chars: Element[] }
}

let SplitText: SplitTextType | null = null

export default function useTextAnimation() {
	useEffect(() => {
		if (typeof window === "undefined") return

		const setupAnimation = async () => {
			gsap.registerPlugin(ScrollTrigger)

			try {
				const gsapAll = await import("gsap/all")
				SplitText = gsapAll.SplitText as SplitTextType
				if (SplitText) {
					gsap.registerPlugin(SplitText) // Register only if SplitText is not null
				}
			} catch (error) {
				console.warn("SplitText not available. Using fallback.")
			}

			const animateText = (selector: string, staggerAmount: number, delayValue: number) => {
				const elements = document.querySelectorAll<HTMLElement>(selector)

				elements.forEach((element) => {
					let chars: Element[] | null = null

					if (SplitText) {
						const split = new SplitText(element, { type: "chars, words" })
						chars = split.chars
					} else {
						const text = element.textContent || ""
						element.innerHTML = text.split('').map(char => `<span class="split-char">${char}</span>`).join('')
						chars = Array.from(element.querySelectorAll('.split-char'))
					}

					if (chars) {
						gsap.from(chars, {
							duration: 1,
							delay: delayValue,
							x: 20,
							autoAlpha: 0,
							stagger: staggerAmount,
							ease: "power2.out",
							scrollTrigger: {
								trigger: element,
								start: "top 85%",
							},
						})
					}
				})
			}

			animateText(".text-anim", 0.05, 0.5)
			animateText(".text-anim2", 0.03, 0.1)
		}

		setupAnimation()

		return () => {
			ScrollTrigger.getAll().forEach(trigger => trigger.kill())
		}
	}, [])
}
