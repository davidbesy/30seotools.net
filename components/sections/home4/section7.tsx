import Link from 'next/link'

export default function Section7() {
	return (
		<>

			<section className="pricing-area-2 overflow-hidden pt-120 pb-120 position-relative z-2">
				<div className="pricing-bg-shape2-1 d-xl-block d-none">
					<img src="/assets/img/bg/pricing-bg2-1.png" alt="img" />
				</div>
				<div className="container">
					<div className="row justify-content-end">
						<div className="col-xl-6">
							<div className="section__title mb-50">
								<span className="sub-title text-anim">Pricing Plans</span>
								<h2 className="title text-anim2">We are building great
									future together!</h2>
							</div>
							<div className="pricing-card-wrap">
								<div className="pricing-card style2">
									<div className="pricing-card_details">
										<h4 className="pricing-card_title">Essential Plan</h4>
										<p className="pricing-card_text">Perfect for startups or small businesses looking to set a strong foundation.</p>
										<div className="checklist">
											<ul className="list-wrap">
												<li><i className="far fa-check-circle" /> Business initial assessment check </li>
												<li><i className="far fa-check-circle" /> Customized strategic roadmap</li>
												<li><i className="far fa-check-circle" /> Monthly consultation</li>
											</ul>
										</div>
									</div>
									<div className="media-body">
										<h4 className="pricing-card_price"><span className="currency">$</span>2,500<span className="duration">/month</span>
										</h4>
										<div className="tg-button-wrap">
											<Link href="/pricing" className="btn w-100"><span className="btn-text" data-text="Purchase Plan" /></Link>
										</div>
									</div>
								</div>
								<div className="pricing-card style2">
									<div className="pricing-card_details">
										<h4 className="pricing-card_title">Growth Plan</h4>
										<p className="pricing-card_text">Perfect for startups or small businesses looking to set a strong foundation.</p>
										<div className="checklist">
											<ul className="list-wrap">
												<li><i className="far fa-check-circle" /> Business initial assessment check </li>
												<li><i className="far fa-check-circle" /> Customized strategic roadmap</li>
												<li><i className="far fa-check-circle" /> Monthly consultation</li>
											</ul>
										</div>
									</div>
									<div className="media-body">
										<h4 className="pricing-card_price"><span className="currency">$</span>5,500<span className="duration">/month</span>
										</h4>
										<div className="tg-button-wrap">
											<Link href="/pricing" className="btn w-100"><span className="btn-text" data-text="Purchase Plan" /></Link>
										</div>
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
