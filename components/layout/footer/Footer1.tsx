import Link from 'next/link'

export default function Footer1() {
	return (
		<>
			<footer>
				<div className="footer__area footer__area-one  black1-bg">
					<div className="footer__bg-shape1-1"><img src="/assets/img/bg/footer-bg-shape1-1.png" alt="img" /></div>
					<div className="container">
						<div className="footer__top fix">
							<div className="row gy-40 justify-content-between align-items-center">
								<div className="col-xl-5 col-lg-6">
									<h3 className="footer__top-title">
										Get Premium SEO Tools at Group Buy Prices - Save Up to 90%
									</h3>
								</div>
								<div className="col-auto">
									<Link href="https://seotoolsgroupbuy.us/single-tools-list/" className="btn btn-three" target="_blank" rel="noopener noreferrer">
										<span className="btn-text" data-text="View All Tools" />
									</Link>
								</div>
							</div>
						</div>
						<div className="footer__middle">
							<div className="row justify-content-between">
								<div className="col-xl-3 col-lg-4 col-md-6">
									<div className="footer__widget footer__about">
										<div className="footer__logo">
											<Link href="/"><span style={{fontSize: '20px', fontWeight: '700', color: '#ffffff'}}>SEO GROUP BUY TOOLS</span></Link>
										</div>
										<p className="footer__content mb-35">
											Felis consquat magnis fames sagittis ultrices plasodales porttitor quisque ultrice
											tempor turpis.
										</p>
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
									<div className="footer__widget footer__contact">
										<h4 className="footer__widget-title">Office Inforamtion</h4>
										<div className="footer__info-item">
											<div className="footer__info-icon">
												<i className="fas fa-phone-alt" />
											</div>
											<div className="footer__info-content">
												<h4 className="title">Phone</h4>
												<Link href="/tel:+15205636362">+1 (520) 563‑6362</Link>
											</div>
										</div>
										<div className="footer__info-item">
											<div className="footer__info-icon">
												<i className="fas fa-envelope" />
											</div>
											<div className="footer__info-content">
												<h4 className="title">Email</h4>
												<Link href="/mailto:admin@groupbuyseotool.us">admin@groupbuyseotool.us</Link>
											</div>
										</div>
										<div className="footer__info-item">
											<div className="footer__info-icon">
												<i className="fas fa-map-marker-alt" />
											</div>
											<div className="footer__info-content">
												<h4 className="title">Support</h4>
												<p>seogroupbuy.support</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="footer__bottom text-center">
						<div className="container">
							<div className="footer__copyright">
								<Link href="#">Valom</Link> - Copyright 2025. All rights reserved.
							</div>
						</div>
					</div>
				</div>
			</footer>

		</>
	)
}
