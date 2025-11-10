"use client"

import { useEffect, useState } from "react"

export default function useStickyHeader() {
	const [isSticky, setIsSticky] = useState(false)

	useEffect(() => {
		// Make sure this runs only on the client-side
		if (typeof window === "undefined") return

		const handleScroll = () => {
			const scroll = window.scrollY
			setIsSticky(scroll >= 245)
		}

		window.addEventListener("scroll", handleScroll)
		handleScroll() // Call on mount to set initial state

		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

	useEffect(() => {
		// Update classes based on `isSticky` state
		const stickyHeader = document.getElementById("sticky-header")
		const scrollToTarget = document.querySelector(".scroll-to-target")
		const headerFixedHeight = document.getElementById("header-fixed-height")

		if (stickyHeader) {
			stickyHeader.classList.toggle("sticky-menu", isSticky)
		}
		if (scrollToTarget) {
			scrollToTarget.classList.toggle("open", isSticky)
		}
		if (headerFixedHeight) {
			headerFixedHeight.classList.toggle("active-height", isSticky)
		}
	}, [isSticky]) // Run this effect when `isSticky` changes

	return { isSticky }
}
