import CounterUp from '@/components/elements/CounterUp'

export default function Section5() {
	return (
		<>

			<section className="counter-area-1 pb-120 pt-120 pt-xl-0">
				<div className="container">
					<div className="row gy-30 justify-content-center">
						<div className="col-lg-4 col-md-6">
							<div className="counter-card">
								<h3 className="counter-card_title"><CounterUp>35</CounterUp></h3>
								<p className="counter-card_subtitle">Years Of Experience</p>
								<p className="counter-card_text">Central to the consultancy's modus operandi is a commitment...
								</p>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="counter-card">
								<h3 className="counter-card_title"><CounterUp>500</CounterUp>+</h3>
								<p className="counter-card_subtitle">Official Project Completed</p>
								<p className="counter-card_text">Central to the consultancy's modus operandi is a commitment...
								</p>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="counter-card">
								<h3 className="counter-card_title"><CounterUp>963</CounterUp>+</h3>
								<p className="counter-card_subtitle">In-House Team Members</p>
								<p className="counter-card_text">Central to the consultancy's modus operandi is a commitment...
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
