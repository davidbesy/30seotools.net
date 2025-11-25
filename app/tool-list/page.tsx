import Layout from "@/components/layout/Layout"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Pricing Plans - SEO Tools Group Buy",
	description: "Choose from our affordable pricing plans to access premium SEO tools. Lite Plan $10/month, Small Plan $15/month, Ahref$ Combo $25/month, and Mega Plan $50/month.",
	alternates: {
		canonical: 'https://30seotools.net/tool-list',
	},
	openGraph: {
		title: 'Pricing Plans - SEO Tools Group Buy',
		description: 'Choose from our affordable pricing plans to access premium SEO tools.',
		url: 'https://30seotools.net/tool-list',
	},
}

export default function ToolList() {
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
										<h3 className="title">Complete Tool List</h3>
									</div>
								</div>
								<div className="col-xl-6">
									<div className="breadcrumb-wrap">
										<nav className="breadcrumb">
											<span property="itemListElement" typeof="ListItem">
												<Link href="/">Home</Link>
											</span>
											<span className="breadcrumb-separator">/</span>
											<span property="itemListElement" typeof="ListItem">Tool List</span>
										</nav>
									</div>
								</div>
							</div>
						</div>
					</section>
					{/* breadcrumb-area-end */}
					{/*==============================
						Tool List Area
					==============================*/}
					<section className="pricing-area-1 pt-120 pb-120 overflow-hidden position-relative">
						<div className="container">
							<div className="row justify-content-center">
								<div className="col-xl-8 col-lg-9">
									<div className="section__title text-center mb-50">
										<span className="sub-title text-anim">Complete Tool Lists</span>
										<h2 className="title text-anim2">All Tools Included in Each Plan</h2>
									</div>
								</div>
							</div>
							<div className="row gy-40">
								{/* Lite Plan */}
								<div className="col-xl-3 col-lg-4 col-md-6">
									<div className="pricing-card">
										<div className="pricing-card_thumb">
											<h4 className="pricing-card_price"><span className="currency">$</span>10<span className="duration">/Month</span></h4>
										</div>
										<div className="pricing-card_details">
											<h4 className="pricing-card_title">Lite Plan</h4>
											<div className="checklist">
												<ul className="list-wrap">
													<li><i className="fas fa-check" /> SEMrush</li>
													<li><i className="fas fa-check" /> Canva</li>
													<li><i className="fas fa-check" /> Grammarly</li>
													<li><i className="fas fa-check" /> Woorank</li>
													<li><i className="fas fa-check" /> Spin Rewriter</li>
													<li><i className="fas fa-check" /> Ubersuggest</li>
													<li><i className="fas fa-check" /> Ispionage</li>
													<li><i className="fas fa-check" /> StockUnlimited</li>
													<li><i className="fas fa-check" /> CBEngine</li>
													<li><i className="fas fa-check" /> Buzzstream</li>
													<li><i className="fas fa-check" /> Unbounce</li>
													<li><i className="fas fa-check" /> Quillbot AI</li>
												</ul>
											</div>
											<div className="tg-button-wrap justify-content-center mt-30">
												<Link href="https://members.seotoolsgroupbuy.us/signup" className="btn w-100" target="_blank" rel="noopener noreferrer">
													<span className="btn-text" data-text="Buy Now" />
												</Link>
											</div>
										</div>
									</div>
								</div>

								{/* Small Plan */}
								<div className="col-xl-3 col-lg-4 col-md-6">
									<div className="pricing-card">
										<div className="pricing-card_thumb">
											<h4 className="pricing-card_price"><span className="currency">$</span>15<span className="duration">/Month</span></h4>
										</div>
										<div className="pricing-card_details">
											<h4 className="pricing-card_title">Small Plan</h4>
											<div className="checklist">
												<ul className="list-wrap">
													<li><i className="fas fa-check" /> SEMrush</li>
													<li><i className="fas fa-check" /> Moz Pro</li>
													<li><i className="fas fa-check" /> Majestic</li>
													<li><i className="fas fa-check" /> Ubersuggest</li>
													<li><i className="fas fa-check" /> Spyfu</li>
													<li><i className="fas fa-check" /> Ispionage</li>
													<li><i className="fas fa-check" /> KwFinder</li>
													<li><i className="fas fa-check" /> Pexda</li>
													<li><i className="fas fa-check" /> SaleHoo</li>
													<li><i className="fas fa-check" /> StockUnlimited</li>
													<li><i className="fas fa-check" /> Spin Rewriter</li>
													<li><i className="fas fa-check" /> Grammarly</li>
													<li><i className="fas fa-check" /> Buzzsumo</li>
													<li><i className="fas fa-check" /> Indexifications</li>
													<li><i className="fas fa-check" /> Lynda</li>
													<li><i className="fas fa-check" /> Woorank</li>
													<li><i className="fas fa-check" /> Envato Elements</li>
													<li><i className="fas fa-check" /> Skills Share</li>
													<li><i className="fas fa-check" /> Spamzilla</li>
													<li><i className="fas fa-check" /> Cognitive SEO</li>
													<li><i className="fas fa-check" /> Canva Pro</li>
													<li><i className="fas fa-check" /> Crello</li>
													<li><i className="fas fa-check" /> CBEngine</li>
													<li><i className="fas fa-check" /> Buzzstream</li>
													<li><i className="fas fa-check" /> Vyond</li>
													<li><i className="fas fa-check" /> LongTailPro</li>
													<li><i className="fas fa-check" /> Article Builder</li>
													<li><i className="fas fa-check" /> WordAi</li>
													<li><i className="fas fa-check" /> Seo Profiler</li>
													<li><i className="fas fa-check" /> SE Ranking</li>
													<li><i className="fas fa-check" /> Themes/Plugin WordPress</li>
													<li><i className="fas fa-check" /> Spinner Português</li>
													<li><i className="fas fa-check" /> Fotojet</li>
													<li><i className="fas fa-check" /> Audioblocks</li>
													<li><i className="fas fa-check" /> Storyblocks</li>
													<li><i className="fas fa-check" /> Videoblocks</li>
													<li><i className="fas fa-check" /> Unbounce</li>
													<li><i className="fas fa-check" /> Quillbot</li>
													<li><i className="fas fa-check" /> Chat GPT</li>
												</ul>
											</div>
											<div className="tg-button-wrap justify-content-center mt-30">
												<Link href="https://members.seotoolsgroupbuy.us/signup" className="btn w-100" target="_blank" rel="noopener noreferrer">
													<span className="btn-text" data-text="Buy Now" />
												</Link>
											</div>
										</div>
									</div>
								</div>

								{/* Ahref$ Combo */}
								<div className="col-xl-3 col-lg-4 col-md-6">
									<div className="pricing-card active">
										<div className="pricing-card_thumb">
											<div className="pricing-card_tag">Popular</div>
											<h4 className="pricing-card_price"><span className="currency">$</span>25<span className="duration">/Month</span></h4>
										</div>
										<div className="pricing-card_details">
											<h4 className="pricing-card_title">Ahref$ Combo</h4>
											<div className="checklist">
												<ul className="list-wrap">
													<li><i className="fas fa-check" /> AHREF$</li>
													<li><i className="fas fa-check" /> SEMR$H guru</li>
													<li><i className="fas fa-check" /> M0Z PR0</li>
													<li><i className="fas fa-check" /> Majestic</li>
													<li><i className="fas fa-check" /> Kwfinder</li>
													<li><i className="fas fa-check" /> Keywordtool i0</li>
													<li><i className="fas fa-check" /> Grammarly</li>
													<li><i className="fas fa-check" /> Helium 10</li>
													<li><i className="fas fa-check" /> Jungle Scout</li>
													<li><i className="fas fa-check" /> Chat GPT</li>
													<li><i className="fas fa-check" /> Spyfu</li>
													<li><i className="fas fa-check" /> EcomHunt</li>
													<li><i className="fas fa-check" /> Ispionage</li>
													<li><i className="fas fa-check" /> Pexda</li>
													<li><i className="fas fa-check" /> SaleHoo</li>
													<li><i className="fas fa-check" /> StockUnlimited</li>
													<li><i className="fas fa-check" /> Spin Rewriter</li>
													<li><i className="fas fa-check" /> Buzzsumo</li>
													<li><i className="fas fa-check" /> Netflix</li>
													<li><i className="fas fa-check" /> Indexifications</li>
													<li><i className="fas fa-check" /> Lynda</li>
													<li><i className="fas fa-check" /> Woorank</li>
													<li><i className="fas fa-check" /> Envato Elements</li>
													<li><i className="fas fa-check" /> Skills Share</li>
													<li><i className="fas fa-check" /> Freepik</li>
													<li><i className="fas fa-check" /> Spamzilla</li>
													<li><i className="fas fa-check" /> Cognitive SEO</li>
													<li><i className="fas fa-check" /> Canva Pro</li>
													<li><i className="fas fa-check" /> Crello</li>
													<li><i className="fas fa-check" /> CBEngine</li>
													<li><i className="fas fa-check" /> Buzzstream</li>
													<li><i className="fas fa-check" /> Sellthetrend</li>
													<li><i className="fas fa-check" /> Vyond</li>
													<li><i className="fas fa-check" /> LongTailPro</li>
													<li><i className="fas fa-check" /> Article Builder</li>
													<li><i className="fas fa-check" /> WordAi</li>
													<li><i className="fas fa-check" /> Seo Profiler</li>
													<li><i className="fas fa-check" /> SE Ranking</li>
													<li><i className="fas fa-check" /> Themes/Plugin WordPress</li>
													<li><i className="fas fa-check" /> Spinner Português</li>
													<li><i className="fas fa-check" /> Fotojet</li>
													<li><i className="fas fa-check" /> Audioblocks</li>
													<li><i className="fas fa-check" /> Storyblocks</li>
													<li><i className="fas fa-check" /> Videoblocks</li>
													<li><i className="fas fa-check" /> Unbounce</li>
													<li><i className="fas fa-check" /> Jasper Ai</li>
													<li><i className="fas fa-check" /> Quillbot</li>
													<li><i className="fas fa-check" /> Chat GPT</li>
												</ul>
											</div>
											<div className="tg-button-wrap justify-content-center mt-30">
												<Link href="https://members.seotoolsgroupbuy.us/signup" className="btn w-100" target="_blank" rel="noopener noreferrer">
													<span className="btn-text" data-text="Buy Now" />
												</Link>
											</div>
										</div>
									</div>
								</div>

								{/* Mega Plan */}
								<div className="col-xl-3 col-lg-4 col-md-6">
									<div className="pricing-card">
										<div className="pricing-card_thumb">
											<h4 className="pricing-card_price"><span className="currency">$</span>50<span className="duration">/Month</span></h4>
										</div>
										<div className="pricing-card_details">
											<h4 className="pricing-card_title">Mega Plan</h4>
											<div className="checklist">
												<ul className="list-wrap">
													<li><i className="fas fa-check" /> Ahrefs</li>
													<li><i className="fas fa-check" /> SEMrush</li>
													<li><i className="fas fa-check" /> Moz Pro</li>
													<li><i className="fas fa-check" /> Ubersuggest</li>
													<li><i className="fas fa-check" /> Majestic</li>
													<li><i className="fas fa-check" /> keywordtool.io</li>
													<li><i className="fas fa-check" /> KwFinder</li>
													<li><i className="fas fa-check" /> Grammarly</li>
													<li><i className="fas fa-check" /> Helium 10</li>
													<li><i className="fas fa-check" /> Jungle Scout</li>
													<li><i className="fas fa-check" /> Chat GPT</li>
													<li><i className="fas fa-check" /> Spyfu</li>
													<li><i className="fas fa-check" /> EcomHunt</li>
													<li><i className="fas fa-check" /> Ispionage</li>
													<li><i className="fas fa-check" /> Pexda</li>
													<li><i className="fas fa-check" /> SaleHoo</li>
													<li><i className="fas fa-check" /> StockUnlimited</li>
													<li><i className="fas fa-check" /> Spin Rewriter</li>
													<li><i className="fas fa-check" /> Buzzsumo</li>
													<li><i className="fas fa-check" /> Netflix</li>
													<li><i className="fas fa-check" /> Indexifications</li>
													<li><i className="fas fa-check" /> Lynda</li>
													<li><i className="fas fa-check" /> Woorank</li>
													<li><i className="fas fa-check" /> Envato Elements</li>
													<li><i className="fas fa-check" /> Skills Share</li>
													<li><i className="fas fa-check" /> Freepik</li>
													<li><i className="fas fa-check" /> Spamzilla</li>
													<li><i className="fas fa-check" /> Cognitive SEO</li>
													<li><i className="fas fa-check" /> Canva Pro</li>
													<li><i className="fas fa-check" /> Crello</li>
													<li><i className="fas fa-check" /> CBEngine</li>
													<li><i className="fas fa-check" /> Buzzstream</li>
													<li><i className="fas fa-check" /> Sellthetrend</li>
													<li><i className="fas fa-check" /> Vyond</li>
													<li><i className="fas fa-check" /> LongTailPro</li>
													<li><i className="fas fa-check" /> Article Builder</li>
													<li><i className="fas fa-check" /> WordAi</li>
													<li><i className="fas fa-check" /> Seo Profiler</li>
													<li><i className="fas fa-check" /> SE Ranking</li>
													<li><i className="fas fa-check" /> Themes/Plugin WordPress</li>
													<li><i className="fas fa-check" /> Spinner Português</li>
													<li><i className="fas fa-check" /> Fotojet</li>
													<li><i className="fas fa-check" /> Audioblocks</li>
													<li><i className="fas fa-check" /> Storyblocks</li>
													<li><i className="fas fa-check" /> Videoblocks</li>
													<li><i className="fas fa-check" /> Unbounce</li>
													<li><i className="fas fa-check" /> Jasper Ai</li>
													<li><i className="fas fa-check" /> Quillbot</li>
													<li><i className="fas fa-check" /> Chat GPT</li>
												</ul>
											</div>
											<div className="tg-button-wrap justify-content-center mt-30">
												<Link href="https://members.seotoolsgroupbuy.us/signup" className="btn w-100" target="_blank" rel="noopener noreferrer">
													<span className="btn-text" data-text="Buy Now" />
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					{/*======== / Tool List Section ========*/}
				</>
			</Layout>
		</>
	)
}

