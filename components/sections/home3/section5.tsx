'use client'
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import "@/node_modules/react-modal-video/css/modal-video.css"
import Link from 'next/link'

export default function Section5() {
    const [isOpen, setOpen] = useState(false)
	return (
		<>

			<section className="video-area-1 pt-120 pb-120 overflow-hidden position-relative">
				<div className="video-bg-shape1 spin"><img src="/assets/img/bg/video-bg-shape1-1.png" alt="img" /></div>
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-7">
							<div className="section__title text-center mb-50">
								<span className="sub-title text-anim">Watch Company Video</span>
								<h2 className="title text-anim2">Valom is your all-in-one human
									resources platform
								</h2>
								<p className="mt-4">Simplifying HR and payroll management by automating routine tasks, securing employee data, and providing insightful analytics.</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<div className="video-wrap1">
								<div className="video-thumb-box1">
									<img src="/assets/img/others/video1-1.png" alt="img" />
									<a onClick={() => setOpen(true)} className="video-link popup-video">Watch Our Video <span className="video-btn"><i className="far fa-play-circle" /></span>
									</a>
									<h4 className="video-text">Watch Video</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<ModalVideo channel='youtube' isOpen={isOpen} videoId="JXMWOmuR1hU" onClose={() => setOpen(false)} />
		</>
	)
}
