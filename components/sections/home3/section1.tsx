import Link from 'next/link'

export default function Section1() {
	return (
		<>

			<section className="hero-wrapper hero-3 overflow-hidden bg-cover" data-background="assets/img/hero/hero-bg3-1.png">
				<div className="container">
					<div className="row gy-5 align-items-center">
						<div className="col-lg-6">
							<div className="hero-style3">
								<h1 className="hero-title"><span>An Exclusive</span> Learning Journey
									For Business</h1>
								<div className="hero-text text-white">Discover flexible benefits that fit your life at home, and take you all over the globe. Paid Plan Terms apply.</div>
								<div className="tg-button-wrap mt-40">
									<Link href="/appointment" className="btn btn-three">
										<span className="btn-text" data-text="Make An Appointment" />
									</Link>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="hero-thumb3">
								<div className="img1">
									<img src="/assets/img/hero/hero-3-1.png" alt="img" />
								</div>
								<div className="img2">
									<img src="/assets/img/hero/hero-3-2.png" alt="img" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
