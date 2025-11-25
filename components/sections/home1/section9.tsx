import Link from 'next/link'

export default function Section9() {
	return (
		<>

			<section className="blog-area-1 pt-120 pb-120">
				<div className="container">
					<div className="section__title mb-50 text-center">
						<span className="sub-title text-anim">SEO Tips & Updates</span>
						<h2 className="title text-anim2">Latest SEO News & Guides</h2>
					</div>
					<div className="row gy-40 justify-content-center">
						<div className="col-xl-4 col-md-6">
							<div className="blog__post-item blog__post-item-two blog__post-item-three">
								<div className="blog__post-thumb image-anim">
									<Link href="/blog-details"><img src="/assets/img/blog/1-1.jpg" alt="img" /></Link>
									<div className="blog__post-date">15 <span>Jan</span></div>
								</div>
								<div className="blog__post-content">
									<h3 className="title"><Link href="/blog-details">How to Use Ahrefs for Keyword Research</Link>
									</h3>
									<p className="text">Learn how to leverage Ahrefs keyword research tools to find high-value keywords and improve your SEO rankings effectively.</p>
									<div className="blog__post-bottom">
										<Link href="https://seotoolsgroupbuy.us/single-tools-list/" className="link-btn" target="_blank" rel="noopener noreferrer">
											READ MORE
											<i className="fas fa-arrow-right" />
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-md-6">
							<div className="blog__post-item blog__post-item-two blog__post-item-three">
								<div className="blog__post-thumb image-anim">
									<Link href="/blog-details"><img src="/assets/img/blog/1-2.jpg" alt="img" /></Link>
									<div className="blog__post-date">20 <span>FEB</span></div>
								</div>
								<div className="blog__post-content">
									<h3 className="title"><Link href="/blog-details">Complete Guide to SEMrush Backlink Analysis</Link></h3>
									<p className="text">Master the art of backlink analysis using SEMrush tools to build quality links and improve your website's authority.</p>
									<div className="blog__post-bottom">
										<Link href="https://seotoolsgroupbuy.us/single-tools-list/" className="link-btn" target="_blank" rel="noopener noreferrer">
											READ MORE
											<i className="fas fa-arrow-right" />
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-md-6">
							<div className="blog__post-item blog__post-item-two blog__post-item-three">
								<div className="blog__post-thumb image-anim">
									<Link href="/blog-details"><img src="/assets/img/blog/1-3.jpg" alt="img" /></Link>
									<div className="blog__post-date">05 <span>JUN</span></div>
								</div>
								<div className="blog__post-content">
									<h3 className="title"><Link href="/blog-details">Moz Pro Site Audit: Complete Tutorial</Link></h3>
									<p className="text">Step-by-step guide to performing comprehensive site audits with Moz Pro and fixing technical SEO issues for better rankings.</p>
									<div className="blog__post-bottom">
										<Link href="https://seotoolsgroupbuy.us/single-tools-list/" className="link-btn" target="_blank" rel="noopener noreferrer">
											READ MORE
											<i className="fas fa-arrow-right" />
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
