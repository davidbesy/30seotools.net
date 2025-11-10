
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Contact() {
	return (
		<>
			<Layout headerStyle={1} footerStyle={1}>
				<>
					<section className="breadcrumb__area fix" data-background="assets/img/bg/breadcrumb-bg.png">
						<div className="breadcrumb__bg-shape" />
						<div className="container">
							<div className="row align-items-center">
								<div className="col-xl-6">
									<div className="breadcrumb__content">
										<h3 className="title">Contact Us</h3>
									</div>
								</div>
								<div className="col-xl-6">
									<div className="breadcrumb-wrap">
										<nav className="breadcrumb">
											<span property="itemListElement" typeof="ListItem">
												<Link href="/">Home</Link>
											</span>
											<span className="breadcrumb-separator">/</span>
											<span property="itemListElement" typeof="ListItem">Contact Us</span>
										</nav>
									</div>
								</div>
							</div>
						</div>
					</section>
					{/* breadcrumb-area-end */}
					{/*==============================
						Contact Area
					==============================*/}
					<section className="contact-page-area overflow-hidden pt-120">
						<div className="container">
							<div className="contact-wrap2 pt-120 pb-120 smoke5-bg text-center">
								<div className="row justify-content-end">
									<div className="col-xl-12">
										<div className="contact-form-wrap2">
											<div className="section__title mb-30">
												<span className="sub-title">Get In Touch</span>
												<h2 className="title">Needs Help? Let’s Get in Touch</h2>
											</div>
											<form action="mail.php" method="POST" className="contact__form ajax-contact">
												<div className="row gy-4">
													<div className="col-lg-6">
														<div className="form-group">
															<input type="text" className="form-control style-white" name="name" id="name" placeholder="Your Name" />
														</div>
													</div>
													<div className="col-lg-6">
														<div className="form-group">
															<input type="text" className="form-control style-white" name="email" id="email" placeholder="Email Address" />
														</div>
													</div>
													<div className="col-12">
														<div className="form-group">
															<select name="subject" id="subject" className="form-select style-white">
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
													<div className="col-12">
														<div className="form-group">
															<textarea name="message" placeholder="Type Your Message" id="contactForm" className="form-control style-white" />
														</div>
													</div>
												</div>
												<button type="submit" className="btn mt-30">
													<span className="btn-text" data-text="Send Message" />
												</button>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					{/*======== / Contact Section ========*/}
					{/* contact-map */}
					<div className="contact-map-area pt-120 pb-120">
						<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48409.69813174607!2d-74.05163325136718!3d40.68264649999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25bae694479a3%3A0xb9949385da52e69e!2sBarclays%20Center!5e0!3m2!1sen!2sbd!4v1684309529719!5m2!1sen!2sbd" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
						<div className="container">
							<div className="contact-info-wrap">
								<div className="contact-info-thumb">
									<img src="/assets/img/others/contact-page1-1.jpg" alt="img" />
								</div>
								<ul className="list-wrap">
									<li>
										<div className="contact-info-card">
											<div className="contact-info-icon">
												<i className="fas fa-phone-alt" />
											</div>
											<div className="media-body">
												<p>Call Us 24/7</p>
												<h4>+584 (25) 21453</h4>
											</div>
										</div>
									</li>
									<li>
										<div className="contact-info-card">
											<div className="contact-info-icon">
												<i className="fas fa-envelope-open-text" />
											</div>
											<div className="media-body">
												<p>Make a Quote</p>
												<h4>info@help-valom.com</h4>
											</div>
										</div>
									</li>
									<li>
										<div className="contact-info-card">
											<div className="contact-info-icon">
												<i className="fas fa-map-marked-alt" />
											</div>
											<div className="media-body">
												<p>Service Station</p>
												<h4>25 Hilton Street, Aus.</h4>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
					{/* contact-map-end */}
				</>
			</Layout>
		</>
	)
}