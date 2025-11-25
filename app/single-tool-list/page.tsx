'use client'

import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useEffect, useState } from "react"

interface Tool {
	name: string
	category: string
	originalPrice: string
	currentPrice: string
	image: string
	link: string
}

export default function SingleToolList() {
	const [tools, setTools] = useState<Tool[]>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		fetchTools()
	}, [])

	const fetchTools = async () => {
		try {
			setLoading(true)
			setError(null)
			
			const response = await fetch('/api/scrape-tools')
			
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`)
			}
			
			const data = await response.json()
			
			console.log('API Response:', { success: data.success, toolsCount: data.tools?.length })
			
			// Always use tools from API if available (API has fallback built-in)
			if (data.success && Array.isArray(data.tools) && data.tools.length > 0) {
				setTools(data.tools)
				console.log(`Loaded ${data.tools.length} tools from API`)
			} else if (data.success && Array.isArray(data.tools) && data.tools.length === 0) {
				// If API returns empty array, show error
				setError('No tools found. Please try again later.')
				console.warn('API returned empty tools array')
			} else {
				// Fallback: Use hardcoded popular tools only if API structure is wrong
				setError('Failed to load tools from server')
				console.error('Invalid API response structure:', data)
			}
		} catch (err) {
			setError('Failed to load tools. Please refresh the page.')
			console.error('Error fetching tools:', err)
		} finally {
			setLoading(false)
		}
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
										<h3 className="title">Single Tool List</h3>
									</div>
								</div>
								<div className="col-xl-6">
									<div className="breadcrumb-wrap">
										<nav className="breadcrumb">
											<span property="itemListElement" typeof="ListItem">
												<Link href="/">Home</Link>
											</span>
											<span className="breadcrumb-separator">/</span>
											<span property="itemListElement" typeof="ListItem">Single Tool List</span>
										</nav>
									</div>
								</div>
							</div>
						</div>
					</section>
					{/* breadcrumb-area-end */}
					{/*==============================
						Single Tool List Area
					==============================*/}
					<section className="service-area-1 pt-120 pb-120 position-relative">
						<div className="service-bg1-1" />
						<div className="container">
							<div className="row justify-content-center">
								<div className="col-12">
									<div className="section__title text-center mb-50">
										<span className="sub-title text-anim">Most Popular SEO Tools</span>
										<h2 className="title text-white text-anim2">Single Tool List</h2>
									</div>
								</div>
							</div>
							{loading ? (
								<div className="row justify-content-center">
									<div className="col-12 text-center">
										<div className="spinner-border text-primary" role="status">
											<span className="visually-hidden">Loading...</span>
										</div>
										<p className="mt-3 text-white">Loading tools...</p>
									</div>
								</div>
							) : error ? (
								<div className="row justify-content-center">
									<div className="col-12 text-center">
										<p className="text-white">{error}</p>
									</div>
								</div>
							) : tools.length === 0 ? (
								<div className="row justify-content-center">
									<div className="col-12 text-center">
										<p className="text-white">No tools available at the moment. Please try again later.</p>
									</div>
								</div>
							) : (
								<div className="row gy-30 justify-content-center">
									{tools.map((tool, index) => (
										<div key={index} className="col-lg-4 col-md-6">
											<div className="service-card">
												<div className="box-content">
													<div className="box-content-inner">
														<span className="box-subtitle">{tool.category}</span>
														<h4 className="box-title">
															<Link href={tool.link} target="_blank" rel="noopener noreferrer">
																{tool.name}
															</Link>
														</h4>
														<div className="box-price mb-20">
															{tool.originalPrice && (
																<span className="original-price" style={{ textDecoration: 'line-through', marginRight: '10px', color: '#999' }}>
																	{tool.originalPrice}
																</span>
															)}
															<span className="current-price" style={{ color: '#4CAF50', fontWeight: 'bold', fontSize: '18px' }}>
																{tool.currentPrice}
															</span>
														</div>
														<Link 
															href="https://members.seotoolsgroupbuy.us/signup" 
															className="btn btn-three" 
															target="_blank" 
															rel="noopener noreferrer"
														>
															<span className="btn-text" data-text="Buy Now" />
															<i className="fas fa-arrow-right" />
														</Link>
													</div>
												</div>
											</div>
										</div>
									))}
								</div>
							)}
						</div>
					</section>
				</>
			</Layout>
		</>
	)
}

