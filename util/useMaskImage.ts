'use client'
import { useEffect } from 'react'

const useMaskImage = () => {
	useEffect(() => {
		if (typeof window !== 'undefined') {
			document.querySelectorAll('[data-mask-src]').forEach((el) => {
				const element = el as HTMLElement // Ensure it's an HTMLElement
				const mask = element.getAttribute('data-mask-src')
				if (mask) {
					element.style.maskImage = `url(${mask})`
					element.style.webkitMaskImage = `url(${mask})`
					element.classList.add('bg-mask')
					element.removeAttribute('data-mask-src')
				}
			})
		}
	}, [])
}

export default useMaskImage
