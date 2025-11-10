import Link from 'next/link'

export default function Section11() {
	return (
		<>
			<section className="team-area-5 pt-120 pb-120 overflow-hidden">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-xl-8">
							<div className="section__title text-center mb-50">
								<span className="sub-title text-anim">Expert People</span>
								<h2 className="title text-anim2">Our Dedicated Team Members</h2>
							</div>
						</div>
					</div>
					<div className="row gy-30 justify-content-center">
						<div className="col-xl-3 col-md-6">
							<div className="team-card style5">
								<div className="box-img image-anim">
									<Link href="/team-details" className="thumb">
										<img src="/assets/img/team/team-5-1.jpg" alt="img" />
									</Link>
									<div className="social-wrap">
										<Link target="_blank" href="/https://facebook.com/" tabIndex={-1}><i className="fab fa-facebook-f" /></Link>
										<Link target="_blank" href="/https://twitter.com/" tabIndex={-1}><i className="fab fa-twitter" /></Link>
										<Link target="_blank" href="/https://instagram.com/" tabIndex={-1}><i className="fab fa-instagram" /></Link>
										<Link target="_blank" href="/https://behance.com/" tabIndex={-1}><i className="fab fa-behance" /></Link>
									</div>
								</div>
								<div className="team-card-details">
									<h4 className="box-title"><Link href="/team-details">Honey Deep</Link></h4>
									<span className="box-text">Chief Officer</span>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-md-6">
							<div className="team-card style5">
								<div className="box-img image-anim">
									<Link href="/team-details" className="thumb">
										<img src="/assets/img/team/team-5-2.jpg" alt="img" />
									</Link>
									<div className="social-wrap">
										<Link target="_blank" href="/https://facebook.com/" tabIndex={-1}><i className="fab fa-facebook-f" /></Link>
										<Link target="_blank" href="/https://twitter.com/" tabIndex={-1}><i className="fab fa-twitter" /></Link>
										<Link target="_blank" href="/https://instagram.com/" tabIndex={-1}><i className="fab fa-instagram" /></Link>
										<Link target="_blank" href="/https://behance.com/" tabIndex={-1}><i className="fab fa-behance" /></Link>
									</div>
								</div>
								<div className="team-card-details">
									<h4 className="box-title"><Link href="/team-details">Jonathan Parker</Link></h4>
									<span className="box-text">Manager</span>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-md-6">
							<div className="team-card style5">
								<div className="box-img image-anim">
									<Link href="/team-details" className="thumb">
										<img src="/assets/img/team/team-5-3.jpg" alt="img" />
									</Link>
									<div className="social-wrap">
										<Link target="_blank" href="/https://facebook.com/" tabIndex={-1}><i className="fab fa-facebook-f" /></Link>
										<Link target="_blank" href="/https://twitter.com/" tabIndex={-1}><i className="fab fa-twitter" /></Link>
										<Link target="_blank" href="/https://instagram.com/" tabIndex={-1}><i className="fab fa-instagram" /></Link>
										<Link target="_blank" href="/https://behance.com/" tabIndex={-1}><i className="fab fa-behance" /></Link>
									</div>
								</div>
								<div className="team-card-details">
									<h4 className="box-title"><Link href="/team-details">Samuel Taylor</Link></h4>
									<span className="box-text">Risk Analyst</span>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-md-6">
							<div className="team-card style5">
								<div className="box-img image-anim">
									<Link href="/team-details" className="thumb">
										<img src="/assets/img/team/team-5-4.jpg" alt="img" />
									</Link>
									<div className="social-wrap">
										<Link target="_blank" href="/https://facebook.com/" tabIndex={-1}><i className="fab fa-facebook-f" /></Link>
										<Link target="_blank" href="/https://twitter.com/" tabIndex={-1}><i className="fab fa-twitter" /></Link>
										<Link target="_blank" href="/https://instagram.com/" tabIndex={-1}><i className="fab fa-instagram" /></Link>
										<Link target="_blank" href="/https://behance.com/" tabIndex={-1}><i className="fab fa-behance" /></Link>
									</div>
								</div>
								<div className="team-card-details">
									<h4 className="box-title"><Link href="/team-details">Thomas Collins</Link></h4>
									<span className="box-text">Business Lead</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
