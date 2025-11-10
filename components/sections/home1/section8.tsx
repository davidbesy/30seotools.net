'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
        modules: [Autoplay, Pagination, Navigation],
        slidesPerView: 3,
        spaceBetween: 30,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: true,

        // Navigation
        navigation: {
            nextEl: '.h1n',
            prevEl: '.h1p',
        },

        // Pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

				breakpoints:{
            320: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            575: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            991: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1199: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1350: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        }
    };
    

import Link from 'next/link'

export default function Section8() {
	// Define project data array
	const projects = [
		{
			category: "IT Solution",
			title: "Business Growth Strategy",
			image: "/assets/img/project/project1-1.jpg"
		},
		{
			category: "Business Solution",
			title: "Business Growth Development",
			image: "/assets/img/project/project1-2.jpg"
		},
		{
			category: "Financial Solution",
			title: "Financial Resilience Planning",
			image: "/assets/img/project/project1-3.jpg"
		},
		{
			category: "Business Growth",
			title: "Strategic Roadmap Development",
			image: "/assets/img/project/project1-4.jpg"
		},
		// Repeated projects for slider continuity
		{
			category: "IT Solution",
			title: "Business Growth Strategy",
			image: "/assets/img/project/project1-1.jpg"
		},
		{
			category: "Business Solution",
			title: "Business Growth Development",
			image: "/assets/img/project/project1-2.jpg"
		},
		{
			category: "Financial Solution",
			title: "Financial Resilience Planning",
			image: "/assets/img/project/project1-3.jpg"
		},
		{
			category: "Business Growth",
			title: "Strategic Roadmap Development",
			image: "/assets/img/project/project1-4.jpg"
		}
	]

	return (
		<>
			<section className="project-area-1 overflow-hidden">
				<div className="container">
					<div className="row justify-content-between align-items-center">
						<div className="col-xl-6 col-lg-7">
							<div className="section__title mb-50">
								<span className="sub-title text-anim">Our LATEST PROJECTS</span>
								<h2 className="title text-anim2">Our Successful Projects</h2>
							</div>
						</div>
						<div className="col-auto">
							<div className="tg-button-wrap mb-50">
								<button data-slider-prev="#projectSlider1" className="slider-arrow default btn btn-five">
									<i className="fas fa-arrow-left" />
									<div className="btn-text" data-text="PREV" />
								</button>
								<button data-slider-next="#projectSlider1" className="slider-arrow default btn btn-five">
									<span className="btn-text" data-text="NEXT" />
									<i className="fas fa-arrow-right" />
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="container-fluid p-0">
					<div className="project-slider1 overflow-hidden">
						<Swiper {...swiperOptions}
							className="tg-swiper__slider swiper-container"
							id="projectSlider1"
							data-swiper-options='{
                "loop": true,
                "autoplay": { "delay": 1000 },
                "breakpoints": {
                  "0": { "spaceBetween": 30, "slidesPerView": 1 },
                  "375": { "spaceBetween": 30, "slidesPerView": 1 },
                  "575": { "spaceBetween": 30, "slidesPerView": 1 },
                  "768": { "spaceBetween": 30, "slidesPerView": 2 },
                  "992": { "spaceBetween": 30, "slidesPerView": 3 },
                  "1400": { "spaceBetween": 30, "slidesPerView": 4 }
                }
              }'
						>
							<div className="swiper-wrapper">
								{projects.map((project, index) => (
									<SwiperSlide key={index}>
										<div className="project-card image-anim">
											<div className="project-thumb">
												<img src={project.image} alt="img" />
											</div>
											<div className="project-card-details">
												<span className="project-subtitle">{project.category}</span>
												<h4 className="project-title">
													<Link href="/project-details">{project.title}</Link>
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