import Link from 'next/link'

export default function Section7() {
	return (
		<>

			<section className="cta-area-1 overflow-hidden">
				<div className="container">
					<div className="cta-wrap1 pt-120 pb-120 bg-cover" data-background="assets/img/bg/cta-bg1-1.png">
						<div className="cta-bg-shape1-1" data-background="assets/img/bg/cta-bg-shape1-1.png" />
						<div className="row justify-content-center align-items-center">
							<div className="col-xl-7 col-lg-8">
								<div className="section__title text-center">
									<span className="sub-title text-white text-anim">About Amazing Company</span>
									<h2 className="title text-white text-anim2">Do You Have Similar Service
										Requirements?
									</h2>
									<div className="tg-button-wrap mt-40 justify-content-center">
										<Link href="/contact" className="btn btn-seven">
											<span className="btn-text" data-text="Contact With Us" />
											<i className="fas fa-arrow-right" />
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
