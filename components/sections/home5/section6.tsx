'use client'
import Link from 'next/link'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	loop: true,
	autoplay: { delay: 1000 },
	breakpoints: {
		0: { spaceBetween: 30, slidesPerView: 1 },
		375: { spaceBetween: 30, slidesPerView: 1 },
		575: { spaceBetween: 30, slidesPerView: 1 },
		768: { spaceBetween: 30, slidesPerView: 1 },
		992: { spaceBetween: 30, slidesPerView: 2 },
		1400: { spaceBetween: 30, slidesPerView: 2 },
	},
	navigation: {
		nextEl: '.slider-next',
		prevEl: '.slider-prev',
	},
}

export default function Section6() {
	// Define projects data array
	const projects = [
		{
			image: "/assets/img/project/project3-1.jpg",
			tags: ["Building", "Business", "Growth"],
			title: "Business Growth Development",
			description: "Bring to the table win survival strategies to ensure proactive domination service development"
		},
		{
			image: "/assets/img/project/project3-2.jpg",
			tags: ["Building", "Business", "Growth"],
			title: "Strategic Roadmap Development",
			description: "Bring to the table win survival strategies to ensure proactive domination service development"
		},
		{
			image: "/assets/img/project/project3-1.jpg",
			tags: ["Building", "Business", "Growth"],
			title: "Business Growth Development",
			description: "Bring to the table win survival strategies to ensure proactive domination service development"
		},
		{
			image: "/assets/img/project/project3-2.jpg",
			tags: ["Building", "Business", "Growth"],
			title: "Strategic Roadmap Development",
			description: "Bring to the table win survival strategies to ensure proactive domination service development"
		}
	]

	return (
		<>
			<section className="project-area-3 pt-120 pb-120 overflow-hidden">
				<div className="container">
					{/* Section Header */}
					<div className="row justify-content-center align-items-center">
						<div className="col-xl-7 col-lg-10">
							<div className="section__title text-center mb-50">
								<span className="sub-title text-anim">Complete Projects</span>
								<h2 className="title text-anim2">Our Recently Completed Projects</h2>
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="project-slider3">
						{/* Swiper Slider */}
						<Swiper {...swiperOptions}
							className="tg-swiper__slider swiper-container overflow-hidden"
							id="projectSlider3"
							data-swiper-options='{}'
						>
							<div className="swiper-wrapper">
								{/* Dynamic Project Slides */}
								{projects.map((project, index) => (
									<SwiperSlide key={index}>
										<div className="project-card3">
											<div className="project-thumb image-anim">
												<img src={project.image} alt={project.title} />
											</div>
											<div className="project-card-details">
												<span className="project-card-tag">
													{project.tags.map((tag, tagIndex) => (
														<Link href="/project-details" key={tagIndex}>
															{tag}
															{tagIndex < project.tags.length - 1 && ','}
														</Link>
													))}
												</span>
												<div className="project-card-content">
													<h4 className="project-title">
														<Link href="/project-details">{project.title}</Link>
													</h4>
													<p className="box-text">{project.description}</p>
												</div>
											</div>
										</div>
									</SwiperSlide>
								))}
							</div>
						</Swiper>
						{/* Navigation Buttons */}
						<button
							data-slider-prev="#projectSlider3"
							className="slider-arrow slider-prev btn btn-six"
						>
							<i className="fas fa-arrow-left" />
						</button>
						<button
							data-slider-next="#projectSlider3"
							className="slider-arrow slider-next btn btn-six"
						>
							<i className="fas fa-arrow-right" />
						</button>
					</div>
				</div>
			</section>
		</>
	)
}