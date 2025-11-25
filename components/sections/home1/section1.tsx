'use client'
import Link from 'next/link'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 1,
	spaceBetween: 30,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	loop: true,
	pagination: {
		el: ".slider-pagination2",
		clickable: true,
	},
}
export default function Section1() {
	return (
		<>

			<section className="hero-wrapper hero-1">
				<div className="hero-slider1 overflow-hidden">
					<Swiper {...swiperOptions} className="tg-swiper__slider swiper-container" id="heroSlider1" >
						<div className="swiper-wrapper">
							<SwiperSlide data-background="assets/img/hero/hero-bg1-1.png">
								<div className="hero-bg-shape1-1" />
								<div className="hero-bg-shape1-2" />
								<div className="container">
									<div className="row">
										<div className="col-lg-6">
											<div className="hero-style1">
												<div className="sub-title" data-ani="slideinup" data-ani-delay="0.1s">
													<span>Welcome!</span> Access Premium SEO Tools at Group Buy Prices</div>
												<h1 className="hero-title">
													<div className="title1" data-ani="slideinup" data-ani-delay="0.2s">Premium SEO
														Tools</div>
													<div className="title2" data-ani="slideinup" data-ani-delay="0.3s">For Your
														Digital</div>
													<div className="title3" data-ani="slideinup" data-ani-delay="0.4s">Success
													</div>
												</h1>
												<div className="tg-button-wrap" data-ani="slideinup" data-ani-delay="0.5s">
													<Link href="https://seotoolsgroupbuy.us/single-tools-list/" className="btn btn-three" target="_blank" rel="noopener noreferrer">
														<span className="btn-text" data-text="Get Started" />
													</Link>
													<Link href="https://seotoolsgroupbuy.us/single-tools-list/" className="btn btn-four" target="_blank" rel="noopener noreferrer">
														<span className="btn-text" data-text="View Tools" />
													</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide data-background="assets/img/hero/hero-bg1-2.png">
								<div className="hero-bg-shape1-1" />
								<div className="hero-bg-shape1-2" />
								<div className="container">
									<div className="row">
										<div className="col-lg-6">
											<div className="hero-style1">
												<div className="sub-title" data-ani="slideinup" data-ani-delay="0.1s">
													<span>Welcome!</span> Save Up to 90% on Premium SEO Tools</div>
												<h1 className="hero-title">
													<div className="title1" data-ani="slideinup" data-ani-delay="0.2s">Group Buy
														SEO</div>
													<div className="title2" data-ani="slideinup" data-ani-delay="0.3s">Tools
														Platform</div>
													<div className="title3" data-ani="slideinup" data-ani-delay="0.4s">For Everyone
													</div>
												</h1>
												<div className="tg-button-wrap" data-ani="slideinup" data-ani-delay="0.5s">
													<Link href="https://seotoolsgroupbuy.us/single-tools-list/" className="btn btn-three" target="_blank" rel="noopener noreferrer">
														<span className="btn-text" data-text="Join Now" />
													</Link>
													<Link href="https://seotoolsgroupbuy.us/single-tools-list/" className="btn btn-four" target="_blank" rel="noopener noreferrer">
														<span className="btn-text" data-text="Browse Tools" />
													</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide data-background="assets/img/hero/hero-bg1-3.png">
								<div className="hero-bg-shape1-1" />
								<div className="hero-bg-shape1-2" />
								<div className="container">
									<div className="row">
										<div className="col-lg-6">
											<div className="hero-style1">
												<div className="sub-title" data-ani="slideinup" data-ani-delay="0.1s">
													<span>Welcome!</span> Affordable SEO Tools for Every Marketer</div>
												<h1 className="hero-title">
													<div className="title1" data-ani="slideinup" data-ani-delay="0.2s">Access
														Premium</div>
													<div className="title2" data-ani="slideinup" data-ani-delay="0.3s">SEO Tools
														Without</div>
													<div className="title3" data-ani="slideinup" data-ani-delay="0.4s">
														Breaking Bank</div>
												</h1>
												<div className="tg-button-wrap" data-ani="slideinup" data-ani-delay="0.5s">
													<Link href="https://seotoolsgroupbuy.us/single-tools-list/" className="btn btn-three" target="_blank" rel="noopener noreferrer">
														<span className="btn-text" data-text="Explore Plans" />
													</Link>
													<Link href="https://seotoolsgroupbuy.us/single-tools-list/" className="btn btn-four" target="_blank" rel="noopener noreferrer">
														<span className="btn-text" data-text="All Tools" />
													</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
							</SwiperSlide>
						</div>
						<div className="slider-pagination2" />
					</Swiper>
				</div>
			</section>

		</>
	)
}
