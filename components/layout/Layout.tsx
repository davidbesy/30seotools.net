
'use client'
import AOS from 'aos'
import 'aos/dist/aos.css'
import dynamic from 'next/dynamic'
import type { FC } from 'react'

// Define the props interface (same as above)
interface BootstrapComponentsProps { }

// Type the dynamic import
const BootstrapComponents = dynamic<BootstrapComponentsProps>(
	() => import('@/util/BootstrapComponents'),
	{ ssr: false } // Disable SSR since this is client-side only
) as FC<BootstrapComponentsProps>
import { dataBg } from '@/util/data-bg'
import useMaskImage from '@/util/useMaskImage'
import useMobileMenu from '@/util/useMobileMenu'
import useStickyHeader from '@/util/useStickyHeader'
import AnimatedText from '@/util/useTextAnimation'
import { useEffect, useState } from "react"
import BackToTop from '../elements/BackToTop'
import Breadcrumb from './Breadcrumb'
import MobileMenu from './MobileMenu'
import Footer1 from './footer/Footer1'
import Footer2 from './footer/Footer2'
import Footer3 from './footer/Footer3'
import Footer4 from './footer/Footer4'
import Footer5 from './footer/Footer5'
import Header1 from "./header/Header1"
import Header2 from './header/Header2'
import Header3 from './header/Header3'
import Header4 from './header/Header4'
import Header5 from './header/Header5'

interface LayoutProps {
	headerStyle?: Number
	footerStyle?: Number
	children?: React.ReactNode
	breadcrumbTitle?: string
}


export default function Layout({ headerStyle, footerStyle, breadcrumbTitle, children }: LayoutProps) {
	const [scroll, setScroll] = useState<boolean>(false)
	// Mobile Menu
	const [isMobileMenu, setMobileMenu] = useState<boolean>(false)
	const handleMobileMenu = (): void => setMobileMenu(!isMobileMenu)

	useEffect(() => {
		const WOW: any = require('wowjs');
		(window as any).wow = new WOW.WOW({
			live: false
		});

		// Initialize WOW.js
		(window as any).wow.init()

		AOS.init()

		const handleScroll = (): void => {
			const scrollCheck: boolean = window.scrollY > 100
			if (scrollCheck !== scroll) {
				setScroll(scrollCheck)
			}
		}

		document.addEventListener("scroll", handleScroll)

		return () => {
			document.removeEventListener("scroll", handleScroll)
		}
	}, [scroll])
	dataBg()
	AnimatedText()
	useMobileMenu()
	useStickyHeader()
	useMaskImage()
	// useBootstrap()
	return (
		<>
			<div id="top" />
			<BootstrapComponents />
			{!headerStyle && <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} />}
			{headerStyle == 1 ? <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} /> : null}
			{headerStyle == 2 ? <Header2 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} /> : null}
			{headerStyle == 3 ? <Header3 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} /> : null}
			{headerStyle == 4 ? <Header4 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} /> : null}
			{headerStyle == 5 ? <Header5 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} /> : null}
			<MobileMenu isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} />

			<main className="fix">
				{breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

				{children}
			</main>

			{!footerStyle && < Footer1 />}
			{footerStyle == 1 ? < Footer1 /> : null}
			{footerStyle == 2 ? < Footer2 /> : null}
			{footerStyle == 3 ? < Footer3 /> : null}
			{footerStyle == 4 ? < Footer4 /> : null}
			{footerStyle == 5 ? < Footer5 /> : null}

			<BackToTop target="#top" />
		</>
	)
}
