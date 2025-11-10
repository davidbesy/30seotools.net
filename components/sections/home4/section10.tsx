'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Link from 'next/link'


const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  loop: true,
  autoplay: { delay: 1000 },
  breakpoints: {
    0: { spaceBetween: 30, slidesPerView: 1 },
    375: { spaceBetween: 30, slidesPerView: 1 },
    575: { spaceBetween: 30, slidesPerView: 1 },
    768: { spaceBetween: 30, slidesPerView: 1 },
    992: { spaceBetween: 30, slidesPerView: 1 },
    1400: { spaceBetween: 30, slidesPerView: 1 }
  }
};

const swiperOptions2 = {
  modules: [Autoplay, Pagination, Navigation],
  loop: true,
  autoplay: { delay: 1000 },
  thumbs: { swiper: '#testiSlider2' }, // Correct usage of thumbs
  breakpoints: {
    0: { spaceBetween: 30, slidesPerView: 1 },
    375: { spaceBetween: 30, slidesPerView: 1 },
    575: { spaceBetween: 30, slidesPerView: 1 },
    768: { spaceBetween: 30, slidesPerView: 1 },
    992: { spaceBetween: 30, slidesPerView: 1 },
    1200: { spaceBetween: 30, slidesPerView: 2 }
  }
};
    


export default function Section10() {
	// Define testimonials data array
	const testimonials = [
		{
			text: "Working with Valom has been a game-changer for our organization. Their team took the time to understand our unique challenges and developed a customized strategy that helped us streamline our operations and boost efficiency",
			author: "Meliano Smith",
			designation: "CEO, Hosak Int. Ltd.",
			image: "/assets/img/testimonial/2-1.png"
		},
		{
			text: "Working with Valom has been a game-changer for our organization. Their team took the time to understand our unique challenges and developed a customized strategy that helped us streamline our operations and boost efficiency",
			author: "Jasline Hiseel",
			designation: "CEO, Hosak Int. Ltd.",
			image: "/assets/img/testimonial/2-2.png"
		},
		{
			text: "Working with Valom has been a game-changer for our organization. Their team took the time to understand our unique challenges and developed a customized strategy that helped us streamline our operations and boost efficiency",
			author: "Meliano Smith",
			designation: "CEO, Hosak Int. Ltd.",
			image: "/assets/img/testimonial/2-1.png"
		},
		{
			text: "Working with Valom has been a game-changer for our organization. Their team took the time to understand our unique challenges and developed a customized strategy that helped us streamline our operations and boost efficiency",
			author: "Jasline Hiseel",
			designation: "CEO, Hosak Int. Ltd.",
			image: "/assets/img/testimonial/2-2.png"
		}
	]

	return (
		<>
			<section className="testimonial-area-2 pt-120 pb-120 overflow-hidden">
				<div className="container">
					<div className="row align-items-center justify-content-between">
						<div className="col-lg-7">
							<div className="section__title mb-50">
								<span className="sub-title text-anim">Customer Feedbacks</span>
								<h2 className="title text-anim2">What They’re Saying</h2>
							</div>
						</div>
						<div className="col-lg-auto">
							<div className="tg-button-wrap mb-60">
								<Link href="/appointment" className="btn">
									<span className="btn-text" data-text="Write Your Experience" />
								</Link>
							</div>
						</div>
					</div>
					<div className="testimonial-wrap2">
						<div className="testimonial-thumb2">
							<img src="/assets/img/testimonial/testimonial-thumb-2.png" alt="img" />
						</div>
						<div className="slider-area">
							<Swiper {...swiperOptions}
								className="tg-swiper__slider swiper-container testi-slider2"
								id="testiSlider2"
								data-swiper-options='{
                }'
							>
								<div className="swiper-wrapper">
									{testimonials.map((testimonial, index) => (
										<SwiperSlide key={`text-${index}`}>
											<div className="testimonial-card2">
												<p className="testi-text">"{testimonial.text}"</p>
											</div>
										</SwiperSlide>
									))}
								</div>
							</Swiper>
							<Swiper {...swiperOptions2}
								className="tg-swiper__slider swiper-container testi-thumb-slider2"
								id="testiThumbSlider2"
								data-swiper-options='{
                }'
							>
								<div className="swiper-wrapper">
									{testimonials.map((testimonial, index) => (
										<SwiperSlide key={`author-${index}`}>
											<div className="testimonial-author-card2">
												<div className="testi-author-thumb">
													<img src={testimonial.image} alt="img" />
												</div>
												<div className="media-body">
													<h4 className="testimonial-card-title">{testimonial.author}</h4>
													<p className="testimonial-card-desig">{testimonial.designation}</p>
												</div>
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