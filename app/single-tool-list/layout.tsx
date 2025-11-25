import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Single Tool List - All Premium SEO Tools",
	description: "Browse our complete list of premium SEO tools available at group buy prices. Access Ahrefs, SEMrush, Moz Pro, and 50+ more tools.",
	alternates: {
		canonical: 'https://30seotools.net/single-tool-list',
	},
	openGraph: {
		title: 'Single Tool List - All Premium SEO Tools',
		description: 'Browse our complete list of premium SEO tools available at group buy prices.',
		url: 'https://30seotools.net/single-tool-list',
	},
}

export default function SingleToolListLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return <>{children}</>
}

