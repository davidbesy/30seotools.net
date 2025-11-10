import Link from 'next/link'

export default function Section9() {
	return (
		<>

			<section className="blog-area-2 pb-120">
				<div className="container">
					<div className="section__title mb-50 text-center">
						<span className="sub-title text-anim">Blog Posts</span>
						<h2 className="title text-anim2">Read Our Blog Posts</h2>
					</div>
					<div className="row gy-40 justify-content-center">
						<div className="col-lg-6">
							<div className="blog__post-item blog__post-item-four">
								<div className="blog__post-thumb image-anim">
									<Link href="/blog-details"><img src="/assets/img/blog/2-1.jpg" alt="img" /></Link>
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
									<h3 className="title"><Link href="/blog-details">How Talent Management Consulting Shapes Organizational Success"</Link></h3>
									<div className="blog__post-bottom">
										<Link href="/blog-details" className="link-btn">
											READ MORE
											<i className="fas fa-angle-double-right" />
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="blog__post-item blog__post-item-four">
								<div className="blog__post-thumb image-anim">
									<Link href="/blog-details"><img src="/assets/img/blog/2-2.jpg" alt="img" /></Link>
								</div>
								<div className="blog__post-content">
									<div className="blog__post-meta">
										<ul className="list-wrap">
											<li><Link href="/blog-details">
												<i className="fas fa-calendar" />
												26 Mar, 2025</Link></li>
											<li><Link href="/blog-details">
												<i className="fas fa-user" />
												by admin</Link></li>
										</ul>
									</div>
									<h3 className="title"><Link href="/blog-details">Role of Digital Transformation in Shaping the Future of Small Businesses</Link></h3>
									<div className="blog__post-bottom">
										<Link href="/blog-details" className="link-btn">
											READ MORE
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
