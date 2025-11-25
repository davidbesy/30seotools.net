import Link from 'next/link'

export default function Section12Pricing() {
	return (
		<>
			<section className="pricing-area-1 pt-120 pb-120 overflow-hidden position-relative">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-xl-8 col-lg-9">
							<div className="section__title text-center mb-50">
								<span className="sub-title text-anim">Pricing Plans</span>
								<h2 className="title text-anim2">Choose the plan that fits you</h2>
							</div>
						</div>
					</div>
					<div className="row gy-30 justify-content-center">
						{/* Lite Plan */}
						<div className="col-xl-3 col-lg-4 col-md-6">
							<div className="pricing-card">
								<div className="pricing-card_thumb">
									<img src="/assets/img/others/pricing-thumb1-1.png" alt="img" />
									<h4 className="pricing-card_price"><span className="currency">$</span>10<span className="duration">/Month</span></h4>
								</div>
								<div className="pricing-card_details">
									<h4 className="pricing-card_title">Lite Plan</h4>
									<div className="checklist">
										<ul className="list-wrap">
											<li><i className="fas fa-check" /> SEMrush</li>
											<li><i className="fas fa-check" /> Canva</li>
											<li><i className="fas fa-check" /> Grammarly</li>
											<li><i className="fas fa-check" /> Woorank</li>
											<li><i className="fas fa-check" /> Spin Rewriter</li>
											<li><i className="fas fa-check" /> Ubersuggest</li>
											<li><i className="fas fa-check" /> +more</li>
										</ul>
									</div>
									<div className="tg-button-wrap justify-content-center mt-30">
										<Link href="/tool-list" className="btn w-100">
											<span className="btn-text" data-text="Full Tool List" />
										</Link>
									</div>
								</div>
							</div>
						</div>

						{/* Small Plan */}
						<div className="col-xl-3 col-lg-4 col-md-6">
							<div className="pricing-card">
								<div className="pricing-card_thumb">
									<img src="/assets/img/others/pricing-thumb1-2.png" alt="img" />
									<h4 className="pricing-card_price"><span className="currency">$</span>15<span className="duration">/Month</span></h4>
								</div>
								<div className="pricing-card_details">
									<h4 className="pricing-card_title">Small Plan</h4>
									<div className="checklist">
										<ul className="list-wrap">
											<li><i className="fas fa-check" /> SEMrush</li>
											<li><i className="fas fa-check" /> Moz Pro</li>
											<li><i className="fas fa-check" /> Majestic</li>
											<li><i className="fas fa-check" /> Ubersuggest</li>
											<li><i className="fas fa-check" /> Spyfu</li>
											<li><i className="fas fa-check" /> Ispionage</li>
											<li><i className="fas fa-check" /> +more</li>
										</ul>
									</div>
									<div className="tg-button-wrap justify-content-center mt-30">
										<Link href="/tool-list" className="btn w-100">
											<span className="btn-text" data-text="Full Tool List" />
										</Link>
									</div>
								</div>
							</div>
						</div>

						{/* Ahref$ Combo */}
						<div className="col-xl-3 col-lg-4 col-md-6">
							<div className="pricing-card active">
								<div className="pricing-card_thumb">
									<div className="pricing-card_tag">Popular</div>
									<img src="/assets/img/others/pricing-thumb1-3.png" alt="img" />
									<h4 className="pricing-card_price"><span className="currency">$</span>25<span className="duration">/Month</span></h4>
								</div>
								<div className="pricing-card_details">
									<h4 className="pricing-card_title">Ahref$ Combo</h4>
									<div className="checklist">
										<ul className="list-wrap">
											<li><i className="fas fa-check" /> AHREF$</li>
											<li><i className="fas fa-check" /> SEMR$H guru</li>
											<li><i className="fas fa-check" /> M0Z PR0</li>
											<li><i className="fas fa-check" /> Majestic</li>
											<li><i className="fas fa-check" /> Kwfinder</li>
											<li><i className="fas fa-check" /> Keywordtool i0</li>
											<li><i className="fas fa-check" /> +more</li>
										</ul>
									</div>
									<div className="tg-button-wrap justify-content-center mt-30">
										<Link href="/tool-list" className="btn w-100">
											<span className="btn-text" data-text="Full Tool List" />
										</Link>
									</div>
								</div>
							</div>
						</div>

						{/* Mega Plan */}
						<div className="col-xl-3 col-lg-4 col-md-6">
							<div className="pricing-card">
								<div className="pricing-card_thumb">
									<img src="/assets/img/others/pricing-thumb1-1.png" alt="img" />
									<h4 className="pricing-card_price"><span className="currency">$</span>50<span className="duration">/Month</span></h4>
								</div>
								<div className="pricing-card_details">
									<h4 className="pricing-card_title">Mega Plan</h4>
									<div className="checklist">
										<ul className="list-wrap">
											<li><i className="fas fa-check" /> Ahrefs</li>
											<li><i className="fas fa-check" /> SEMrush</li>
											<li><i className="fas fa-check" /> Moz Pro</li>
											<li><i className="fas fa-check" /> Ubersuggest</li>
											<li><i className="fas fa-check" /> Majestic</li>
											<li><i className="fas fa-check" /> keywordtool.io</li>
											<li><i className="fas fa-check" /> +more</li>
										</ul>
									</div>
									<div className="tg-button-wrap justify-content-center mt-30">
										<Link href="/tool-list" className="btn w-100">
											<span className="btn-text" data-text="Full Tool List" />
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

