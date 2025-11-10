import Link from 'next/link'

export default function Section12() {
	return (
		<>

			<section className="blog-area-4 pt-120 pb-120">
				<div className="container">
					<div className="section__title mb-50 text-center">
						<span className="sub-title text-anim">Recent News</span>
						<h2 className="title text-anim2">Insights &amp; Intelligence</h2>
					</div>
					<div className="row gy-30 justify-content-center">
						<div className="col-xl-4 col-md-6">
							<div className="blog__post-item blog__post-item-six">
								<div className="blog__post-thumb image-anim">
									<Link href="/blog-details"><img src="/assets/img/blog/4-1.jpg" alt="img" /></Link>
								</div>
								<div className="blog__post-content">
									<div className="blog__post-meta">
										<ul className="list-wrap">
											<li><Link href="/blog-details">
												<i className="fas fa-calendar" />
												24 Feb, 2025</Link></li>
											<li><Link href="/blog-details">
												<i className="fas fa-user" />
												by admin</Link></li>
										</ul>
									</div>
									<h3 className="title"><Link href="/blog-details">Developers within IT teams are responsible for creating</Link></h3>
									<div className="blog__post-bottom">
										<Link href="/blog-details" className="link-btn">
											Read Details
											<i className="fas fa-angle-double-right" />
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-md-6">
							<div className="blog__post-item blog__post-item-six">
								<div className="blog__post-thumb image-anim">
									<Link href="/blog-details"><img src="/assets/img/blog/4-2.jpg" alt="img" /></Link>
								</div>
								<div className="blog__post-content">
									<div className="blog__post-meta">
										<ul className="list-wrap">
											<li><Link href="/blog-details">
												<i className="fas fa-calendar" />
												24 Feb, 2025</Link></li>
											<li><Link href="/blog-details">
												<i className="fas fa-user" />
												by admin</Link></li>
										</ul>
									</div>
									<h3 className="title"><Link href="/blog-details">Developers within IT teams are responsible for creating</Link></h3>
									<div className="blog__post-bottom">
										<Link href="/blog-details" className="link-btn">
											Read Details
											<i className="fas fa-angle-double-right" />
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-md-6">
							<div className="blog__post-item blog__post-item-six">
								<div className="blog__post-thumb image-anim">
									<Link href="/blog-details"><img src="/assets/img/blog/4-3.jpg" alt="img" /></Link>
								</div>
								<div className="blog__post-content">
									<div className="blog__post-meta">
										<ul className="list-wrap">
											<li><Link href="/blog-details">
												<i className="fas fa-calendar" />
												24 Feb, 2025</Link></li>
											<li><Link href="/blog-details">
												<i className="fas fa-user" />
												by admin</Link></li>
										</ul>
									</div>
									<h3 className="title"><Link href="/blog-details">Developers within IT teams are responsible for creating</Link></h3>
									<div className="blog__post-bottom">
										<Link href="/blog-details" className="link-btn">
											Read Details
											<i className="fas fa-angle-double-right" />
										</Link>
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
