'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

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
	}
  };
    

import Link from 'next/link'

export default function Section9() {
	// Define project data array
	const projects = [
		{
			image: "/assets/img/project/project2-1.jpg",
			tags: ["Building", "Business", "Growth"],
			title: "Financial Resilience Planning"
		},
		{
			image: "/assets/img/project/project2-2.jpg",
			tags: ["Building", "Business", "Growth"],
			title: "Financial Resilience Planning"
		},
		{
			image: "/assets/img/project/project2-1.jpg",
			tags: ["Building", "Business", "Growth"],
			title: "Financial Resilience Planning"
		},
		{
			image: "/assets/img/project/project2-2.jpg",
			tags: ["Building", "Business", "Growth"],
			title: "Financial Resilience Planning"
		}
	]

	return (
		<>
			<section className="project-area-2 pt-120 overflow-hidden">
				<div className="container">
					<div className="row justify-content-center align-items-center">
						<div className="col-xl-7 col-lg-10">
							<div className="section__title text-center mb-50">
								<span className="sub-title text-white text-anim">Recent Projects</span>
								<h2 className="title text-white text-anim2">
									We are building great future together, Be with us
								</h2>
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="project-slider2 overflow-hidden">
						<Swiper {...swiperOptions}
							className="tg-swiper__slider swiper-container"
							id="projectSlider2"
							data-swiper-options='{
               
              }'
						>
							<div className="swiper-wrapper">
								{projects.map((project, index) => (
									<SwiperSlide key={index}>
										<div className="project-card2">
											<div className="project-thumb image-anim">
												<img src={project.image} alt="img" />
											</div>
											<div className="project-card-details">
												<span className="project-card-tag">
													{project.tags.map((tag, tagIndex) => (
														<Link href="/project-details" key={tagIndex}>
															{tag}{tagIndex < project.tags.length - 1 ? ',' : ''}
														</Link>
													))}
												</span>
												<h4 className="project-title">
													<Link href="/project-details">
														{project.title}
														<div className="icon-btn">
															<i className="fas fa-arrow-right" />
														</div>
													</Link>
												</h4>
											</div>
										</div>
									</SwiperSlide>
								))}
							</div>
						</Swiper>
					</div>
				</div>
			</section>
		</>
	)
}