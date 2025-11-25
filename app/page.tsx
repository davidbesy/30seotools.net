import Layout from "@/components/layout/Layout"
import Section1 from '@/components/sections/home1/section1'
import Section2Process from '@/components/sections/home1/section2-process'
import Section12Pricing from '@/components/sections/home1/section12-pricing'
import Section2 from '@/components/sections/home1/section2'
import Section3 from '@/components/sections/home1/section3'
import Section4 from '@/components/sections/home1/section4'
import Section5 from '@/components/sections/home1/section5'
import Section6 from '@/components/sections/home1/section6'
import Section7 from '@/components/sections/home1/section7'
import Section10 from '@/components/sections/home1/section10'
import Section11 from '@/components/sections/home1/section11'
import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Home - Premium SEO Tools at Group Buy Prices",
	description: "Access 50+ premium SEO tools including Ahrefs, SEMrush, Moz Pro at affordable group buy prices. Save up to 90% on individual subscriptions.",
	alternates: {
		canonical: 'https://30seotools.net',
	},
	openGraph: {
		title: 'Premium SEO Tools at Group Buy Prices - 30seotools.net',
		description: 'Access 50+ premium SEO tools including Ahrefs, SEMrush, Moz Pro at affordable group buy prices.',
		url: 'https://30seotools.net',
	},
}

export default function Home() {
	return (
		<>
			<Layout headerStyle={1} footerStyle={1}>
				<Section1 />
				<Section2Process />
				<Section12Pricing />
				<Section2 />
				<Section3 />
				<Section4 />
				<Section5 />
				<Section6 />
				<Section7 />
				<Section10 />
				<Section11 />
			</Layout>
		</>
	)
}