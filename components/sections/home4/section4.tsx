import Link from 'next/link'

export default function Section4() {
	return (
		<>

			<section className="team-area-4 pt-120 pb-120 overflow-hidden gray-bg position-relative">
				<div className="team-bg-shape3-1 d-xl-block d-none">
					<img src="/assets/img/bg/team-bg-shape3-1.png" alt="img" />
				</div>
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-xl-6 col-lg-8">
							<div className="section__title text-center mb-50">
								<span className="sub-title text-anim">Team Members</span>
								<h2 className="title text-white text-anim2">Professional Individuals</h2>
							</div>
						</div>
					</div>
					<div className="row gy-40 justify-content-center">
						<div className="col-xl-4 col-md-6">
							<div className="team-card style4">
								<div className="box-img image-anim">
									<Link href="/team-details" className="thumb">
										<img src="/assets/img/team/team-4-1.jpg" alt="img" />
									</Link>
								</div>
								<div className="team-card-details">
									<h4 className="box-title"><Link href="/team-details">James Bennett</Link></h4>
									<span className="box-text">Chief Financial Officer (CFO)</span>
									<div className="social-wrap">
										<Link target="_blank" href="/https://facebook.com/" tabIndex={-1}><i className="fab fa-facebook-f" /></Link>
										<Link target="_blank" href="/https://twitter.com/" tabIndex={-1}><i className="fab fa-twitter" /></Link>
										<Link target="_blank" href="/https://instagram.com/" tabIndex={-1}><i className="fab fa-instagram" /></Link>
										<Link target="_blank" href="/https://behance.com/" tabIndex={-1}><i className="fab fa-behance" /></Link>
										<Link target="_blank" href="/https://youtube.com/" tabIndex={-1}><i className="fab fa-youtube" /></Link>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-md-6">
							<div className="team-card style4">
								<div className="box-img image-anim">
									<Link href="/team-details" className="thumb">
										<img src="/assets/img/team/team-4-2.jpg" alt="img" />
									</Link>
								</div>
								<div className="team-card-details">
									<h4 className="box-title"><Link href="/team-details">Andrew Mitchell</Link></h4>
									<span className="box-text">Financial Planning Consultant</span>
									<div className="social-wrap">
										<Link target="_blank" href="/https://facebook.com/" tabIndex={-1}><i className="fab fa-facebook-f" /></Link>
										<Link target="_blank" href="/https://twitter.com/" tabIndex={-1}><i className="fab fa-twitter" /></Link>
										<Link target="_blank" href="/https://instagram.com/" tabIndex={-1}><i className="fab fa-instagram" /></Link>
										<Link target="_blank" href="/https://behance.com/" tabIndex={-1}><i className="fab fa-behance" /></Link>
										<Link target="_blank" href="/https://youtube.com/" tabIndex={-1}><i className="fab fa-youtube" /></Link>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-md-6">
							<div className="team-card style4">
								<div className="box-img image-anim">
									<Link href="/team-details" className="thumb">
										<img src="/assets/img/team/team-4-3.jpg" alt="img" />
									</Link>
								</div>
								<div className="team-card-details">
									<h4 className="box-title"><Link href="/team-details">William Morgan</Link></h4>
									<span className="box-text">Client Relations Manager</span>
									<div className="social-wrap">
										<Link target="_blank" href="/https://facebook.com/" tabIndex={-1}><i className="fab fa-facebook-f" /></Link>
										<Link target="_blank" href="/https://twitter.com/" tabIndex={-1}><i className="fab fa-twitter" /></Link>
										<Link target="_blank" href="/https://instagram.com/" tabIndex={-1}><i className="fab fa-instagram" /></Link>
										<Link target="_blank" href="/https://behance.com/" tabIndex={-1}><i className="fab fa-behance" /></Link>
										<Link target="_blank" href="/https://youtube.com/" tabIndex={-1}><i className="fab fa-youtube" /></Link>
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
