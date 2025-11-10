import CounterUp from '@/components/elements/CounterUp'

export default function Section10() {
	return (
		<>
			<section className="counter-area-4 overflow-hidden">
				<div className="counter-wrap4 gray-bg pt-120 pb-120 bg-cover" data-background="assets/img/bg/counter-bg-shape4-1.png">
					<div className="container">
						<div className="row">
							<div className="col-xl-7">
								<div className="section__title mb-50">
									<span className="sub-title text-anim">Business Growth</span>
									<h2 className="title text-white text-anim2">Make Sure Your Objectives
										Improves Profit Drivers
									</h2>
								</div>
							</div>
						</div>
						<div className="counter-card4-wrap">
							<div className="counter-card4">
								<h3 className="counter-card_title"><CounterUp>35</CounterUp>%</h3>
								<div className="box-content">
									<p className="counter-card_text">Working Completed Projects</p>
								</div>
							</div>
							<div className="divider" />
							<div className="counter-card4">
								<h3 className="counter-card_title"><CounterUp>6</CounterUp>M</h3>
								<div className="box-content">
									<p className="counter-card_text">Happy Customers
										Who Trusted Us</p>
								</div>
							</div>
							<div className="divider" />
							<div className="counter-card4">
								<h3 className="counter-card_title"><CounterUp>86</CounterUp>+</h3>
								<div className="box-content">
									<p className="counter-card_text">Awards Winning &amp;
										Partners Woorldwide</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
