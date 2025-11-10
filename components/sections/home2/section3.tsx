import CounterUp from '@/components/elements/CounterUp'

export default function Section3() {
	return (
		<>

			<section className="counter-area-2">
				<div className="container">
					<div className="counter-wrap2">
						<div className="counter-bg-shape2-1" />
						<div className="counter-bg-shape2-2" />
						<div className="row gy-60 justify-content-xl-between justify-content-center">
							<div className="col-xl-auto col-lg-6">
								<div className="counter-card2">
									<div className="box-icon">
										<img src="/assets/img/icon/counter-icon2-1.svg" alt="img" />
									</div>
									<div className="box-content">
										<h3 className="counter-card_title"><CounterUp>2.6</CounterUp>x</h3>
										<p className="counter-card_text">AVERAGE GROWTH</p>
									</div>
								</div>
							</div>
							<div className="col-xl-auto col-lg-6">
								<div className="counter-card2">
									<div className="box-icon">
										<img src="/assets/img/icon/counter-icon2-2.svg" alt="img" />
									</div>
									<div className="box-content">
										<h3 className="counter-card_title"><CounterUp>88.6</CounterUp>%</h3>
										<p className="counter-card_text">CUSTOMER SATISFACTION</p>
									</div>
								</div>
							</div>
							<div className="col-xl-auto col-lg-6">
								<div className="counter-card2">
									<div className="box-icon">
										<img src="/assets/img/icon/counter-icon2-3.svg" alt="img" />
									</div>
									<div className="box-content">
										<h3 className="counter-card_title"><CounterUp>3</CounterUp>M+</h3>
										<p className="counter-card_text">HAPPY CUSTOMERS</p>
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
