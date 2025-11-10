'use client'
import { useEffect } from 'react'

export function dataBg() {
	useEffect(() => {
		const elements = document.querySelectorAll<HTMLElement>('[data-background]')

		elements.forEach((element) => {
			const bgUrl = element.getAttribute('data-background')
			if (bgUrl) {
				element.style.backgroundImage = `url(${bgUrl})`
			}
		})
	}, [])

	return null
}
