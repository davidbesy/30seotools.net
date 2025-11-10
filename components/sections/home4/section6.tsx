import Link from 'next/link'

export default function Section6() {
	return (
		<>

			<section className="cta-area-2 overflow-hidden gray-bg bg-cover pt-100 pb-100" data-background="assets/img/bg/cta-bg-shape2-1.png">
				<div className="container">
					<div className="cta-wrap2">
						<div className="row gy-40 justify-content-xl-between justify-content-center align-items-center">
							<div className="col-xl-9">
								<div className="section__title text-xl-start text-center">
									<h2 className="title text-white">Need Any Business Consultancy? <Link href="/contact" className="text-theme">Contact With Us</Link></h2>
								</div>
							</div>
							<div className="col-auto">
								<div className="tg-button-wrap justify-content-center">
									<Link href="/contact" className="btn btn-seven">
										<span className="btn-text" data-text="Request A Call Back" />
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
