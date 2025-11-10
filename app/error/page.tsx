
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Error() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1}>
				<main>

					<section className="breadcrumb__area fix" data-background="assets/img/bg/breadcrumb-bg.png">
						<div className="breadcrumb__bg-shape" />
						<div className="container">
							<div className="row align-items-center">
								<div className="col-xl-6">
									<div className="breadcrumb__content">
										<h3 className="title">404 (Error Page)</h3>
									</div>
								</div>
								<div className="col-xl-6">
									<div className="breadcrumb-wrap">
										<nav className="breadcrumb">
											<span property="itemListElement" typeof="ListItem">
												<Link href="/">Home</Link>
											</span>
											<span className="breadcrumb-separator">/</span>
											<span property="itemListElement" typeof="ListItem">404 Error</span>
										</nav>
									</div>
								</div>
							</div>
						</div>
					</section>
					{/* breadcrumb-area-end */}
					{/*==============================
						Error Area
					==============================*/}
					<section className="error-area pt-120 pb-120">
						<div className="container">
							<div className="row">
								<div className="col-12">
									<div className="error-wrap text-center">
										<div className="ertor-thumb mb-40">
											<img src="/assets/img/others/error.svg" alt="img" />
										</div>
										<div className="section__title">
											<h2 className="title">Oops! Nothing Was Found
											</h2>
											<p className="sec-text mt-20">Sorry, we couldn’t find the page you where looking for. <br />
												We suggest that you return to homepage.
											</p>
											<div className="tg-button-wrap justify-content-center mt-40">
												<Link href="/" className="btn">
													<span className="btn-text" data-text="Back To Homepage" />
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					{/*======== / Appointment Section ========*/}
				</main>
			</Layout>
		</>
	)
}