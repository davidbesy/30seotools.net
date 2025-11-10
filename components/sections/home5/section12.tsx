'use client'
import Link from 'next/link'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	loop: true,
	autoplay: { delay: 1000 },
	spaceBetween: 24,
	slidesPerView: 1,
	breakpoints: {
		1200: { slidesPerView: 2 },
		1500: { slidesPerView: 3 }
	}
}


export default function Section12() {
	// Define testimonials data array
	const testimonials = [
		{
			image: "/assets/img/testimonial/3-1.png",
			name: "Thomas Wilson",
			designation: "Director TMS.Inc",
			text: "The predictive analytics features have not only improved our decision-making but also significantly boosted our quarterly sales figures by 40%. It’s like having a future-proof navigator for our business."
		},
		{
			image: "/assets/img/testimonial/3-2.png",
			name: "Michael Foster",
			designation: "Director TMS.Inc",
			text: "The predictive analytics features have not only improved our decision-making but also significantly boosted our quarterly sales figures by 40%. It’s like having a future-proof navigator for our business."
		},
		{
			image: "/assets/img/testimonial/3-3.png",
			name: "George Arthur",
			designation: "Director TMS.Inc",
			text: "The predictive analytics features have not only improved our decision-making but also significantly boosted our quarterly sales figures by 40%. It’s like having a future-proof navigator for our business."
		},
		{
			image: "/assets/img/testimonial/3-1.png",
			name: "Thomas Wilson",
			designation: "Director TMS.Inc",
			text: "The predictive analytics features have not only improved our decision-making but also significantly boosted our quarterly sales figures by 40%. It’s like having a future-proof navigator for our business."
		},
		{
			image: "/assets/img/testimonial/3-2.png",
			name: "Michael Foster",
			designation: "Director TMS.Inc",
			text: "The predictive analytics features have not only improved our decision-making but also significantly boosted our quarterly sales figures by 40%. It’s like having a future-proof navigator for our business."
		},
		{
			image: "/assets/img/testimonial/3-3.png",
			name: "George Arthur",
			designation: "Director TMS.Inc",
			text: "The predictive analytics features have not only improved our decision-making but also significantly boosted our quarterly sales figures by 40%. It’s like having a future-proof navigator for our business."
		}
	]

	return (
		<>
			<section className="testimonial-area-3 overflow-hidden">
				<div
					className="testimonial-wrap3 pt-120 pb-120 bg-cover gray-bg"
					data-background="assets/img/bg/testimonial-bg-shape3-1.png"
				>
					<div className="container">
						<div className="row align-items-center justify-content-center">
							<div className="col-xl-6 col-lg-10">
								<div className="section__title text-center mb-50">
									<span className="sub-title text-anim">Testimonials</span>
									<h2 className="title text-white text-anim2">
										What Our Users Said About Valom
									</h2>
									<p className="sec-text text-white">
										Our AI business co-pilot is engineered to function not just as a standalone solution but as a central part of your digital ecosystem.
									</p>
									<div className="tg-button-wrap mt-40 justify-content-center">
										<Link href="/contact" className="btn btn-three">
											<span className="btn-text" data-text="Write Your Experience" />
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="slider-area">
							<Swiper {...swiperOptions}
								className="tg-swiper__slider swiper-container testi-slider3 overflow-hidden"
								id="testiSlider3"
								data-swiper-options='{}'
							>
								<div className="swiper-wrapper">
									{testimonials.map((testimonial, index) => (
										<SwiperSlide key={index}>
											<div className="testimonial-card3">
												<div className="testimonial-author-card3">
													<div className="testi-author-thumb">
														<img src={testimonial.image} alt={testimonial.name} />
													</div>
													<div className="media-body">
														<h4 className="testimonial-card-title">{testimonial.name}</h4>
														<p className="testimonial-card-desig">{testimonial.designation}</p>
													</div>
													<div className="testimonial-quote-icon">
														<i className="fas fa-quote-right" />
													</div>
												</div>
												<p className="testi-text">"{testimonial.text}"</p>
											</div>
										</SwiperSlide>
									))}
								</div>
							</Swiper>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}