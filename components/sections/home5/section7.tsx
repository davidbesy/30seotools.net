import Link from 'next/link'

export default function Section7() {
	return (
		<>
			<section className="cta-area-3 overflow-hidden">
				<div className="cta-wrap3 pt-120 pb-120">
					<div className="cta-wrap-bg">
						<img src="/assets/img/bg/cta-bg3-1.png" alt="img" />
					</div>
					<div className="container">
						<div className="row justify-content-center align-items-center">
							<div className="col-xl-7 col-lg-8">
								<div className="section__title text-center">
									<span className="sub-title text-white text-anim">Hurry up to Buying Valom</span>
									<h2 className="title text-white text-anim2">We are building great future together, Be with us
									</h2>
									<div className="tg-button-wrap mt-40 justify-content-center">
										<Link href="/contact" className="btn btn-three">
											<span className="btn-text" data-text="Get Valom For $49" />
											<i className="fas fa-arrow-right" />
										</Link>
										<Link href="/contact" className="btn btn-eight">
											<span className="btn-text" data-text="Free Download" />
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
