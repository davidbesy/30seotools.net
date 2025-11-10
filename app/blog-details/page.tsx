
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function BlogDetails() {
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
										<h3 className="title">Blog Details</h3>
									</div>
								</div>
								<div className="col-xl-6">
									<div className="breadcrumb-wrap">
										<nav className="breadcrumb">
											<span property="itemListElement" typeof="ListItem">
												<Link href="/">Home</Link>
											</span>
											<span className="breadcrumb-separator">/</span>
											<span property="itemListElement" typeof="ListItem">Blog Details</span>
										</nav>
									</div>
								</div>
							</div>
						</div>
					</section>
					{/* breadcrumb-area-end */}
					{/*==============================
						Blog Details Area
					==============================*/}
					<section className="blog__details-area pt-120 pb-120">
						<div className="container">
							<div className="row gy-60">
								<div className="col-lg-8">
									<div className="blog__details-wrap">
										<div className="blog__details-thumb">
											<div className="thumb">
												<img src="/assets/img/blog/blog-details-1-1.jpg" alt="img" />
											</div>
											<div className="blog__post-date">15 <span>JAN</span></div>
										</div>
										<div className="blog__post-meta">
											<ul className="list-wrap">
												<li><Link href="/blog-details">
													<svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M8 0C3.5625 0 0 3.59375 0 8C0 12.4375 3.5625 16 8 16C12.4062 16 16 12.4375 16 8C16 3.59375 12.4062 0 8 0ZM8 15C6.5 15 5.125 14.5625 4 13.7812C4.125 12.2188 5.40625 11 7 11H9C10.5625 11 11.8438 12.2188 11.9688 13.7812C10.8438 14.5625 9.46875 15 8 15ZM12.8438 13.0312C12.4062 11.3125 10.8438 10 9 10H7C5.125 10 3.5625 11.3125 3.125 13.0312C1.8125 11.75 1 9.96875 1 8C1 4.15625 4.125 1 8 1C11.8438 1 15 4.15625 15 8C15 9.96875 14.1562 11.75 12.8438 13.0312ZM8 4C6.59375 4 5.5 5.125 5.5 6.5C5.5 7.90625 6.59375 9 8 9C9.375 9 10.5 7.90625 10.5 6.5C10.5 5.125 9.375 4 8 4ZM8 8C7.15625 8 6.5 7.34375 6.5 6.5C6.5 5.6875 7.15625 5 8 5C8.8125 5 9.5 5.6875 9.5 6.5C9.5 7.34375 8.8125 8 8 8Z" fill="currentColor" />
													</svg>
													by Smith</Link></li>
												<li><Link href="/blog-details">
													<svg width={17} height={16} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M2.5 4.25C2.5 3.84375 2.8125 3.5 3.25 3.5C3.65625 3.5 4 3.84375 4 4.25C4 4.6875 3.65625 5 3.25 5C2.8125 5 2.5 4.6875 2.5 4.25ZM6.375 1C6.75 1 7.15625 1.1875 7.4375 1.46875L12.8125 6.84375C13.5938 7.625 13.5938 8.90625 12.8125 9.6875L8.65625 13.8438C7.875 14.625 6.59375 14.625 5.8125 13.8438L0.4375 8.46875C0.15625 8.1875 0 7.78125 0 7.40625V2.5C0 1.6875 0.65625 1 1.5 1H6.375ZM1.125 7.75L6.53125 13.1562C6.90625 13.5312 7.5625 13.5312 7.9375 13.1562L12.125 8.96875C12.5 8.59375 12.5 7.9375 12.125 7.5625L6.71875 2.15625C6.625 2.0625 6.5 2 6.375 2H1.5C1.21875 2 1 2.25 1 2.5V7.40625C1 7.53125 1.03125 7.65625 1.125 7.75ZM9.625 1.15625C9.8125 0.96875 10.125 0.96875 10.3438 1.15625L14.75 5.375C16.4062 6.9375 16.4062 9.59375 14.75 11.1562L10.8438 14.875C10.6562 15.0625 10.3438 15.0625 10.1562 14.875C9.96875 14.6562 9.96875 14.3438 10.1562 14.1562L14.0625 10.4375C15.2812 9.25 15.2812 7.28125 14.0625 6.09375L9.625 1.875C9.4375 1.6875 9.4375 1.375 9.625 1.15625Z" fill="currentColor" />
													</svg>
													Business</Link></li>
											</ul>
										</div>
										<div className="blog__details-content">
											<h3 className="title mb-3">Building smart business solution for you</h3>
											<p className="mb-20">Collaboratively pontificate bleeding edge resources with inexpensive methodologies globally initiate multidisciplinary compatible architectures pidiously repurpose leading edge growth strategies with just in time web readiness communicate timely meta services.</p>
											<p className="mb-20">Onubia semper vel donec torquent fusce mauris felis aptent lacinia nisl, lectus himenaeos euismod molestie iaculis interdum in laoreet condimentum dictum, quisque quam risus sollicitudin gravida ut odio per a et. Gravida maecenas lobortis suscipit mus sociosqu convallis, mollis vestibulum donec aliquam risus sapien ridiculus, nulla sollicitudin eget in venenatis. Tortor montes platea iaculis posuere per mauris, eros porta blandit curabitur ullamcorper varius</p>
											<blockquote>
												<div className="quote-icon"><i className="fas fa-quote-right" /></div>
												<div className="media-body">
													<p>“IT IS A LONG FACT THAT A READER WILL BE DISTRACTED BY THE READABLE CONTENT OF A PAGE WHEN LOOKING”</p>
													<h4 className="blockquote-card_title">Monalisa Saisha</h4>
												</div>
											</blockquote>
											<p className="mb-35">Ultrices iaculis commodo parturient euismod pulvinar donec cum eget a, accumsan viverra cras praesent cubilia dignissim ad rhoncus. Gravida maecenas lobortis suscipit mus sociosqu convallis, mollis vestibulum donec aliquam risus sapien ridiculus, nulla sollicitudin eget in venenatis. Tortor montes platea iaculis posuere per mauris, eros porta blandit curabitur ullamcorper varius, nostra ante risus egestas suscipit. Quisque interdum nec parturient facilisis nunc ac quam, ad est cubilia mauris himenaeos nascetur vestibulum potenti, hac purus magna.</p>
											<div className="row gy-30">
												<div className="col-md-6">
													<div className="blog__details-thumb2">
														<div className="thumb">
															<img src="/assets/img/blog/blog-details-1-2.jpg" alt="img" />
														</div>
													</div>
												</div>
												<div className="col-md-6">
													<div className="blog__details-thumb2">
														<div className="thumb">
															<img src="/assets/img/blog/blog-details-1-3.jpg" alt="img" />
														</div>
													</div>
												</div>
											</div>
											<p className="mt-35 mb-40">Gravida maecenas lobortis suscipit mus sociosqu convallis, mollis vestibulum donec aliquam risus sapien ridiculus, nulla sollicitudin eget in venenatis. Tortor montes platea iaculis posuere per mauris, eros porta blandit curabitur ullamcorper varius</p>
											<div className="blog__details-thumb2 mb-40">
												<div className="thumb">
													<img src="/assets/img/blog/blog-details-1-4.jpg" alt="img" />
												</div>
											</div>
											<h3 className="title mb-3">Ultimate Business Strategy Solution</h3>
											<p className="mb-0">Gravida maecenas lobortis suscipit sociosqu convallis, mollis vestibulum donec aliquam risus sapien ridiculus, nulla sollicitudin eget in venenatis. Tortor montes platea iaculis posuere per mauris, eros porta blandit curabitur ullamcorper varius nostra ante risus egestas. Gravida maecenas lobortis suscipit mus sociosqu convallis, mollis vestibulum donec aliquam risus sapien ridiculus, nulla sollicitudin eget in venenatis. Tortor montes platea iaculis posuere per mauris, eros porta blandit curabitur ullamcorper varius nostra ante risus egestas.</p>
											<div className="blog__details-content-bottom">
												<div className="row align-items-center">
													<div className="col-md-7">
														<div className="post-tags">
															<h5 className="title">Tags:</h5>
															<ul className="list-wrap">
																<li><Link href="#">Services</Link></li>
																<li><Link href="#">Business</Link></li>
																<li><Link href="#">Growth</Link></li>
															</ul>
														</div>
													</div>
													<div className="col-md-5">
														<div className="blog-post-share">
															<h5 className="title">Share:</h5>
															<div className="social-links style2">
																<ul className="list-wrap">
																	<li><Link href="/https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f" /></Link></li>
																	<li><Link href="/https://twitter.com" target="_blank"><i className="fab fa-twitter" /></Link></li>
																	<li><Link href="/https://www.linkedin.com/" target="_blank"><i className="fab fa-linkedin-in" /></Link></li>
																	<li><Link href="/https://www.instagram.com/" target="_blank"><i className="fab fa-instagram" /></Link></li>
																</ul>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="blog-avatar-wrap">
												<div className="blog-avatar-img">
													<Link href="#"><img src="/assets/img/blog/blog-author-1-1.jpg" alt="img" /></Link>
												</div>
												<div className="blog-avatar-info">
													<span className="designation">Brand Designer</span>
													<h4 className="name"><Link href="#">Angelina H. Dekato</Link></h4>
													<p>Nullam varius luctus pharetra ultrices volpat facilisis donec tortor, nibhkisys habitant curabitur at nunc nisl magna ac rhoncus vehicula sociis tortor nist hendrerit molestie integer online service provide</p>
												</div>
											</div>
											<div className="comment-respond">
												<h3 className="comment-reply-title mb-20">Leave a Reply</h3>
												<form action="#" className="comment-form">
													<div className="row gy-20">
														<div className="col-md-6">
															<div className="form-group">
																<input type="text" className="form-control style-border" name="name" id="name" placeholder="Your Name" />
																<label className="form-icon-left">
																	<svg width={14} height={16} viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
																		<path d="M7 8C4.78125 8 3 6.21875 3 4C3 1.8125 4.78125 0 7 0C9.1875 0 11 1.8125 11 4C11 6.21875 9.1875 8 7 8ZM7 1C5.34375 1 4 2.375 4 4C4 5.65625 5.34375 7 7 7C8.625 7 10 5.65625 10 4C10 2.375 8.625 1 7 1ZM8.5625 9.5C11.5625 9.5 14 11.9375 14 14.9375C14 15.5312 13.5 16 12.9062 16H1.0625C0.46875 16 0 15.5312 0 14.9375C0 11.9375 2.40625 9.5 5.40625 9.5H8.5625ZM12.9062 15C12.9375 15 13 14.9688 13 14.9375C13 12.5 11 10.5 8.5625 10.5H5.40625C2.96875 10.5 1 12.5 1 14.9375C1 14.9688 1.03125 15 1.0625 15H12.9062Z" fill="currentColor" />
																	</svg>
																</label>
															</div>
														</div>
														<div className="col-md-6">
															<div className="form-group">
																<input type="text" className="form-control style-border" name="email" id="email" placeholder="Email Address" />
																<label className="form-icon-left">
																	<svg width={16} height={12} viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
																		<path d="M0 2C0 0.90625 0.875 0 2 0H14C15.0938 0 16 0.90625 16 2V10C16 11.125 15.0938 12 14 12H2C0.875 12 0 11.125 0 10V2ZM1 2V3.25L7.09375 7.75C7.625 8.125 8.34375 8.125 8.875 7.75L15 3.25V2C15 1.46875 14.5312 1 14 1H1.96875C1.4375 1 0.96875 1.46875 0.96875 2H1ZM1 4.5V10C1 10.5625 1.4375 11 2 11H14C14.5312 11 15 10.5625 15 10V4.5L9.46875 8.5625C8.59375 9.1875 7.375 9.1875 6.5 8.5625L1 4.5Z" fill="currentColor" />
																	</svg>
																</label>
															</div>
														</div>
														<div className="col-12">
															<div className="form-group">
																<select name="subject" id="subject" className="form-select style-border">
																	<option selected hidden>Select Topic</option>
																	<option value="Business">Business</option>
																	<option value="Managment">Managment</option>
																	<option value="Analysis">Analysis</option>
																</select>
																<label className="form-icon-right">
																	<svg width={16} height={8} viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
																		<path d="M1.125 0.6875C1.21875 0.5625 1.34375 0.5 1.5 0.5C1.59375 0.5 1.71875 0.53125 1.8125 0.625L7.96875 6.28125L14.1562 0.625C14.3438 0.4375 14.6562 0.4375 14.8438 0.65625C15.0312 0.84375 15.0312 1.15625 14.8125 1.34375L8.3125 7.34375C8.125 7.53125 7.84375 7.53125 7.65625 7.34375L1.15625 1.34375C0.9375 1.1875 0.9375 0.875 1.125 0.6875Z" fill="currentColor" />
																	</svg>
																</label>
															</div>
														</div>
														<div className="col-12">
															<div className="form-group">
																<textarea name="message" placeholder="Message" id="contactForm" className="form-control style-border" />
																<label className="form-icon-left">
																	<svg width={20} height={16} viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
																		<path d="M18 4C19.0938 4 20 4.90625 20 6V12.0312C20 13.125 19.0938 14 18 14H17V15.625C17 15.875 16.8125 16 16.625 16C16.5312 16 16.4688 16 16.375 15.9375L13 14H9.96875C8.875 14 8 13.125 8 12V11H9V12C9 12.5625 9.4375 13 10 13H13.25L16 14.5625V13H18C18.5312 13 19 12.5625 19 12V6C19 5.46875 18.5312 5 18 5H14V4H18ZM13 8C13 9.125 12.0938 10 11 10H7L3.59375 11.9375C3.5 12 3.4375 12 3.375 12C3.15625 12 3 11.875 3 11.625V10.0312L2 10C0.875 10 0 9.125 0 8V2C0 0.90625 0.875 0 2 0H11C12.0938 0 13 0.90625 13 2V8ZM6.71875 9H11C11.5312 9 12 8.5625 12 8V2C12 1.46875 11.5312 1 11 1H2C1.4375 1 1 1.46875 1 2V8C1 8.5625 1.4375 9 2 9H4V10.5625L6.71875 9Z" fill="currentColor" />
																	</svg>
																</label>
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
								<div className="col-lg-4">
									<aside className="blog-sidebar">
										<div className="blog-widget">
											<h4 className="widget-title">Search Here</h4>
											<div className="sidebar-search-form">
												<form action="#">
													<input type="text" placeholder="Enter Keyword" />
													<button type="submit"><i className="fas fa-search" /></button>
												</form>
											</div>
										</div>
										<div className="blog-widget">
											<h4 className="widget-title">Categories</h4>
											<div className="sidebar-cat-list">
												<ul className="list-wrap">
													<li><Link href="#">Business Solution <span><i className="fas fa-arrow-right" /></span></Link></li>
													<li><Link href="#">Strategy Growth <span><i className="fas fa-arrow-right" /></span></Link></li>
													<li><Link href="#">Finance Solution <span><i className="fas fa-arrow-right" /></span></Link></li>
													<li><Link href="#">Investment Policy <span><i className="fas fa-arrow-right" /></span></Link></li>
													<li><Link href="#">Tax Managment <span><i className="fas fa-arrow-right" /></span></Link></li>
												</ul>
											</div>
										</div>
										<div className="blog-widget widget-rc-post">
											<h4 className="widget-title">Recent Posts</h4>
											<div className="rc-post-wrap">
												<div className="rc-post-item">
													<div className="thumb">
														<Link href="/blog-details"><img src="/assets/img/blog/rc_post01.jpg" alt="img" /></Link>
													</div>
													<div className="content">
														<span className="date"><i className="far fa-clock" />15 Jan, 2025</span>
														<h4 className="title"><Link href="/blog-details">Financial Health Every Business...</Link></h4>
													</div>
												</div>
												<div className="rc-post-item">
													<div className="thumb">
														<Link href="/blog-details"><img src="/assets/img/blog/rc_post02.jpg" alt="img" /></Link>
													</div>
													<div className="content">
														<span className="date"><i className="far fa-clock" />20 Jan, 2025</span>
														<h4 className="title"><Link href="/blog-details">Improvement is Essential for Business</Link></h4>
													</div>
												</div>
												<div className="rc-post-item">
													<div className="thumb">
														<Link href="/blog-details"><img src="/assets/img/blog/rc_post03.jpg" alt="img" /></Link>
													</div>
													<div className="content">
														<span className="date"><i className="far fa-clock" />25 Jan, 2025</span>
														<h4 className="title"><Link href="/blog-details">Strategic Partnerships for Growth</Link></h4>
													</div>
												</div>
											</div>
										</div>
										<div className="blog-widget">
											<h4 className="widget-title">Gallery Posts</h4>
											<div className="sidebar-insta-feed-list">
												<ul className="list-wrap">
													<li>
														<div className="insta-thumb">
															<img src="/assets/img/blog/ins_post01.jpg" alt="Image" />
															<Link href="/instagram.com" className="icon-btn"><i className="fab fa-instagram" /></Link>
														</div>
													</li>
													<li>
														<div className="insta-thumb">
															<img src="/assets/img/blog/ins_post02.jpg" alt="Image" />
															<Link href="/instagram.com" className="icon-btn"><i className="fab fa-instagram" /></Link>
														</div>
													</li>
													<li>
														<div className="insta-thumb">
															<img src="/assets/img/blog/ins_post03.jpg" alt="Image" />
															<Link href="/instagram.com" className="icon-btn"><i className="fab fa-instagram" /></Link>
														</div>
													</li>
													<li>
														<div className="insta-thumb">
															<img src="/assets/img/blog/ins_post04.jpg" alt="Image" />
															<Link href="/instagram.com" className="icon-btn"><i className="fab fa-instagram" /></Link>
														</div>
													</li>
													<li>
														<div className="insta-thumb">
															<img src="/assets/img/blog/ins_post05.jpg" alt="Image" />
															<Link href="/instagram.com" className="icon-btn"><i className="fab fa-instagram" /></Link>
														</div>
													</li>
													<li>
														<div className="insta-thumb">
															<img src="/assets/img/blog/ins_post06.jpg" alt="Image" />
															<Link href="/instagram.com" className="icon-btn"><i className="fab fa-instagram" /></Link>
														</div>
													</li>
													<li>
														<div className="insta-thumb">
															<img src="/assets/img/blog/ins_post07.jpg" alt="Image" />
															<Link href="/instagram.com" className="icon-btn"><i className="fab fa-instagram" /></Link>
														</div>
													</li>
													<li>
														<div className="insta-thumb">
															<img src="/assets/img/blog/ins_post08.jpg" alt="Image" />
															<Link href="/instagram.com" className="icon-btn"><i className="fab fa-instagram" /></Link>
														</div>
													</li>
												</ul>
											</div>
										</div>
										<div className="blog-widget">
											<h3 className="widget-title">Popular Tags</h3>
											<div className="sidebar-tag-list">
												<ul className="list-wrap">
													<li>
														<Link href="/blog">Services</Link>
													</li>
													<li>
														<Link href="/blog">Business</Link>
													</li>
													<li>
														<Link href="/blog">Consultancy</Link>
													</li>
													<li>
														<Link href="/blog">Finance</Link>
													</li>
													<li>
														<Link href="/blog">UI/UX Design</Link>
													</li>
													<li>
														<Link href="/blog">Financial</Link>
													</li>
													<li>
														<Link href="/blog">Speed</Link>
													</li>
													<li>
														<Link href="/blog">Digital</Link>
													</li>
													<li>
														<Link href="/blog">Market Analysis</Link>
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
				</>

			</Layout>
		</>
	)
}