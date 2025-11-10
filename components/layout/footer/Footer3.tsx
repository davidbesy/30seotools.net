import Link from 'next/link'

export default function Footer3() {
	return (
		<>
			<footer>
				<div className="footer__area footer__area-one footer__area-three  black1-bg">
					<div className="footer__top-two">
						<div className="container">
							<div className="footer-contact-wrap">
								<div className="footer-contact">
									<div className="footer-contact_icon">
										<svg width={27} height={37} viewBox="0 0 27 37" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M13.5 0.5C5.97656 0.5 0 6.54688 0 14C0 19.4844 1.82812 21.0312 12.0938 35.7969C12.4453 36.2891 12.9375 36.5 13.5 36.5C13.9922 36.5 14.4844 36.2891 14.8359 35.7969C25.1016 20.9609 27 19.4844 27 14C27 6.54688 20.9531 0.5 13.5 0.5ZM13.5 33.8281C3.58594 19.625 2.25 18.5 2.25 14C2.25 7.8125 7.24219 2.75 13.5 2.75C19.6875 2.75 24.75 7.8125 24.75 14C24.75 18.5 23.3438 19.5547 13.5 33.8281ZM13.5 8.375C10.3359 8.375 7.875 10.8359 7.875 14C7.875 17.0938 10.3359 19.625 13.5 19.625C16.5938 19.625 19.125 17.0938 19.125 14C19.125 10.8359 16.5938 8.375 13.5 8.375ZM13.5 17.375C11.6016 17.375 10.125 15.8281 10.125 14C10.125 12.1016 11.6016 10.625 13.5 10.625C15.3281 10.625 16.875 12.1016 16.875 14C16.875 15.8281 15.3281 17.375 13.5 17.375Z" fill="currentColor" />
										</svg>
									</div>
									<div className="media-body">
										<p className="footer-contact_text">Location</p>
										<p className="footer-contact_link">259 Hilton Street, MK 256
											North, United State</p>
									</div>
								</div>
								<div className="divider" />
								<div className="footer-contact">
									<div className="footer-contact_icon">
										<svg width={36} height={37} viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M18 0.5C8.01562 0.5 0 8.58594 0 18.5C0 28.4844 8.01562 36.5 18 36.5C27.9141 36.5 36 28.4844 36 18.5C36 8.58594 27.9141 0.5 18 0.5ZM18 34.25C9.28125 34.25 2.25 27.2188 2.25 18.5C2.25 9.85156 9.28125 2.75 18 2.75C26.6484 2.75 33.75 9.85156 33.75 18.5C33.75 27.2188 26.6484 34.25 18 34.25ZM24.8906 21.2422L19.125 17.8672V8.375C19.125 7.8125 18.5625 7.25 18 7.25C17.3672 7.25 16.875 7.8125 16.875 8.375V18.5C16.875 18.9219 17.0859 19.2734 17.4375 19.4844L23.7656 23.1406C23.9062 23.2812 24.1172 23.2812 24.3281 23.2812C24.6797 23.2812 25.0312 23.1406 25.2422 22.7188C25.5938 22.2266 25.3828 21.5234 24.8906 21.2422Z" fill="currentColor" />
										</svg>
									</div>
									<div className="media-body">
										<p className="footer-contact_text">Working Hours</p>
										<p className="footer-contact_link">Weekdays 8am - 22pm</p>
										<p className="footer-contact_link">Weekend 10am - 12pm</p>
									</div>
								</div>
								<div className="divider" />
								<div className="footer-contact">
									<div className="footer-contact_icon icon-btn">
										<svg width={52} height={52} viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M18.3974 28.3423C19.3421 27.5965 19.6404 26.3038 19.1432 25.21L16.8064 19.6913C16.2595 18.4483 14.9668 17.8517 13.7239 18.1003L8.55316 19.2935C7.35992 19.5918 6.51471 20.6359 6.51471 21.9286C6.46499 28.4417 9.05035 34.5074 13.6244 39.0815C18.1985 43.6556 24.2642 46.2409 30.7773 46.1912C31.5728 46.2906 32.2191 45.9426 32.7163 45.4454C33.0644 45.0974 33.3627 44.6997 33.4621 44.2025L34.6553 39.0318C34.9039 37.7888 34.2576 36.4464 33.0644 35.9492L27.5456 33.6124C26.4518 33.1153 25.1591 33.4136 24.4133 34.3582L22.7726 36.3967C20.0878 34.9051 17.8505 32.6678 16.359 29.983L18.3974 28.3423ZM22.524 38.8329C23.0212 39.0318 23.6179 38.9323 23.9162 38.5346L26.1535 35.8001C26.2032 35.6509 26.5015 35.5515 26.7004 35.6509L32.1694 38.0374C32.3683 38.1368 32.4677 38.3357 32.4677 38.5346L31.2248 43.6556C31.2248 43.8544 31.0756 44.0036 30.7773 44.0036C24.9105 44.0036 19.3421 41.7166 15.1657 37.5402C10.9894 33.3639 8.6526 27.8451 8.6526 21.9783C8.6526 21.7795 8.70232 21.7297 8.80175 21.6303C8.85147 21.5806 8.90119 21.5309 9.00063 21.5309L14.1216 20.2879C14.3205 20.2879 14.5691 20.3376 14.6188 20.5862L17.1047 26.0552C17.2042 26.2541 17.1047 26.453 17.0053 26.5524C16.9556 26.6021 16.9556 26.6021 16.9556 26.6021L14.2211 28.8395C13.8233 29.2372 13.7239 29.7344 13.9228 30.2316C15.7623 33.9605 18.7952 36.9933 22.524 38.8329ZM22.6235 8.20632C21.9771 8.25604 21.5794 8.85266 21.6788 9.44928C21.7286 10.0956 22.3252 10.4934 22.9218 10.3939C28.3411 9.64816 33.661 11.3883 37.4893 15.2166C41.3673 19.0947 43.1075 24.4145 42.3617 29.8338C42.2623 30.4305 42.66 31.0271 43.3064 31.0768C43.6544 31.1265 44.0024 30.9774 44.251 30.7288C44.4002 30.5796 44.4996 30.3807 44.5493 30.1322C45.4442 24.0665 43.4555 18.0009 39.0803 13.6256C34.7548 9.30013 28.6891 7.31139 22.6235 8.20632ZM22.3749 14.7194C21.7286 14.8686 21.3308 15.4652 21.4302 16.0618C21.5794 16.7082 22.176 17.1059 22.8224 16.9568C26.4021 16.2607 30.131 17.4042 32.7163 19.9896C35.3514 22.6247 36.4949 26.3536 35.7989 29.9333C35.6497 30.5796 36.0475 31.1762 36.6938 31.3254C37.0915 31.3254 37.4396 31.1762 37.6882 30.9277C37.8373 30.7785 37.9865 30.6293 38.0362 30.3807C38.8317 26.0055 37.4396 21.5309 34.3073 18.3986C31.2248 15.3161 26.7501 13.9239 22.3749 14.7194ZM23.2698 21.68C22.6732 21.8789 22.3252 22.5252 22.524 23.1219C22.7229 23.7185 23.3693 24.0665 23.9659 23.8676C25.358 23.3704 26.8993 23.7185 27.9434 24.7626C29.0372 25.8564 29.3852 27.3976 28.888 28.7898C28.6891 29.3864 29.0372 30.0327 29.6338 30.2316C30.0315 30.331 30.479 30.1819 30.7276 29.9333C30.8767 29.7841 30.9762 29.6847 31.0756 29.4858C31.7717 27.2982 31.1751 24.9117 29.4846 23.2213C27.8439 21.5806 25.4574 20.984 23.2698 21.68Z" fill="currentColor" />
										</svg>
									</div>
									<div className="media-body">
										<p className="footer-contact_text">Contact Us</p>
										<Link className="footer-contact_link" href="/mailto:info@valom.com">info@valom.com</Link>
										<Link className="footer-contact_link" href="/tel:2597462153">(+259) 746 2153</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="container">
						<div className="footer__middle">
							<div className="row justify-content-between">
								<div className="col-xl-3 col-lg-4 col-md-6">
									<div className="footer__widget footer__about">
										<h4 className="footer__widget-title">About Us</h4>
										<p className="footer__content mb-30">
											Intrinsicly evisculate emerging cutting edge scenarios redefine future-proof e-markets demand line
										</p>
										<div className="social-links style3">
											<ul className="list-wrap">
												<li><Link href="/https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f" /></Link></li>
												<li><Link href="/https://twitter.com" target="_blank"><i className="fab fa-twitter" /></Link></li>
												<li><Link href="/https://www.instagram.com/" target="_blank"><i className="fab fa-instagram" /></Link></li>
												<li><Link href="/https://www.behance.com/" target="_blank"><i className="fab fa-behance" /></Link></li>
												<li><Link href="/https://www.youtube.com/" target="_blank"><i className="fab fa-youtube" /></Link></li>
											</ul>
										</div>
									</div>
								</div>
								<div className="col-xl-auto col-md-6">
									<div className="footer__widget footer__links">
										<h4 className="footer__widget-title">Links</h4>
										<ul className="list-wrap">
											<li>
												<Link href="/about">
													About Us
												</Link>
											</li>
											<li>
												<Link href="/about">
													Our Mission
												</Link>
											</li>
											<li>
												<Link href="/team">
													Meet The Teams
												</Link>
											</li>
											<li>
												<Link href="/project">
													Our Projects
												</Link>
											</li>
											<li>
												<Link href="/contact">
													Contact Us
												</Link>
											</li>
										</ul>
									</div>
								</div>
								<div className="col-xl-auto col-md-6">
									<div className="footer__widget footer__links">
										<h4 className="footer__widget-title">Explore</h4>
										<ul className="list-wrap">
											<li>
												<Link href="/about">
													What we Offer
												</Link>
											</li>
											<li>
												<Link href="/about">
													Our Story
												</Link>
											</li>
											<li>
												<Link href="/blog">
													Latest Posts
												</Link>
											</li>
											<li>
												<Link href="/contact">
													Help Center
												</Link>
											</li>
										</ul>
									</div>
								</div>
								<div className="col-xl-auto col-md-6">
									<div className="footer__widget footer__links">
										<h4 className="footer__widget-title">Explore</h4>
										<ul className="list-wrap">
											<li>
												<Link href="/about">
													What we Offer
												</Link>
											</li>
											<li>
												<Link href="/about">
													Our Story
												</Link>
											</li>
											<li>
												<Link href="/blog">
													Latest Posts
												</Link>
											</li>
											<li>
												<Link href="/contact">
													Help Center
												</Link>
											</li>
										</ul>
									</div>
								</div>
								<div className="col-xl-auto col-md-6">
									<div className="footer__widget footer__links">
										<h4 className="footer__widget-title">Explore</h4>
										<ul className="list-wrap">
											<li>
												<Link href="/about">
													What we Offer
												</Link>
											</li>
											<li>
												<Link href="/about">
													Our Story
												</Link>
											</li>
											<li>
												<Link href="/blog">
													Latest Posts
												</Link>
											</li>
											<li>
												<Link href="/contact">
													Help Center
												</Link>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="footer__bottom text-center">
						<div className="container">
							<div className="footer__copyright">
								Copyright © 2025 <Link href="#">Valom</Link>. All Rights Reserved.
							</div>
						</div>
					</div>
				</div>
			</footer>

		</>
	)
}
