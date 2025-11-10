
export default function Section8() {
	return (
		<>

			<section className="faq-area-1 overflow-hidden pt-120 pb-120 position-relative z-1">
				<div className="faq-bg-shape1-1" />
				<div className="container">
					<div className="row gy-5 gx-80 justify-content-between align-items-center">
						<div className="col-xl-6">
							<div className="faq-thumb1-1">
								<img src="/assets/img/others/faq1-1.jpg" alt="img" />
							</div>
						</div>
						<div className="col-xl-6">
							<div className="section__title mb-50">
								<span className="sub-title text-anim">frequently asked questions</span>
								<h2 className="title text-anim2">Get every business answer
									from us</h2>
							</div>
							<div className="accordion-area accordion" id="faqAccordion">
								<div className="accordion-card active">
									<div className="accordion-header" id="collapse-item-1">
										<button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1" aria-expanded="true" aria-controls="collapse-1"><span className="text-theme">01.</span> What should i included my personal details? </button>
									</div>
									<div id="collapse-1" className="accordion-collapse collapse show" aria-labelledby="collapse-item-1" data-bs-parent="#faqAccordion">
										<div className="accordion-body">
											<p className="faq-text">Partrient sed nascetur facilisis suscipit ridiculus magna lobortis imperdiet vivamus est aliquam euismod nector quam convallis ornare justo service visionary sources unleash online</p>
										</div>
									</div>
								</div>
								<div className="accordion-card">
									<div className="accordion-header" id="collapse-item-2">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-2" aria-expanded="false" aria-controls="collapse-2"><span className="text-theme">02.</span>Where i can find my business growth result?</button>
									</div>
									<div id="collapse-2" className="accordion-collapse collapse " aria-labelledby="collapse-item-2" data-bs-parent="#faqAccordion">
										<div className="accordion-body">
											<p className="faq-text">Partrient sed nascetur facilisis suscipit ridiculus magna lobortis imperdiet vivamus est aliquam euismod nector quam convallis ornare justo service visionary sources unleash online</p>
										</div>
									</div>
								</div>
								<div className="accordion-card">
									<div className="accordion-header" id="collapse-item-3">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-3" aria-expanded="false" aria-controls="collapse-3"><span className="text-theme">03.</span>Did you get any business consultant?</button>
									</div>
									<div id="collapse-3" className="accordion-collapse collapse " aria-labelledby="collapse-item-3" data-bs-parent="#faqAccordion">
										<div className="accordion-body">
											<p className="faq-text">Partrient sed nascetur facilisis suscipit ridiculus magna lobortis imperdiet vivamus est aliquam euismod nector quam convallis ornare justo service visionary sources unleash online</p>
										</div>
									</div>
								</div>
								<div className="accordion-card">
									<div className="accordion-header" id="collapse-item-4">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-4" aria-expanded="false" aria-controls="collapse-4"><span className="text-theme">04.</span>Do you need any business invesment policy?</button>
									</div>
									<div id="collapse-4" className="accordion-collapse collapse " aria-labelledby="collapse-item-4" data-bs-parent="#faqAccordion">
										<div className="accordion-body">
											<p className="faq-text">Partrient sed nascetur facilisis suscipit ridiculus magna lobortis imperdiet vivamus est aliquam euismod nector quam convallis ornare justo service visionary sources unleash online</p>
										</div>
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
