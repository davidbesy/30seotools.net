import Link from 'next/link'

export default function Footer2() {
	return (
		<>
			<footer>
				<div className="footer__area footer__area-two smoke5-bg overflow-hidden">
					<div className="container">
						<div className="footer__middle">
							<div className="row justify-content-between">
								<div className="col-xl-3 col-lg-4 col-md-6">
									<div className="footer__widget">
										<div className="footer__location">
											<p className="footer__location-subtitle">Location-01</p>
											<h5 className="footer__location-title">New York Office</h5>
											<ul className="list-wrap">
												<li>123 Broadway, Suite 1000 New York, NY 10001, USA</li>
												<li><Link href="/mailto:info@valom-nyk.com">info@valom-nyk.com</Link></li>
												<li><Link href="/tel:2582468632125">+258 24686 32125</Link></li>
											</ul>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-4 col-md-6">
									<div className="footer__widget">
										<div className="footer__location">
											<p className="footer__location-subtitle">Location-02</p>
											<h5 className="footer__location-title">Boston Office</h5>
											<ul className="list-wrap">
												<li>890 Peachtree Street NE, Suite 500 Atlanta GA 30309, USA</li>
												<li><Link href="/mailto:info@valom-bst.com">info@valom-bst.com</Link></li>
												<li><Link href="/tel:2582468632125">+1 (713) 555-4000</Link></li>
											</ul>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-4 col-md-6">
									<div className="footer__widget">
										<div className="footer__location">
											<p className="footer__location-subtitle">Location-03</p>
											<h5 className="footer__location-title">Amsterdam Office</h5>
											<ul className="list-wrap">
												<li>67 Hercht, 1e verdieping Amsterdam, 1015 BT, Netherlands.</li>
												<li><Link href="/mailto:info@valom-ams.com">info@valom-ams.com</Link></li>
												<li><Link href="/tel:2582468632125">+1 (404) 555-8000</Link></li>
											</ul>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-lg-4 col-md-6">
									<div className="footer__widget">
										<div className="footer__location">
											<p className="footer__location-subtitle">Location-04</p>
											<h5 className="footer__location-title">Stockholm Office</h5>
											<ul className="list-wrap">
												<li>89 Kunggatan, Vaning 4 Stockholm, 111 22, Sweden.</li>
												<li><Link href="/mailto:info@valom-ams.com">info@valom-stk.com</Link></li>
												<li><Link href="/tel:2582468632125">+1 (214) 555-0001</Link></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="container">
						<div className="footer__bottom">
							<div className="footer__logo-wrap">
								<div className="row justify-content-lg-between justify-content-center gy-4">
									<div className="col-auto">
										<div className="footer__logo mb-0">
											<Link href="/"><img src="/assets/img/logo/logo.svg" alt="logo" /></Link>
										</div>
									</div>
									<div className="col-auto">
										<div className="social-links">
											<ul className="list-wrap">
												<li><Link href="/https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-square" />Facebook</Link></li>
												<li><Link href="/https://twitter.com" target="_blank"><i className="fab fa-twitter" />Twitter</Link></li>
												<li><Link href="/https://www.linkedin.com/" target="_blank"><i className="fab fa-linkedin" />Linkedin</Link></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="footer__copyright-wrap">
								<div className="row justify-content-lg-between justify-content-center gy-2">
									<div className="col-auto">
										<div className="footer__copyright text-center">
											Copyright ©<Link href="#">Valom</Link> 2025. All Rights Reserved.
										</div>
									</div>
									<div className="col-auto">
										<div className="footer__bottom-links">
											<ul className="list-wrap">
												<li><Link href="/blog">Company news</Link></li>
												<li><Link href="/faq">Faq</Link></li>
												<li><Link href="/contact">Contact</Link></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}
