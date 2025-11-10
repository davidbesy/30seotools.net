'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	effect: 'fade', // Enable fade effect
	slidesPerView: 1, // Show 1 slide at a time
	autoHeight: true, // Enable auto height adjustment
	autoplay: {
		delay: 3000, // Set autoplay delay to 1 second (optional, add if needed)
	},
}


import Link from 'next/link'

export default function Section1() {
	// Define slides data array
	const slides = [
		{
			background: "assets/img/hero/hero-bg4-1.png",
			shapeBackground: "assets/img/hero/hero-bg-shape4-1.png",
			titleLines: [
				"Expertise advice for",
				"your business plans with",
				"guaranteed success"
			]
		},
		{
			background: "assets/img/hero/hero-bg4-2.png",
			shapeBackground: "assets/img/hero/hero-bg-shape4-1.png",
			titleLines: [
				"Expertise advice for",
				"your business plans with",
				"guaranteed success"
			]
		}
	]

	return (
		<>
			<section className="hero-wrapper hero-4">
				<div className="hero-slider4 overflow-hidden">
					<Swiper {...swiperOptions}
						className="tg-swiper__slider swiper-container"
						id="heroSlider4"
						data-swiper-options='{
              
            }'
					>
						<div className="swiper-wrapper">
							{slides.map((slide, index) => (
								<SwiperSlide
									data-background={slide.background}
									key={index}
								>
									<div
										className="hero-bg-shape4-1"
										data-background={slide.shapeBackground}
									/>
									<div className="hero-bg-shape4-2" />
									<div className="hero-bg-shape4-3" />
									<div className="hero-bg-shape4-4" />
									<div className="container">
										<div className="row">
											<div className="col-lg-12">
												<div className="hero-style4">
													<div
														className="sub-title"
														data-ani="slideinup"
														data-ani-delay="0.1s"
													>
														<span className="text-theme">Welcome!</span> Start Growing Your Business Today
													</div>
													<h1 className="hero-title">
														{slide.titleLines.map((line, lineIndex) => (
															<div
																className={`title${lineIndex + 1}`}
																data-ani="slideinup"
																data-ani-delay={`${0.2 + lineIndex * 0.1}s`}
																key={lineIndex}
															>
																{line}
															</div>
														))}
													</h1>
													<div
														className="tg-button-wrap"
														data-ani="slideinup"
														data-ani-delay="0.5s"
													>
														<Link href="/appointment" className="btn btn-three">
															<span className="btn-text" data-text="Make an Appointment" />
														</Link>
														<Link href="/service" className="btn btn-seven">
															<span className="btn-text" data-text="Our Services" />
														</Link>
													</div>
												</div>
											</div>
										</div>
									</div>
								</SwiperSlide>
							))}
						</div>
						<button
							data-slider-prev="#heroSlider4"
							className="slider-arrow slider-prev"
						>
							<i className="fas fa-arrow-left" />
						</button>
						<button
							data-slider-next="#heroSlider4"
							className="slider-arrow slider-next"
						>
							<i className="fas fa-arrow-right" />
						</button>
					</Swiper>
				</div>
			</section>
		</>
	)
}