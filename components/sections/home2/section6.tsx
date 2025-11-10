import Link from 'next/link'

export default function Section6() {
	return (
		<>

			<section className="team-area-2 pt-120 pb-120 overflow-hidden">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-xl-6 col-lg-8">
							<div className="section__title text-center mb-50">
								<span className="sub-title text-anim">Team Members</span>
								<h2 className="title text-anim2">Our Dedicated People</h2>
								<p>We love what we do and we do it with passion. We value the experimentation of the message and smart incentives.</p>
							</div>
						</div>
					</div>
					<div className="row gy-40 justify-content-center">
						<div className="col-xl-4 col-md-6">
							<div className="team-card style2">
								<div className="box-img image-anim">
									<Link href="/team-details" className="thumb">
										<img src="/assets/img/team/team-2-1.jpg" alt="img" />
									</Link>
									<div className="team-social">
										<button className="icon-btn"><i className="fas fa-share-alt" /></button>
										<div className="social-wrap">
											<Link target="_blank" href="/https://facebook.com/" tabIndex={-1}><i className="fab fa-facebook-f" /></Link>
											<Link target="_blank" href="/https://youtube.com/" tabIndex={-1}><i className="fab fa-youtube" /></Link>
											<Link target="_blank" href="/https://behance.com/" tabIndex={-1}><i className="fab fa-behance" /></Link>
											<Link target="_blank" href="/https://twitter.com/" tabIndex={-1}><i className="fab fa-twitter" /></Link>
										</div>
									</div>
								</div>
								<div className="team-card-details">
									<h4 className="box-title"><Link href="/team-details">Taylor Smith</Link></h4>
									<span className="box-text">Strategist</span>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-md-6">
							<div className="team-card style2">
								<div className="box-img image-anim">
									<Link href="/team-details" className="thumb">
										<img src="/assets/img/team/team-2-2.jpg" alt="img" />
									</Link>
									<div className="team-social">
										<button className="icon-btn"><i className="fas fa-share-alt" /></button>
										<div className="social-wrap">
											<Link target="_blank" href="/https://facebook.com/" tabIndex={-1}><i className="fab fa-facebook-f" /></Link>
											<Link target="_blank" href="/https://youtube.com/" tabIndex={-1}><i className="fab fa-youtube" /></Link>
											<Link target="_blank" href="/https://behance.com/" tabIndex={-1}><i className="fab fa-behance" /></Link>
											<Link target="_blank" href="/https://twitter.com/" tabIndex={-1}><i className="fab fa-twitter" /></Link>
										</div>
									</div>
								</div>
								<div className="team-card-details">
									<h4 className="box-title"><Link href="/team-details">Christopher Hughes</Link></h4>
									<span className="box-text">Manager</span>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-md-6">
							<div className="team-card style2">
								<div className="box-img image-anim">
									<Link href="/team-details" className="thumb">
										<img src="/assets/img/team/team-2-3.jpg" alt="img" />
									</Link>
									<div className="team-social">
										<button className="icon-btn"><i className="fas fa-share-alt" /></button>
										<div className="social-wrap">
											<Link target="_blank" href="/https://facebook.com/" tabIndex={-1}><i className="fab fa-facebook-f" /></Link>
											<Link target="_blank" href="/https://youtube.com/" tabIndex={-1}><i className="fab fa-youtube" /></Link>
											<Link target="_blank" href="/https://behance.com/" tabIndex={-1}><i className="fab fa-behance" /></Link>
											<Link target="_blank" href="/https://twitter.com/" tabIndex={-1}><i className="fab fa-twitter" /></Link>
										</div>
									</div>
								</div>
								<div className="team-card-details">
									<h4 className="box-title"><Link href="/team-details">Andrew Mitchel</Link></h4>
									<span className="box-text">Consultant</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
