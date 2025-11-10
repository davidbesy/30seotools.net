import Link from 'next/link'

export default function Section1() {
	return (
		<>
			<section className="hero-wrapper hero-5">
				<div className="hero-bg-shape5-1" />
				<div className="hero-bg-shape5-2 spin" />
				<div className="hero-bg-shape5-3 jump" />
				<div className="container">
					<div className="row">
						<div className="col-lg-6 align-self-center">
							<div className="hero-style5">
								<div className="sub-title text-anim2">Welcome To Valom Business Solution</div>
								<h1 className="hero-title text-white text-anim">
									Need A Custom
									Plan? Ask About
									Enterprise
								</h1>
								<p className="hero-text">We specialize in providing comprehensive solutions to help businesses tackle their most pressing issues and unlock new opportunities for growth.</p>
								<div className="tg-button-wrap mt-40">
									<Link href="/contact" className="btn btn-three">
										<span className="btn-text" data-text="Contact With Us" />
										<i className="fas fa-arrow-right" />
									</Link>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="hero-thumb5-wrap">
								<div className="hero-thumb5">
									<div className="thumb" data-mask-src="/assets/img/hero/hero-5-1-mask.png">
										<img src="/assets/img/hero/hero-5-1.png" alt="img" />
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
