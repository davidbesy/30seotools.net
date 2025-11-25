import "/public/assets/css/bootstrap.min.css"
import "/public/assets/css/animate.min.css"
import "/public/assets/css/magnific-popup.css"
import "/public/assets/css/fontawesome-all.min.css"
import "/public/assets/css/swiper-bundle.min.css"
import "/public/assets/css/aos.css"
import "/public/assets/css/jquery.datetimepicker.min.css"
import "/public/assets/css/default.css"
import "/public/assets/css/style.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
    metadataBase: new URL('https://30seotools.net'),
    title: {
        default: "SEO GROUP BUY TOOLS - Premium SEO Tools at Group Buy Prices",
        template: "%s | 30seotools.net"
    },
    description: "Access premium SEO tools including Ahrefs, SEMrush, Moz Pro, and 50+ more tools at affordable group buy prices. Save up to 90% on individual subscriptions.",
    keywords: ["SEO tools", "group buy SEO tools", "Ahrefs group buy", "SEMrush group buy", "Moz Pro group buy", "affordable SEO tools"],
    authors: [{ name: "30seotools.net" }],
    creator: "30seotools.net",
    publisher: "30seotools.net",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://30seotools.net',
        siteName: '30seotools.net',
        title: 'SEO GROUP BUY TOOLS - Premium SEO Tools at Group Buy Prices',
        description: 'Access premium SEO tools including Ahrefs, SEMrush, Moz Pro, and 50+ more tools at affordable group buy prices.',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'SEO GROUP BUY TOOLS - Premium SEO Tools at Group Buy Prices',
        description: 'Access premium SEO tools including Ahrefs, SEMrush, Moz Pro, and 50+ more tools at affordable group buy prices.',
    },
    alternates: {
        canonical: 'https://30seotools.net',
    },
    verification: {
        // Add your verification codes here if needed
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className='white-bg'>
                {children}
            </body>
        </html>
    )
}
