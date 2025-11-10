import Link from 'next/link'
export default function Header5({ scroll, isMobileMenu, handleMobileMenu }: any) {
	return (
		<>
			<header>
				<div id="header-fixed-height" className="header-fixed-height-three" />
				<div className="tg-header__top tg-header__top-five d-lg-block d-none">
					<div className="container">
						<div className="row">
							<div className="col-xl-6">
								<ul className="tg-header__top-info left-side list-wrap justify-content-xl-start justify-content-center">
									<li>
										<i className="fas fa-bolt" />
										<strong>Update:</strong>
										Sign Up and Receive upto 20% bonus discount on checkout
									</li>
								</ul>
							</div>
							<div className="col-xl-6 col-md-4 d-xl-block d-none">
								<ul className="tg-header__top-right list-wrap">
									<li className="tg-header__top-social">
										<ul className="list-wrap">
											<li><Link href="/https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f me-2" />Facebook</Link></li>
											<li><Link href="/https://twitter.com" target="_blank"><i className="fab fa-twitter me-2" />Twitter</Link></li>
											<li><Link href="/https://www.fa-linkedin.com/" target="_blank"><i className="fab fa-linkedin-in me-2" />Linkedin</Link></li>
										</ul>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="tg-header__middle tg-header__middle-three  d-xl-block d-none smoke3-bg">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<div className="tgmenu__wrap">
									<nav className="tgmenu__nav">
										<div className="logo">
											<Link href="/"><img src="/assets/img/logo/logo.svg" alt="Logo" /></Link>
										</div>
										<div className="info-card-wrap style4 m-auto">
											<div className="info-card">
												<div className="info-card_icon">
													<i className="far fa-envelope" />
												</div>
												<div className="info-card_content">
													<p className="info-card_text">Send Us A Message</p>
													<Link href="/mailto:solution@valom.com" className="info-card_link">solution@valom.com</Link>
												</div>
											</div>
											<div className="info-card">
												<div className="info-card_icon">
													<svg width={18} height={25} viewBox="0 0 18 25" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M15.75 9C15.75 5.29688 12.7031 2.25 9 2.25C5.25 2.25 2.25 5.29688 2.25 9C2.25 9.60938 2.4375 10.5 2.95312 11.7188C3.42188 12.8438 4.125 14.1562 4.92188 15.4688C6.28125 17.625 7.82812 19.6875 9 21.1875C10.125 19.6875 11.6719 17.625 13.0312 15.4688C13.8281 14.1562 14.5312 12.8438 15 11.7188C15.5156 10.5 15.75 9.60938 15.75 9ZM18 9C18 13.125 12.5156 20.3906 10.0781 23.4375C9.51562 24.1406 8.4375 24.1406 7.875 23.4375C5.48438 20.3906 0 13.125 0 9C0 4.03125 4.03125 0 9 0C13.9688 0 18 4.03125 18 9ZM10.5 9C10.5 8.20312 9.79688 7.5 9 7.5C8.15625 7.5 7.5 8.20312 7.5 9C7.5 9.84375 8.15625 10.5 9 10.5C9.79688 10.5 10.5 9.84375 10.5 9ZM5.25 9C5.25 7.6875 5.95312 6.46875 7.125 5.76562C8.25 5.10938 9.70312 5.10938 10.875 5.76562C12 6.46875 12.75 7.6875 12.75 9C12.75 10.3594 12 11.5781 10.875 12.2812C9.70312 12.9375 8.25 12.9375 7.125 12.2812C5.95312 11.5781 5.25 10.3594 5.25 9Z" fill="currentColor" />
													</svg>
												</div>
												<div className="info-card_content">
													<p className="info-card_text">Address Here</p>
													<p className="info-card_link">452 Marie Avenue, 166HK</p>
												</div>
											</div>
										</div>
										<div className="tgmenu__action d-none d-lg-block">
											<Link href="/contact" className="btn menu-tigger">
												<span className="btn-text" data-text="Get a Quote" />
												<i className="fas fa-arrow-right" />
											</Link>
										</div>
									</nav>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div id="sticky-header" className="tg-header__area tg-header__area-six">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<div className="tgmenu__wrap">
									<nav className="tgmenu__nav">
										<div className="logo d-xl-none d-block">
											<Link href="/"><img src="/assets/img/logo/logo.svg" alt="Logo" /></Link>
										</div>
										<div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-lg-flex">
											<ul className="navigation ms-xl-0">
												<li className="menu-item-has-children active"><Link href="#">Home</Link>
													<ul className="sub-menu">
														<li><Link href="/">Home One</Link></li>
														<li><Link href="/home-2">Home Two</Link></li>
														<li><Link href="/home-3">Home Three</Link></li>
														<li><Link href="/home-4">Home Four</Link></li>
														<li className="active"><Link href="/home-5">Home Five</Link></li>
													</ul>
												</li>
												<li><Link href="/about">Abour Us</Link></li>
												<li className="menu-item-has-children"><Link href="#">Services</Link>
													<ul className="sub-menu">
														<li><Link href="/service">Services</Link></li>
														<li><Link href="/service-details">Service Details</Link></li>
													</ul>
												</li>
												<li className="menu-item-has-children"><Link href="#">Pages</Link>
													<ul className="sub-menu">
														<li><Link href="/project">Project Page</Link></li>
														<li><Link href="/project-details">Project Details</Link></li>
														<li><Link href="/team">Team Page</Link></li>
														<li><Link href="/team-details">Team Details</Link></li>
														<li><Link href="/pricing">Pricing</Link></li>
														<li><Link href="/appointment">Appointment</Link></li>
														<li><Link href="/error">404 Page</Link></li>
													</ul>
												</li>
												<li className="menu-item-has-children"><Link href="#">Blog</Link>
													<ul className="sub-menu">
														<li><Link href="/blog">Blog List</Link></li>
														<li><Link href="/blog-2">Blog Grid</Link></li>
														<li><Link href="/blog-details">Blog Details</Link></li>
													</ul>
												</li>
												<li><Link href="/contact">Contacts</Link></li>
											</ul>
										</div>
										<div className="mobile-nav-toggler d-lg-none d-inline-flex">
											<Link href="#" className="sidebar-btn">
												<span className="line" />
												<span className="line" />
												<span className="line" />
											</Link>
										</div>
									</nav>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Mobile Menu  */}
				<div className="tgmobile__menu">
					<nav className="tgmobile__menu-box">
						<div className="close-btn"><i className="fas fa-times" /></div>
						<div className="nav-logo">
							<Link href="/"><img src="/assets/img/logo/logo.svg" alt="Logo" /></Link>
						</div>
						<div className="tgmobile__menu-outer">
							{/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
						</div>
						<div className="tgmobile__menu-bottom">
							<div className="contact-info">
								<ul className="list-wrap">
									<li>Mail: <Link href="/mailto:info@valom.com">info@valom.com</Link></li>
									<li>Phone: <Link href="/tel:0123456789">+123 888 9999</Link></li>
								</ul>
							</div>
							<div className="social-links">
								<ul className="list-wrap">
									<li><Link href="/https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f" /></Link></li>
									<li><Link href="/https://twitter.com" target="_blank"><i className="fab fa-twitter" /></Link></li>
									<li><Link href="/https://www.whatsapp.com/" target="_blank"><i className="fab fa-whatsapp" /></Link></li>
									<li><Link href="/https://www.instagram.com/" target="_blank"><i className="fab fa-instagram" /></Link></li>
									<li><Link href="/https://www.youtube.com/" target="_blank"><i className="fab fa-youtube" /></Link></li>
								</ul>
							</div>
						</div>
					</nav>
				</div>
				<div className="tgmobile__menu-backdrop" />
				{/* End Mobile Menu */}
				{/* offCanvas-menu */}
				<div className="offCanvas__info">
					<div className="offCanvas__close-icon menu-close">
						<button><i className="fas fa-times" /></button>
					</div>
					<div className="appointment-wrap2">
						<div className="appointment-thumb2 d-lg-block d-none">
							<img src="/assets/img/others/appointment2-1.png" alt="img" />
						</div>
						<div className="row justify-content-end">
							<div className="col-lg-6">
								<div className="appointment-form-wrap">
									<div className="section__title mb-30">
										<h4 className="title">Make An Appointment</h4>
									</div>
									<form action="mail.php" method="POST" className="appointment__form ajax-contact">
										<div className="row gy-20">
											<div className="col-xl-6">
												<div className="form-group">
													<input type="text" className="form-control style-border3" name="name" id="name" placeholder="Your Name" />
													<label className="form-icon-right2">
														<svg width={14} height={16} viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M7 8C4.78125 8 3 6.21875 3 4C3 1.8125 4.78125 0 7 0C9.1875 0 11 1.8125 11 4C11 6.21875 9.1875 8 7 8ZM7 1C5.34375 1 4 2.375 4 4C4 5.65625 5.34375 7 7 7C8.625 7 10 5.65625 10 4C10 2.375 8.625 1 7 1ZM8.5625 9.5C11.5625 9.5 14 11.9375 14 14.9375C14 15.5312 13.5 16 12.9062 16H1.0625C0.46875 16 0 15.5312 0 14.9375C0 11.9375 2.40625 9.5 5.40625 9.5H8.5625ZM12.9062 15C12.9375 15 13 14.9688 13 14.9375C13 12.5 11 10.5 8.5625 10.5H5.40625C2.96875 10.5 1 12.5 1 14.9375C1 14.9688 1.03125 15 1.0625 15H12.9062Z" fill="currentColor" />
														</svg>
													</label>
												</div>
											</div>
											<div className="col-xl-6">
												<div className="form-group">
													<input type="text" className="form-control style-border3" name="email" id="email" placeholder="Email Address" />
													<label className="form-icon-right2">
														<svg width={16} height={12} viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M0 2C0 0.90625 0.875 0 2 0H14C15.0938 0 16 0.90625 16 2V10C16 11.125 15.0938 12 14 12H2C0.875 12 0 11.125 0 10V2ZM1 2V3.25L7.09375 7.75C7.625 8.125 8.34375 8.125 8.875 7.75L15 3.25V2C15 1.46875 14.5312 1 14 1H1.96875C1.4375 1 0.96875 1.46875 0.96875 2H1ZM1 4.5V10C1 10.5625 1.4375 11 2 11H14C14.5312 11 15 10.5625 15 10V4.5L9.46875 8.5625C8.59375 9.1875 7.375 9.1875 6.5 8.5625L1 4.5Z" fill="currentColor" />
														</svg>
													</label>
												</div>
											</div>
											<div className="col-12">
												<div className="form-group">
													<select name="subject" id="subject" className="form-select style-border3">
														<option selected hidden>Select Service</option>
														<option value="Business">Business</option>
														<option value="Managment">Managment</option>
														<option value="Analysis">Analysis</option>
													</select>
													<label className="form-icon-right2">
														<svg width={16} height={8} viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M1.125 0.6875C1.21875 0.5625 1.34375 0.5 1.5 0.5C1.59375 0.5 1.71875 0.53125 1.8125 0.625L7.96875 6.28125L14.1562 0.625C14.3438 0.4375 14.6562 0.4375 14.8438 0.65625C15.0312 0.84375 15.0312 1.15625 14.8125 1.34375L8.3125 7.34375C8.125 7.53125 7.84375 7.53125 7.65625 7.34375L1.15625 1.34375C0.9375 1.1875 0.9375 0.875 1.125 0.6875Z" fill="currentColor" />
														</svg>
													</label>
												</div>
											</div>
											<div className="col-xl-6">
												<div className="form-group">
													<input type="text" className="date-pick form-control style-border3" name="date" id="date-pick" placeholder="Select Date" />
													<label className="form-icon-right2">
														<svg width={14} height={16} viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M12 2H10.75V0.75C10.75 0.34375 10.4062 0 10 0C9.625 0 9.25 0.34375 9.25 0.75V2H4.75V0.75C4.75 0.34375 4.40625 0 4 0C3.5625 0 3.25 0.34375 3.25 0.75V2H2C0.875 2 0 2.90625 0 4V14C0 15.125 0.875 16 2 16H12C13.0938 16 14 15.125 14 14V4C14 2.90625 13.0938 2 12 2ZM12 14.5H2C1.71875 14.5 1.5 14.2812 1.5 14V6H12.5V14C12.5 14.2812 12.25 14.5 12 14.5Z" fill="currentColor" />
														</svg>
													</label>
												</div>
											</div>
											<div className="col-xl-6">
												<div className="form-group">
													<input type="text" className="time-pick form-control style-border3" name="time" id="time-pick" placeholder="Select Time" />
													<label className="form-icon-right2">
														<svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M7.25 3.75C7.25 3.34375 7.5625 3 8 3C8.40625 3 8.75 3.34375 8.75 3.75V7.625L11.4062 9.375C11.75 9.625 11.8438 10.0938 11.5938 10.4375C11.375 10.7812 10.9062 10.875 10.5625 10.625L7.5625 8.625C7.375 8.5 7.25 8.25 7.25 8V3.75ZM8 0C12.4062 0 16 3.59375 16 8C16 12.4375 12.4062 16 8 16C3.5625 16 0 12.4375 0 8C0 3.59375 3.5625 0 8 0ZM1.5 8C1.5 11.5938 4.40625 14.5 8 14.5C11.5625 14.5 14.5 11.5938 14.5 8C14.5 4.4375 11.5625 1.5 8 1.5C4.40625 1.5 1.5 4.4375 1.5 8Z" fill="currentColor" />
														</svg>
													</label>
												</div>
											</div>
											<div className="col-12">
												<div className="form-group">
													<textarea name="message" placeholder="Type Your Message" id="contactForm" className="form-control style-border3" />
												</div>
											</div>
										</div>
										<button type="submit" className="btn mt-30">
											<span className="btn-text" data-text="Submit Message" />
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="offCanvas__overly" />
				{/* offCanvas-menu-end */}
			</header>

		</>
	)
}
