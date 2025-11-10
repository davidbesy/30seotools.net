
export default function Section14() {
	return (
		<>
			<section className="contact-area-1 overflow-hidden">
				<div className="contact-wrap1 smoke5-bg pt-120 pb-120 position-relative">
					<div className="contact-thumb1 d-xl-block d-none">
						<img src="/assets/img/others/contact1-1.jpg" alt="img" />
					</div>
					<div className="container">
						<div className="row justify-content-end">
							<div className="col-xl-6">
								<div className="contact-form-wrap">
									<div className="section__title mb-30">
										<h4 className="title">Book Appointment Now</h4>
									</div>
									<form action="mail.php" method="POST" className="contact__form ajax-contact">
										<div className="row gy-4">
											<div className="col-md-6">
												<div className="form-group">
													<label>First Name*</label>
													<input type="text" className="form-control style-border" name="name" id="name" placeholder="Mark" />
												</div>
											</div>
											<div className="col-md-6">
												<div className="form-group">
													<label>Last Name*</label>
													<input type="text" className="form-control style-border" name="name2" id="name2" placeholder="Daniel" />
												</div>
											</div>
											<div className="col-md-12">
												<div className="form-group">
													<label>Email Address*</label>
													<input type="text" className="form-control style-border" name="email" id="email" placeholder="you@company.com" />
												</div>
											</div>
											<div className="col-md-12">
												<div className="form-group">
													<label>Phone Number*</label>
													<input type="number" className="form-control style-border" name="number" id="number" placeholder="+1 (555) 123-4567" />
												</div>
											</div>
											<div className="col-12">
												<div className="form-group">
													<label>Message*</label>
													<textarea name="message" placeholder="Type your message here" id="contactForm" className="form-control style-border" />
												</div>
											</div>
										</div>
										<button type="submit" className="btn w-100 mt-30">
											<span className="btn-text" data-text="Book Appointment" />
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
