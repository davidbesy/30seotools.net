
import CounterUp from '@/components/elements/CounterUp'

export default function Section5() {
	return (
		<>

			<section className="wcu-area-2 pt-120 pb-120 smoke5-bg bg-cover" data-background="assets/img/bg/why-bg2-1.png">
				<div className="container">
					<div className="row gx-80 gy-40 align-items-center flex-row-reverse">
						<div className="col-xl-6">
							<div className="wcu-thumb2-1" data-mask-src="/assets/img/others/why-img-mask2-1.png">
								<img src="/assets/img/others/why2-1.png" alt="img" />
							</div>
						</div>
						<div className="col-xl-6">
							<div className="section__title mb-25">
								<span className="sub-title text-anim">Our Company Growth</span>
								<h2 className="title text-anim2">Our Business Growth is
									Really Incredible
								</h2>
							</div>
							<p className="mb-45">Strategic planning is the foundation of any successful enterprise, enabling organizations to define their long-term goals, assess market dynamics, and create actionable roadmaps to achieve sustainable growth.</p>
							<div className="skill-feature">
								<div className="progress">
									<div className="progress-bar" style={{ width: '73%' }}>
									</div>
									<div className="progress-value"><CounterUp>73</CounterUp>%</div>
								</div>
								<h3 className="skill-feature_title">Business Growth:</h3>
							</div>
							<div className="skill-feature">
								<div className="progress">
									<div className="progress-bar" style={{ width: '65%' }}>
									</div>
									<div className="progress-value"><CounterUp>65</CounterUp>%</div>
								</div>
								<h3 className="skill-feature_title">Skilled Team:</h3>
							</div>
							<div className="skill-feature">
								<div className="progress">
									<div className="progress-bar" style={{ width: '90%' }}>
									</div>
									<div className="progress-value"><CounterUp>90</CounterUp>%</div>
								</div>
								<h3 className="skill-feature_title">Successful Projects:</h3>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
