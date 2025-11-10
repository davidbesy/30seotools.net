import Link from 'next/link'

export default function Section8() {
	return (
		<>

			<section className="pricing-area-1 pt-120 pb-120 overflow-hidden gray-bg section-radius position-relative">
				<div className="team-bg-shape3-1 d-xl-block d-none">
					<img src="/assets/img/bg/team-bg-shape3-1.png" alt="img" />
				</div>
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-xl-8 col-lg-10">
							<div className="section__title text-center mb-50">
								<span className="sub-title text-white text-anim">About Amazing Company</span>
								<h2 className="title text-white text-anim2">We are building great future together, Be with us</h2>
							</div>
						</div>
					</div>
					<div className="row gy-30 justify-content-center">
						<div className="col-xl-4 col-md-6">
							<div className="pricing-card">
								<div className="pricing-card_thumb">
									<img src="/assets/img/others/pricing-thumb1-1.png" alt="img" />
									<h4 className="pricing-card_price"><span className="currency">$</span>2,500<span className="duration">/month</span>
									</h4>
								</div>
								<div className="pricing-card_details">
									<h4 className="pricing-card_title">Essential Plan</h4>
									<p className="pricing-card_text">Perfect for startups or small businesses looking to set a strong foundation.</p>
									<div className="checklist">
										<ul className="list-wrap">
											<li><i className="fas fa-check" /> Business initial assessment check </li>
											<li><i className="fas fa-check" /> Customized strategic roadmap</li>
											<li><i className="fas fa-check" /> Monthly consultation (4 hours/month)</li>
											<li><i className="fas fa-check" /> Access to basic resources</li>
										</ul>
									</div>
									<div className="tg-button-wrap justify-content-center">
										<Link href="/pricing" className="btn w-100"><span className="btn-text" data-text="Purchase Plan" /></Link>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-md-6">
							<div className="pricing-card active">
								<div className="pricing-card_thumb">
									<div className="pricing-card_tag">Standard</div>
									<img src="/assets/img/others/pricing-thumb1-2.png" alt="img" />
									<h4 className="pricing-card_price"><span className="currency">$</span>5,000<span className="duration">/month</span>
									</h4>
								</div>
								<div className="pricing-card_details">
									<h4 className="pricing-card_title">Growth Plan</h4>
									<p className="pricing-card_text">Perfect for startups or small businesses looking to set a strong foundation.</p>
									<div className="checklist">
										<ul className="list-wrap">
											<li><i className="fas fa-check" /> Business initial assessment check </li>
											<li><i className="fas fa-check" /> Customized strategic roadmap</li>
											<li><i className="fas fa-check" /> Monthly consultation (4 hours/month)</li>
											<li><i className="fas fa-check" /> Access to basic resources</li>
										</ul>
									</div>
									<div className="tg-button-wrap justify-content-center">
										<Link href="/pricing" className="btn w-100"><span className="btn-text" data-text="Purchase Plan" /></Link>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-md-6">
							<div className="pricing-card">
								<div className="pricing-card_thumb">
									<img src="/assets/img/others/pricing-thumb1-3.png" alt="img" />
									<h4 className="pricing-card_price"><span className="currency">$</span>10,000<span className="duration">/month</span>
									</h4>
								</div>
								<div className="pricing-card_details">
									<h4 className="pricing-card_title">Enteprise Plan</h4>
									<p className="pricing-card_text">Perfect for startups or small businesses looking to set a strong foundation.</p>
									<div className="checklist">
										<ul className="list-wrap">
											<li><i className="fas fa-check" /> Business initial assessment check </li>
											<li><i className="fas fa-check" /> Customized strategic roadmap</li>
											<li><i className="fas fa-check" /> Monthly consultation (4 hours/month)</li>
											<li><i className="fas fa-check" /> Access to basic resources</li>
										</ul>
									</div>
									<div className="tg-button-wrap justify-content-center">
										<Link href="/pricing" className="btn w-100"><span className="btn-text" data-text="Purchase Plan" /></Link>
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
