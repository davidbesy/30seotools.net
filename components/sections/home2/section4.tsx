import Link from 'next/link'

export default function Section4() {
	return (
		<>

			<section className="business-process-area-1 pt-120 pb-120">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-xl-8 col-lg-10">
							<div className="section__title text-center mb-50">
								<span className="sub-title text-anim">3 Quick Business Steps</span>
								<h2 className="title text-anim2">We are building great future together, Be with us</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<ul className="nav nav-tabs process-nav-tabs" role="tablist">
								<li className="nav-item" role="presentation">
									<button className="nav-link process-nav-card active" id="step1" data-bs-toggle="tab" data-bs-target="#step01" type="button" role="tab" aria-controls="step1" aria-selected="true">
										<div className="box-icon">
											<img src="/assets/img/icon/process-icon1-1.png" alt="img" />
										</div>
										<div className="box-content">
											<h4 className="box-title">Task Assessment</h4>
											<p className="box-text">Helping organizations articulate their purpose and long.</p>
										</div>
									</button>
								</li>
								<li className="nav-item" role="presentation">
									<button className="nav-link process-nav-card" id="step2" data-bs-toggle="tab" data-bs-target="#step02" type="button" role="tab" aria-controls="step2" aria-selected="false">
										<div className="box-icon">
											<img src="/assets/img/icon/process-icon1-1.png" alt="img" />
										</div>
										<div className="box-content">
											<h4 className="box-title">Strategy Consulting</h4>
											<p className="box-text">Helping organizations articulate their purpose and long.</p>
										</div>
									</button>
								</li>
								<li className="nav-item" role="presentation">
									<button className="nav-link process-nav-card" id="step3" data-bs-toggle="tab" data-bs-target="#step03" type="button" role="tab" aria-controls="step3" aria-selected="false">
										<div className="box-icon">
											<img src="/assets/img/icon/process-icon1-1.png" alt="img" />
										</div>
										<div className="box-content">
											<h4 className="box-title">Implementation</h4>
											<p className="box-text">Helping organizations articulate their purpose and long.</p>
										</div>
									</button>
								</li>
							</ul>
							<div className="tab-content">
								<div className="tab-pane fade show active" id="step01" role="tabpanel" aria-labelledby="step1">
									<div className="process-card">
										<div className="process-card-thumb image-anim">
											<img src="/assets/img/others/business-process2-1.jpg" alt="img" />
										</div>
										<div className="process-card-content">
											<h4 className="process-card-title">Task Assessment</h4>
											<p className="process-card-text">Strategy consulting helps organizations define and achieve their business goals through comprehensive planning, analysis, and implementation. Here's a detailed look at the various services and approaches.</p>
											<div className="checklist-wrap style2">
												<ul className="list-wrap">
													<li><span className="fw-semibold">Vision and Mission Definition:</span> Clarifying the organization’s purpose and long-term aspirations.</li>
													<li><span className="fw-semibold">Core Competencies Analysis:</span> Identifying unique strengths and capabilities that provide competitive advantages.</li>
												</ul>
											</div>
											<div className="tg-button-wrap mt-35">
												<Link href="/appointment" className="btn btn-six">
													<span className="btn-text" data-text="Book Appointment" />
												</Link>
											</div>
										</div>
									</div>
								</div>
								<div className="tab-pane fade" id="step02" role="tabpanel" aria-labelledby="step2">
									<div className="process-card">
										<div className="process-card-thumb image-anim">
											<img src="/assets/img/others/business-process2-2.jpg" alt="img" />
										</div>
										<div className="process-card-content">
											<h4 className="process-card-title">Strategy Consulting</h4>
											<p className="process-card-text">Strategy consulting helps organizations define and achieve their business goals through comprehensive planning, analysis, and implementation. Here's a detailed look at the various services and approaches.</p>
											<div className="checklist-wrap style2">
												<ul className="list-wrap">
													<li><span className="fw-semibold">Vision and Mission Definition:</span> Clarifying the organization’s purpose and long-term aspirations.</li>
													<li><span className="fw-semibold">Core Competencies Analysis:</span> Identifying unique strengths and capabilities that provide competitive advantages.</li>
												</ul>
											</div>
											<div className="tg-button-wrap mt-35">
												<Link href="/appointment" className="btn btn-six">
													<span className="btn-text" data-text="Book Appointment" />
												</Link>
											</div>
										</div>
									</div>
								</div>
								<div className="tab-pane fade" id="step03" role="tabpanel" aria-labelledby="step3">
									<div className="process-card">
										<div className="process-card-thumb image-anim">
											<img src="/assets/img/others/business-process2-3.jpg" alt="img" />
										</div>
										<div className="process-card-content">
											<h4 className="process-card-title">Implementation</h4>
											<p className="process-card-text">Strategy consulting helps organizations define and achieve their business goals through comprehensive planning, analysis, and implementation. Here's a detailed look at the various services and approaches.</p>
											<div className="checklist-wrap style2">
												<ul className="list-wrap">
													<li><span className="fw-semibold">Vision and Mission Definition:</span> Clarifying the organization’s purpose and long-term aspirations.</li>
													<li><span className="fw-semibold">Core Competencies Analysis:</span> Identifying unique strengths and capabilities that provide competitive advantages.</li>
												</ul>
											</div>
											<div className="tg-button-wrap mt-35">
												<Link href="/appointment" className="btn btn-six">
													<span className="btn-text" data-text="Book Appointment" />
												</Link>
											</div>
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
