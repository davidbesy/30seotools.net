
export default function Section1() {
	return (
		<>

			<section className="hero-wrapper hero-2 overflow-hidden">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="hero-style2 text-center">
								<h1 className="hero-title text-white text-anim">
									Work Faster &amp; Efficient
								</h1>
								<div className="sub-title text-white text-anim2">We work with your company to identify position requirements, implement recruitment programs, and initiate employee assessments that maximize recruitment efforts</div>
								<div className="hero-form-wrap">
									<div className="hero-thumb-wrap">
										<img src="/assets/img/hero/hero-2-1.png" alt="img" />
									</div>
									<form action="mail.php" method="POST" className="appointment__form ajax-contact">
										<h4 className="box-title">Book Appointment Now</h4>
										<div className="row gy-4">
											<div className="col-12 form-group">
												<label className="form-label">Your Name*</label>
												<input type="text" className="form-control" name="name" id="name" placeholder="Mark Daniel" />
											</div>
											<div className="col-12 form-group">
												<label className="form-label">Email Address*</label>
												<input type="text" className="form-control" name="email" id="email" placeholder="you@company.com" />
											</div>
											<div className="col-12 form-group">
												<label className="form-label">Message*</label>
												<textarea name="message" placeholder="Type your message" id="message" className="form-control" />
											</div>
										</div>
										<button type="submit" className="btn mt-20 w-100">
											<span className="btn-text" data-text="Book Appointment" />
											<i className="fas fa-arrow-right" />
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>
					<div className="mt-90">
						<div className="row gy-40 justify-content-center">
							<div className="col-lg-4">
								<div className="hero-feature-grid">
									<div className="box-icon">
										<img src="/assets/img/icon/hero-feature-icon2-1.svg" alt="img" />
									</div>
									<div className="box-details">
										<h4 className="box-title">Data-Driven Strategies</h4>
										<p className="box-text">The company can provide highly customized and predictive.</p>
									</div>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="hero-feature-grid">
									<div className="box-icon">
										<img src="/assets/img/icon/hero-feature-icon2-2.svg" alt="img" />
									</div>
									<div className="box-details">
										<h4 className="box-title">Ethical Consulting:</h4>
										<p className="box-text">The company can provide highly customized and predictive.</p>
									</div>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="hero-feature-grid">
									<div className="box-icon">
										<img src="/assets/img/icon/hero-feature-icon2-3.svg" alt="img" />
									</div>
									<div className="box-details">
										<h4 className="box-title">End-to-End Solutions</h4>
										<p className="box-text">The company can provide highly customized and predictive.</p>
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
