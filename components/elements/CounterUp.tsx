'use client'
import CountUp from 'react-countup'

export default function CounterUp({ children }: any) {
	return (
		<>
			<CountUp counter-number enableScrollSpy={true} end={children} />
		</>
	)
}
