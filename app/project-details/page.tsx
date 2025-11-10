
import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function ProjectDetails() {
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
										<h3 className="title">Project Details</h3>
									</div>
								</div>
								<div className="col-xl-6">
									<div className="breadcrumb-wrap">
										<nav className="breadcrumb">
											<span property="itemListElement" typeof="ListItem">
												<Link href="/">Home</Link>
											</span>
											<span className="breadcrumb-separator">/</span>
											<span property="itemListElement" typeof="ListItem">Project Details</span>
										</nav>
									</div>
								</div>
							</div>
						</div>
					</section>
					{/* breadcrumb-area-end */}
					{/*==============================
						Project Details Area
					==============================*/}
					<section className="project__details-area pt-120 pb-120">
						<div className="container">
							<div className="row gy-60">
								<div className="col-lg-8">
									<div className="project__details-wrap">
										<div className="project__details-thumb">
											<div className="thumb">
												<img src="/assets/img/project/project-details-1-1.jpg" alt="img" />
											</div>
										</div>
										<div className="project__details-content">
											<h3 className="title mb-15 mt-40">Our Business Growth</h3>
											<p className="mb-20">Netus platea nec commodo tincidunt felis orci iaculis facilisi. Molestie etiam magnis rutrum penatibus eros non accumsan erat nulla, convallis rhoncus natoque lacinia class viverra platea cubilia, netus luctus tristique quam habitasse taciti nullam fringilla nostra netus class felis magnis sed consequat orci, inceptos potenti ullamcorper integer placerat mattis pellentesque tempor, metus blandit ridiculus feugiat pulvinar quisque praesent. Dictum mollis vel iaculis eleifend orci vitae blandit ultrices hac.</p>
											<blockquote>
												<div className="quote-icon"><i className="fas fa-quote-right" /></div>
												<div className="media-body">
													<p>“IT IS A LONG FACT THAT A READER WILL BE DISTRACTED BY THE READABLE CONTENT OF A PAGE WHEN LOOKING”</p>
													<h4 className="blockquote-card_title">Monalisa Saisha</h4>
												</div>
											</blockquote>
											<div className="row gy-30">
												<div className="col-md-6">
													<div className="project__details-thumb">
														<div className="thumb">
															<img src="/assets/img/project/project-details-1-2.jpg" alt="img" />
														</div>
													</div>
												</div>
												<div className="col-md-6">
													<div className="project__details-thumb">
														<div className="thumb">
															<img src="/assets/img/project/project-details-1-3.jpg" alt="img" />
														</div>
													</div>
												</div>
											</div>
											<h3 className="title mb-15 mt-40">The Challenge Of Project</h3>
											<p className="mb-0">Convallis rhoncus natoque lacinia class viverra platea cubilia, netus luctus tristique quam habitasse taciti nullam fringilla nostra netus class felis magnis sed consequat orci, inceptos potenti ullamcorper integer placerat mattis pellentesque tempor, metus blandit ridiculus feugiat pulvinar quisque praesent.</p>
											<div className="checklist-wrap mt-30">
												<ul className="list-wrap">
													<li>
														<span className="icon">
															<i className="fas fa-check-circle" />
														</span>
														The housekeepers we hired are professionals who take pride in doing excellent work and in exceed.
													</li>
													<li>
														<span className="icon">
															<i className="fas fa-check-circle" />
														</span>
														Facilisi odio mus quam risus vestibulum torquent eleifend integer semper ridiculus mi habitasse
													</li>
													<li>
														<span className="icon">
															<i className="fas fa-check-circle" />
														</span>
														Laoreet mus quisque rhoncus himenaeos praesent enim tortor life dapibus pharetra netus duis vel.
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-4">
									<aside className="blog-sidebar">
										<div className="blog-widget service-widget widget_info">
											<h4 className="widget-title">Project Information</h4>
											<div className="project-info-list">
												<ul className="list-wrap">
													<li>
														<div className="project-info-icon">
															<i className="fas fa-user" />
														</div>
														<div className="media-body">
															<p>Clients:</p>
															<strong>Josefin H. Smith</strong>
														</div>
													</li>
													<li>
														<div className="project-info-icon">
															<i className="fab fa-buffer" />
														</div>
														<div className="media-body">
															<p>Category:</p>
															<strong>Business Solution</strong>
														</div>
													</li>
													<li>
														<div className="project-info-icon">
															<i className="fas fa-calendar-alt" />
														</div>
														<div className="media-body">
															<p>Date:</p>
															<strong>25 January, 2023</strong>
														</div>
													</li>
													<li>
														<div className="project-info-icon">
															<i className="fas fa-map-marker-alt" />
														</div>
														<div className="media-body">
															<p>Address:</p>
															<strong>258 Dancing Street, USA</strong>
														</div>
													</li>
												</ul>
											</div>
										</div>
										<div className="blog-widget sidebar-banner">
											<h4 className="widget-title">Have any Questions? Call us Today!</h4>
											<p className="banner-text">Bichir sand dab chimaera glowlight danio bombay duck</p>
											<Link className="banner-link" href="/tel:1232228888">+(123) 222-8888</Link>
											<Link href="/contact" className="btn btn-two w-100"><span className="btn-text" data-text="Make Appointment" /> <i className="fas fa-arrow-right" /></Link>
										</div>
									</aside>
								</div>
							</div>
						</div>
					</section>
					{/* blog-details-area-end */}
					{/*==============================
						Cta Area
					==============================*/}
					<section className="cta-area-1 overflow-hidden pb-120">
						<div className="container">
							<div className="cta-wrap1 pt-120 pb-120 bg-cover" data-background="assets/img/bg/cta-bg1-1.png">
								<div className="cta-bg-shape1-1" data-background="assets/img/bg/cta-bg-shape1-1.png" />
								<div className="row justify-content-center align-items-center">
									<div className="col-xl-7 col-lg-8">
										<div className="section__title text-center">
											<span className="sub-title text-white text-anim">About Amazing Company</span>
											<h2 className="title text-white text-anim2">Do You Have Similar Service
												Requirements?
											</h2>
											<div className="tg-button-wrap mt-40 justify-content-center">
												<Link href="/contact" className="btn btn-seven">
													<span className="btn-text" data-text="Contact With Us" />
													<i className="fas fa-arrow-right" />
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					{/*======== / Cta Section ========*/}
				</>
			</Layout>
		</>
	)
}