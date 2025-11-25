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
    title: "SEO GROUP BUY TOOLS",
    description: "SEO GROUP BUY TOOLS - Access Premium SEO Tools at Group Buy Prices",
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
