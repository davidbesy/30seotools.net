import Link from 'next/link'

export default function Section2() {
	return (
		<>

			<section className="about-area-2 pt-120 pb-120 overflow-hidden">
				<div className="container">
					<div className="about-wrap2">
						<div className="row gx-60 gy-5 align-items-center">
							<div className="col-xl-6">
								<div className="about-thumb2-1">
									<div className="img1">
										<div className="thumb image-anim">
											<img src="/assets/img/others/about2-1.jpg" alt="img" />
										</div>
									</div>
									<div className="img2">
										<div className="thumb image-anim">
											<img src="/assets/img/others/about2-2.jpg" alt="img" />
										</div>
									</div>
									<div className="about-bg-shape2-1">
										<div className="shape1" />
										<div className="shape2" />
									</div>
								</div>
							</div>
							<div className="col-xl-6">
								<div className="section__title">
									<span className="sub-title text-anim">About Amazing Company</span>
									<h2 className="title text-anim2">We’re Trusted  Professional
										Consultancy Company
									</h2>
								</div>
								<p className="mt-30 mb-40">The business consultancy company stands as a stalwart beacon of guidance and innovation, offering a multifaceted array of services tailored to propel enterprises toward their zenith. At its core, this entity operates as a bastion of strategic insight, employing a cadre of seasoned professionals.</p>
								<div className="checklist-wrap">
									<ul className="list-wrap">
										<li>
											<span className="icon">
												<i className="fas fa-check-circle" />
											</span>
											Remain flexible and adaptive to swiftly respond to changing market dynamics and client needs.
										</li>
										<li>
											<span className="icon">
												<i className="fas fa-check-circle" />
											</span>
											Empower clients through knowledge transfer, skill-building, and fostering a culture of self-sufficiency.
										</li>
										<li>
											<span className="icon">
												<i className="fas fa-check-circle" />
											</span>
											Facilitate a culture of ongoing learning and refinement to ensure sustained success and growth.
										</li>
									</ul>
								</div>
								<div className="cta-link">Call to ask any question <Link href="/tel:52537561523">+525-3756-1523</Link></div>
								<div className="tg-button-wrap mt-30">
									<Link href="/appointment" className="btn">
										<span className="btn-text" data-text="Make An Appointment" />
									</Link>
									<Link href="/service" className="btn btn-six">
										<span className="btn-text" data-text="View Our Services" />
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
