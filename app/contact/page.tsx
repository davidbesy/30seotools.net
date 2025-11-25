
'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"

export default function Contact() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: ''
	})

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		const { name, value } = e.target
		setFormData(prev => ({
			...prev,
			[name]: value
		}))
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		
		// Create WhatsApp message
		const whatsappMessage = `*Contact Form Submission*\n\n` +
			`*Name:* ${formData.name}\n` +
			`*Email:* ${formData.email}\n` +
			`*Message:* ${formData.message}`
		
		// Encode message for WhatsApp URL
		const encodedMessage = encodeURIComponent(whatsappMessage)
		const whatsappUrl = `https://wa.me/15205636362?text=${encodedMessage}`
		
		// Open WhatsApp
		window.open(whatsappUrl, '_blank')
		
		// Reset form
		setFormData({
			name: '',
			email: '',
			message: ''
		})
	}
	return (
		<>
			<Layout headerStyle={1} footerStyle={1}>
				<>
					<section className="breadcrumb__area fix" data-background="assets/img/bg/breadcrumb-bg.png">
						<div className="breadcrumb__bg-shape" />
						<div className="container">
							<div className="row align-items-center">
								<div className="col-xl-6">
									<div className="breadcrumb__content">
										<h3 className="title">Contact Us</h3>
									</div>
								</div>
								<div className="col-xl-6">
									<div className="breadcrumb-wrap">
										<nav className="breadcrumb">
											<span property="itemListElement" typeof="ListItem">
												<Link href="/">Home</Link>
											</span>
											<span className="breadcrumb-separator">/</span>
											<span property="itemListElement" typeof="ListItem">Contact Us</span>
										</nav>
									</div>
								</div>
							</div>
						</div>
					</section>
					{/* breadcrumb-area-end */}
					{/*==============================
						Contact Area
					==============================*/}
					<section className="contact-page-area overflow-hidden pt-120">
						<div className="container">
							<div className="contact-wrap2 pt-120 pb-120 smoke5-bg text-center">
								<div className="row justify-content-end">
									<div className="col-xl-12">
										<div className="contact-form-wrap2">
											<div className="section__title mb-30">
												<span className="sub-title">Get In Touch</span>
												<h2 className="title">Needs Help? Let’s Get in Touch</h2>
											</div>
											<form onSubmit={handleSubmit} className="contact__form">
												<div className="row gy-4">
													<div className="col-lg-6">
														<div className="form-group">
															<input 
																type="text" 
																className="form-control style-white" 
																name="name" 
																id="name" 
																placeholder="Your Name" 
																value={formData.name}
																onChange={handleInputChange}
																required
															/>
														</div>
													</div>
													<div className="col-lg-6">
														<div className="form-group">
															<input 
																type="email" 
																className="form-control style-white" 
																name="email" 
																id="email" 
																placeholder="Email Address" 
																value={formData.email}
																onChange={handleInputChange}
																required
															/>
														</div>
													</div>
													<div className="col-12">
														<div className="form-group">
															<textarea 
																name="message" 
																placeholder="Type Your Message" 
																id="contactForm" 
																className="form-control style-white"
																value={formData.message}
																onChange={handleInputChange}
																required
															/>
														</div>
													</div>
												</div>
												<button type="submit" className="btn mt-30">
													<span className="btn-text" data-text="Send WhatsApp" />
												</button>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					{/*======== / Contact Section ========*/}
					{/* Contact Information */}
					<section className="contact-info-area pt-120 pb-120">
						<div className="container">
							<div className="row">
								<div className="col-12">
									<div className="section__title text-center mb-60">
										<span className="sub-title">Contact Information</span>
										<h2 className="title">Connect with us through any of these channels for immediate support and assistance.</h2>
									</div>
								</div>
							</div>
							<div className="row g-4">
								<div className="col-lg-3 col-md-6">
									<div className="contact-info-card text-center">
										<div className="contact-info-icon mb-20">
											<i className="fas fa-envelope-open-text" />
										</div>
										<h4 className="box-title mb-10">Email Support</h4>
										<p className="mb-15"><a href="mailto:admin@groupbuyseotool.us">admin@groupbuyseotool.us</a></p>
										<p className="text-sm">Available 24/7 - Quick Response</p>
									</div>
								</div>
								<div className="col-lg-3 col-md-6">
									<div className="contact-info-card text-center">
										<div className="contact-info-icon mb-20">
											<i className="fab fa-whatsapp" />
										</div>
										<h4 className="box-title mb-10">WhatsApp Support</h4>
										<p className="mb-15"><a href="https://wa.me/15205636362" target="_blank" rel="noopener noreferrer">+1 (520) 563-6362</a></p>
										<p className="text-sm">Quick response - Message us anytime</p>
									</div>
								</div>
								<div className="col-lg-3 col-md-6">
									<div className="contact-info-card text-center">
										<div className="contact-info-icon mb-20">
											<i className="fab fa-skype" />
										</div>
										<h4 className="box-title mb-10">Skype Support</h4>
										<p className="mb-15"><a href="skype:seogroupbuy.support?chat">seogroupbuy.support</a></p>
										<p className="text-sm">Direct communication with our team</p>
									</div>
								</div>
								<div className="col-lg-3 col-md-6">
									<div className="contact-info-card text-center">
										<div className="contact-info-icon mb-20">
											<i className="fas fa-ticket-alt" />
										</div>
										<h4 className="box-title mb-10">Support Tickets</h4>
										<p className="mb-15">Track all your requests</p>
										<p className="text-sm">Organized support system</p>
									</div>
								</div>
							</div>
							<div className="row mt-60">
								<div className="col-lg-8 offset-lg-2">
									<div className="business-hours-card">
										<div className="section__title text-center mb-40">
											<h3 className="title">Business Hours</h3>
											<p className="mt-10">Our support team is available during the following hours. Emergency support available 24/7.</p>
										</div>
										<div className="business-hours-list">
											<div className="hours-item">
												<div className="hours-day">
													<span>Monday - Friday</span>
												</div>
												<div className="hours-time">
													<span>9:00 AM - 6:00 PM</span>
												</div>
											</div>
											<div className="hours-item">
												<div className="hours-day">
													<span>Saturday</span>
												</div>
												<div className="hours-time">
													<span>10:00 AM - 4:00 PM</span>
												</div>
											</div>
											<div className="hours-item">
												<div className="hours-day">
													<span>Sunday</span>
												</div>
												<div className="hours-time">
													<span>Closed</span>
												</div>
											</div>
										</div>
										<p className="text-center mt-30 text-sm">
											<em>* Emergency support is available 24/7 for critical issues and urgent matters</em>
										</p>
									</div>
								</div>
							</div>
						</div>
					</section>
					{/* Contact Information End */}
				</>
			</Layout>
		</>
	)
}