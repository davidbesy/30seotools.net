import CounterUp from '@/components/elements/CounterUp'

export default function Section2() {
	return (
		<>

			<section className="counter-area-3 pt-120 pb-120 overflow-hidden">
				<div className="container">
					<div className="row gy-30">
						<div className="col-xl-3 col-md-6">
							<div className="counter-card3">
								<div className="box-content">
									<h3 className="counter-card_title"><CounterUp>20</CounterUp>K</h3>
								</div>
								<div className="box-thumb">
									<img src="/assets/img/others/counter3-1.jpg" alt="img" />
									<p className="counter-card_text">Session Completed</p>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-md-6">
							<div className="counter-card3">
								<div className="box-content">
									<h3 className="counter-card_title"><CounterUp>35</CounterUp>+</h3>
								</div>
								<div className="box-thumb">
									<img src="/assets/img/others/counter3-2.jpg" alt="img" />
									<p className="counter-card_text">COUNTRY OPERATION</p>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-md-6">
							<div className="counter-card3">
								<div className="box-content">
									<h3 className="counter-card_title"><CounterUp>20</CounterUp>K</h3>
								</div>
								<div className="box-thumb">
									<img src="/assets/img/others/counter3-3.jpg" alt="img" />
									<p className="counter-card_text">EXPERT CONSULTANTS</p>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-md-6">
							<div className="counter-card3">
								<div className="box-content">
									<h3 className="counter-card_title"><CounterUp>100</CounterUp>%</h3>
								</div>
								<div className="box-thumb">
									<img src="/assets/img/others/counter3-4.jpg" alt="img" />
									<p className="counter-card_text">COUNTRY OPERATION</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
