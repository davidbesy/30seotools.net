import Link from 'next/link'

export default function Section3() {
	return (
		<>
			<section className="about-area-5 pb-120 overflow-hidden">
				<div className="container">
					<div className="about-wrap5">
						<div className="row gx-80 gy-60 align-items-center">
							<div className="col-xl-6">
								<div className="section__title">
									<span className="sub-title text-white text-anim">About Amazing Company</span>
									<h2 className="title text-white text-anim2">Trusted Consultancy
										Company
									</h2>
									<p className="sec-text text-white">We focus on understanding our clients’ unique challenges and goals, delivering tailored consulting services that enhance operational efficiency, optimize financial performance,</p>
									<div className="tg-button-wrap mt-40">
										<Link href="/appointment" className="btn btn-three">
											<span className="btn-text" data-text="Get A Quote" />
											<i className="fas fa-arrow-right" />
										</Link>
									</div>
								</div>
							</div>
							<div className="col-xl-6">
								<div className="checklist">
									<ul className="list-wrap">
										<li><i className="fas fa-check" /> Expert Insights Across Industries </li>
										<li><i className="fas fa-check" /> Tailored Solutions for Every Business</li>
										<li><i className="fas fa-check" /> Data-Driven Decision Making</li>
										<li><i className="fas fa-check" /> Comprehensive Service Offerings</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
