import Link from 'next/link'

export default function Footer5() {
	return (
		<>
			<footer>
				<div className="footer__area footer__area-five">
					<div className="footer-wrap5 gray-bg">
						<div className="container">
							<div className="footer__middle">
								<div className="row justify-content-between">
									<div className="col-xl-3 col-lg-4 col-md-6">
										<div className="footer__widget footer__about">
											<h4 className="footer__widget-title">About Company</h4>
											<p className="footer__content mb-35">
												Venenatis egestas fames cum erat
												duis cubilia sagittis vivamus ultrices
												magnis proin inceptos
											</p>
											<div className="social-links style3">
												<ul className="list-wrap">
													<li><Link href="/https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f" /></Link></li>
													<li><Link href="/https://twitter.com" target="_blank"><i className="fab fa-twitter" /></Link></li>
													<li><Link href="/https://www.linkedin.com/" target="_blank"><i className="fab fa-linkedin-in" /></Link></li>
													<li><Link href="/https://www.instagram.com/" target="_blank"><i className="fab fa-instagram" /></Link></li>
													<li><Link href="/https://www.skype.com/" target="_blank"><i className="fab fa-skype" /></Link></li>
												</ul>
											</div>
										</div>
									</div>
									<div className="col-xl-auto col-md-6">
										<div className="footer__widget footer__links">
											<h4 className="footer__widget-title">Quick Links</h4>
											<ul className="list-wrap">
												<li>
													<Link href="/about">
														<svg width={17} height={14} viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M9 1L15 7M15 7L9 13M15 7H0" stroke="currentColor" strokeWidth="1.5" />
														</svg>
														About Us
													</Link>
												</li>
												<li>
													<Link href="/project">
														<svg width={17} height={14} viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M9 1L15 7M15 7L9 13M15 7H0" stroke="currentColor" strokeWidth="1.5" />
														</svg>
														Portfolio
													</Link>
												</li>
												<li>
													<Link href="/appointment">
														<svg width={17} height={14} viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M9 1L15 7M15 7L9 13M15 7H0" stroke="currentColor" strokeWidth="1.5" />
														</svg>
														Appointment
													</Link>
												</li>
												<li>
													<Link href="/blog">
														<svg width={17} height={14} viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M9 1L15 7M15 7L9 13M15 7H0" stroke="currentColor" strokeWidth="1.5" />
														</svg>
														Blog
													</Link>
												</li>
												<li>
													<Link href="/contact">
														<svg width={17} height={14} viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M9 1L15 7M15 7L9 13M15 7H0" stroke="currentColor" strokeWidth="1.5" />
														</svg>
														Contact Us
													</Link>
												</li>
											</ul>
										</div>
									</div>
									<div className="col-xl-auto col-md-6">
										<div className="footer__widget footer__links">
											<h4 className="footer__widget-title">Services</h4>
											<ul className="list-wrap">
												<li>
													<Link href="#">
														<svg width={17} height={14} viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M9 1L15 7M15 7L9 13M15 7H0" stroke="currentColor" strokeWidth="1.5" />
														</svg>
														Cyber Security
													</Link>
												</li>
												<li>
													<Link href="#">
														<svg width={17} height={14} viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M9 1L15 7M15 7L9 13M15 7H0" stroke="currentColor" strokeWidth="1.5" />
														</svg>
														IT Management
													</Link>
												</li>
												<li>
													<Link href="#">
														<svg width={17} height={14} viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M9 1L15 7M15 7L9 13M15 7H0" stroke="currentColor" strokeWidth="1.5" />
														</svg>
														QA &amp; Testing
													</Link>
												</li>
												<li>
													<Link href="#">
														<svg width={17} height={14} viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M9 1L15 7M15 7L9 13M15 7H0" stroke="currentColor" strokeWidth="1.5" />
														</svg>
														Infrastructure Plan
													</Link>
												</li>
												<li>
													<Link href="#">
														<svg width={17} height={14} viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M9 1L15 7M15 7L9 13M15 7H0" stroke="currentColor" strokeWidth="1.5" />
														</svg>
														IT Consultant
													</Link>
												</li>
											</ul>
										</div>
									</div>
									<div className="col-xl-4 col-md-6">
										<div className="footer__widget footer__newsletter">
											<h4 className="footer__widget-title">Get In Touch</h4>
											<p className="footer__content mb-35">
												Curabitur aliquet quam posuere blandit ellentesque insdorci ipsum id orci porta dapibus...
											</p>
											<form className="footer__newsletter-form" action="#">
												<div className="form-icon">
													<i className="fas fa-envelope" />
												</div>
												<input id="email" type="email" placeholder="Enter Your Email" />
												<button className="btn btn-five" type="submit">Subscribe</button>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="footer__bottom text-center">
							<div className="container">
								<div className="footer__copyright">
									© 2024 Copyrights by <Link href="#">Valom</Link>. All Rights Reserved.
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}
