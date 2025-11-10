import Link from 'next/link'

export default function Section9() {
	return (
		<>
			<section className="about-area-6 pt-120 pb-120">
				<div className="container">
					<div className="row gx-60 gy-60 align-items-center">
						<div className="col-xl-6">
							<div className="about-thumb6-1">
								<div className="img1">
									<img src="/assets/img/others/about6-1.jpg" alt="img" />
								</div>
							</div>
						</div>
						<div className="col-xl-6">
							<div className="section__title mb-25">
								<span className="sub-title text-anim">Make A Business Plan</span>
								<h2 className="title text-anim2">Let’s Discuss About Your
									Business Plan
								</h2>
							</div>
							<p className="mb-35">From building your online presence to leveraging advanced analytics, each chapter is packed with actionable advice.</p>
							<div className="checklist-wrap">
								<ul className="list-wrap">
									<li>
										<span className="icon">
											<i className="fas fa-check-circle" />
										</span>
										Fundamental concepts of digital marketing
									</li>
									<li>
										<span className="icon">
											<i className="fas fa-check-circle" />
										</span>
										Mastering content marketing
									</li>
									<li>
										<span className="icon">
											<i className="fas fa-check-circle" />
										</span>
										Effective email marketing strategies
									</li>
								</ul>
							</div>
							<div className="tg-button-wrap mt-50">
								<Link href="/appointment" className="btn">
									<span className="btn-text" data-text="Book Appointment" />
									<i className="fas fa-arrow-right" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
