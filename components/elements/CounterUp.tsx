'use client'
import CountUp from 'react-countup'
import { useEffect, useRef, useState } from 'react'

export default function CounterUp({ children }: any) {
	const [isVisible, setIsVisible] = useState(false)
	const [currentValue, setCurrentValue] = useState<number>(0)
	const counterRef = useRef<HTMLSpanElement>(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true)
				}
			},
			{ threshold: 0.1 }
		)

		if (counterRef.current) {
			observer.observe(counterRef.current)
		}

		return () => {
			if (counterRef.current) {
				observer.unobserve(counterRef.current)
			}
		}
	}, [])

	// Convert string to number (handle "10K" -> 10000, "50" -> 50, etc.)
	const parseValue = (value: any): number => {
		if (typeof value === 'number') return value
		const str = String(value).trim()
		if (str.includes('K') || str.includes('k')) {
			return parseFloat(str.replace(/[Kk]/g, '')) * 1000
		}
		return parseFloat(str) || 0
	}

	const endValue = parseValue(children)

	// Format number for display (10000 -> "10K", 1000 -> "1K", etc.)
	const formatNumber = (num: number): string => {
		if (num >= 1000) {
			const kValue = num / 1000
			// If it's a whole number, show without decimals
			if (kValue % 1 === 0) {
				return `${kValue}K`
			}
			// Otherwise show one decimal place
			return `${kValue.toFixed(1)}K`
		}
		return Math.round(num).toString()
	}

	const shouldFormat = endValue >= 1000

	return (
		<span ref={counterRef}>
			{isVisible ? (
				<CountUp 
					start={0} 
					end={endValue} 
					duration={2.5}
					decimals={0}
					enableScrollSpy
					scrollSpyOnce
					onUpdate={(value) => setCurrentValue(value)}
				>
					{({ countUpRef }) => (
						<span ref={countUpRef}>
							{shouldFormat ? formatNumber(currentValue || 0) : Math.round(currentValue || 0)}
						</span>
					)}
				</CountUp>
			) : (
				<span>0</span>
			)}
		</span>
	)
}
