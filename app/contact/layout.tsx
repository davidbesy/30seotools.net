import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Contact Us - Get Support & Assistance",
	description: "Contact Group Buy SEO Tools for support and assistance. Email: admin@groupbuyseotool.us, WhatsApp: +1 (520) 563-6362, Skype: seogroupbuy.support",
	alternates: {
		canonical: 'https://30seotools.net/contact',
	},
	openGraph: {
		title: 'Contact Us - Get Support & Assistance',
		description: 'Contact Group Buy SEO Tools for support and assistance.',
		url: 'https://30seotools.net/contact',
	},
}

export default function ContactLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return <>{children}</>
}

