import Link from 'next/link'

export default function Section13() {
	return (
		<>
			<section className="blog-area-4 pt-120 pb-120">
				<div className="container">
					<div className="section__title mb-50 text-center">
						<span className="sub-title text-anim">Recent Blog Posts</span>
						<h2 className="title text-anim2">Articles Daily Updated</h2>
					</div>
					<div className="row gy-30 justify-content-center">
						<div className="col-xl-4 col-md-6">
							<div className="blog__post-item blog__post-item-seven">
								<div className="blog__post-thumb image-anim">
									<Link href="/blog-details"><img src="/assets/img/blog/5-1.jpg" alt="img" /></Link>
									<Link className="blog__post-tag" href="/blog-details">Business</Link>
								</div>
								<div className="blog__post-content">
									<div className="blog__post-meta">
										<ul className="list-wrap">
											<li className="blog-author">Posted By: Markus David</li>
											<li>1 Year Ago</li>
										</ul>
									</div>
									<h3 className="title"><Link href="/blog-details">Building Performance Teams &amp;
										Cultivating Leadership</Link>
									</h3>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-md-6">
							<div className="blog__post-item blog__post-item-seven">
								<div className="blog__post-thumb image-anim">
									<Link href="/blog-details"><img src="/assets/img/blog/5-2.jpg" alt="img" /></Link>
									<Link className="blog__post-tag" href="/blog-details">Business</Link>
								</div>
								<div className="blog__post-content">
									<div className="blog__post-meta">
										<ul className="list-wrap">
											<li className="blog-author">Posted By: Markus David</li>
											<li>1 Year Ago</li>
										</ul>
									</div>
									<h3 className="title"><Link href="/blog-details">How Business Consulting Services Provide Stability </Link>
									</h3>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-md-6">
							<div className="blog__post-item blog__post-item-seven">
								<div className="blog__post-thumb image-anim">
									<Link href="/blog-details"><img src="/assets/img/blog/5-3.jpg" alt="img" /></Link>
									<Link className="blog__post-tag" href="/blog-details">Business</Link>
								</div>
								<div className="blog__post-content">
									<div className="blog__post-meta">
										<ul className="list-wrap">
											<li className="blog-author">Posted By: Markus David</li>
											<li>1 Year Ago</li>
										</ul>
									</div>
									<h3 className="title"><Link href="/blog-details">Making Smarter Decisions for the Future Development</Link>
									</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
