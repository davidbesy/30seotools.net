import CounterUp from '@/components/elements/CounterUp'

export default function Section5() {
	return (
		<>

			<section className="counter-area-1 pb-120 pt-120 pt-xl-0">
				<div className="container">
					<div className="row gy-30 justify-content-center">
						<div className="col-lg-4 col-md-6">
							<div className="counter-card">
								<h3 className="counter-card_title"><CounterUp>50</CounterUp>+</h3>
								<p className="counter-card_subtitle">Premium SEO Tools</p>
								<p className="counter-card_text">Access to 50+ premium SEO tools including Ahrefs, SEMrush, Moz, and many more...
								</p>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="counter-card">
								<h3 className="counter-card_title"><CounterUp>10000</CounterUp>+</h3>
								<p className="counter-card_subtitle">Active Users</p>
								<p className="counter-card_text">Join thousands of digital marketers, SEO professionals, and agencies using our platform...
								</p>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="counter-card">
								<h3 className="counter-card_title"><CounterUp>90</CounterUp>%</h3>
								<p className="counter-card_subtitle">Cost Savings</p>
								<p className="counter-card_text">Save up to 90% on premium SEO tools compared to individual subscriptions...
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
