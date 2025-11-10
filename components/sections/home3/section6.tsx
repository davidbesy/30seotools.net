import Link from 'next/link'

export default function Section6() {
	return (
		<>

			<section className="team-area-3 pt-120 pb-120 overflow-hidden gray-bg position-relative">
				<div className="team-bg-shape3-1 d-xl-block d-none">
					<img src="/assets/img/bg/team-bg-shape3-1.png" alt="img" />
				</div>
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-xl-6 col-lg-8">
							<div className="section__title text-center mb-50">
								<span className="sub-title text-anim">Team Members</span>
								<h2 className="title text-white text-anim2">Our Dedicated People</h2>
							</div>
						</div>
					</div>
					<div className="row gy-40 justify-content-center">
						<div className="col-xl-3 col-md-6">
							<div className="team-card style3">
								<div className="box-img image-anim">
									<Link href="/team-details" className="thumb">
										<img src="/assets/img/team/team-3-1.jpg" alt="img" />
									</Link>
									<div className="social-wrap">
										<Link target="_blank" href="/https://facebook.com/" tabIndex={-1}><i className="fab fa-facebook-f" /></Link>
										<Link target="_blank" href="/https://twitter.com/" tabIndex={-1}><i className="fab fa-twitter" /></Link>
										<Link target="_blank" href="/https://instagram.com/" tabIndex={-1}><i className="fab fa-instagram" /></Link>
										<Link target="_blank" href="/https://behance.com/" tabIndex={-1}><i className="fab fa-behance" /></Link>
										<Link target="_blank" href="/https://youtube.com/" tabIndex={-1}><i className="fab fa-youtube" /></Link>
									</div>
								</div>
								<div className="team-card-details">
									<h4 className="box-title"><Link href="/team-details">Daniel Matthew</Link></h4>
									<span className="box-text">Cheif Expert</span>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-md-6">
							<div className="team-card style3">
								<div className="box-img image-anim">
									<Link href="/team-details" className="thumb">
										<img src="/assets/img/team/team-3-2.jpg" alt="img" />
									</Link>
									<div className="social-wrap">
										<Link target="_blank" href="/https://facebook.com/" tabIndex={-1}><i className="fab fa-facebook-f" /></Link>
										<Link target="_blank" href="/https://twitter.com/" tabIndex={-1}><i className="fab fa-twitter" /></Link>
										<Link target="_blank" href="/https://instagram.com/" tabIndex={-1}><i className="fab fa-instagram" /></Link>
										<Link target="_blank" href="/https://behance.com/" tabIndex={-1}><i className="fab fa-behance" /></Link>
										<Link target="_blank" href="/https://youtube.com/" tabIndex={-1}><i className="fab fa-youtube" /></Link>
									</div>
								</div>
								<div className="team-card-details">
									<h4 className="box-title"><Link href="/team-details">Grayson Gabriel</Link></h4>
									<span className="box-text">Cheif Expert</span>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-md-6">
							<div className="team-card style3">
								<div className="box-img image-anim">
									<Link href="/team-details" className="thumb">
										<img src="/assets/img/team/team-3-3.jpg" alt="img" />
									</Link>
									<div className="social-wrap">
										<Link target="_blank" href="/https://facebook.com/" tabIndex={-1}><i className="fab fa-facebook-f" /></Link>
										<Link target="_blank" href="/https://twitter.com/" tabIndex={-1}><i className="fab fa-twitter" /></Link>
										<Link target="_blank" href="/https://instagram.com/" tabIndex={-1}><i className="fab fa-instagram" /></Link>
										<Link target="_blank" href="/https://behance.com/" tabIndex={-1}><i className="fab fa-behance" /></Link>
										<Link target="_blank" href="/https://youtube.com/" tabIndex={-1}><i className="fab fa-youtube" /></Link>
									</div>
								</div>
								<div className="team-card-details">
									<h4 className="box-title"><Link href="/team-details">Alexander Mason</Link></h4>
									<span className="box-text">Cheif Expert</span>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-md-6">
							<div className="team-card style3">
								<div className="box-img image-anim">
									<Link href="/team-details" className="thumb">
										<img src="/assets/img/team/team-3-4.jpg" alt="img" />
									</Link>
									<div className="social-wrap">
										<Link target="_blank" href="/https://facebook.com/" tabIndex={-1}><i className="fab fa-facebook-f" /></Link>
										<Link target="_blank" href="/https://twitter.com/" tabIndex={-1}><i className="fab fa-twitter" /></Link>
										<Link target="_blank" href="/https://instagram.com/" tabIndex={-1}><i className="fab fa-instagram" /></Link>
										<Link target="_blank" href="/https://behance.com/" tabIndex={-1}><i className="fab fa-behance" /></Link>
										<Link target="_blank" href="/https://youtube.com/" tabIndex={-1}><i className="fab fa-youtube" /></Link>
									</div>
								</div>
								<div className="team-card-details">
									<h4 className="box-title"><Link href="/team-details">Maverick Cameron</Link></h4>
									<span className="box-text">Cheif Expert</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
