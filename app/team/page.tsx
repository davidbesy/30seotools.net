import CounterUp from '@/components/elements/CounterUp'
import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function About() {
	// Team data array
	const teamMembers = [
		{ name: "Andrew Smith", role: "Advisor", img: "/assets/img/team/team-1-1.jpg" },
		{ name: "Ethan Matthew", role: "Advisor", img: "/assets/img/team/team-1-2.jpg" },
		{ name: "Samuel Lucas", role: "Advisor", img: "/assets/img/team/team-1-3.jpg" }
	]

	// Counter data array
	const counters = [
		{ number: "35", title: "Years Of Experience", text: "Central to the consultancy's modus operandi is a commitment..." },
		{ number: "500+", title: "Official Project Completed", text: "Central to the consultancy's modus operandi is a commitment..." },
		{ number: "396+", title: "In-House Team Members", text: "Central to the consultancy's modus operandi is a commitment..." }
	]

	return (
		<>
			<Layout headerStyle={1} footerStyle={1}>
				<>
					{/*============================== Breadcrumb Area ==============================*/}
					<section className="breadcrumb__area fix" data-background="assets/img/bg/breadcrumb-bg.png">
						<div className="breadcrumb__bg-shape" />
						<div className="container">
							<div className="row align-items-center">
								<div className="col-xl-6">
									<div className="breadcrumb__content">
										<h3 className="title">
										Team Members</h3>
									</div>
								</div>
								<div className="col-xl-6">
									<div className="breadcrumb-wrap">
										<nav className="breadcrumb">
											<span property="itemListElement" typeof="ListItem">
												<Link href="/">Home</Link>
											</span>
											<span className="breadcrumb-separator">/</span>
											<span property="itemListElement" typeof="ListItem">Team Members</span>
										</nav>
									</div>
								</div>
							</div>
						</div>
					</section>

					{/*============================== About Area ==============================*/}
					<section className="about-area-2 pt-120 pb-120 overflow-hidden">
						<div className="container">
							<div className="about-wrap2">
								<div className="row gx-60 gy-5 align-items-center">
									<div className="col-xl-6">
										<div className="about-thumb2-1">
											<div className="img1">
												<div className="thumb image-anim">
													<img src="/assets/img/others/about2-1.jpg" alt="img" />
												</div>
											</div>
											<div className="img2">
												<div className="thumb image-anim">
													<img src="/assets/img/others/about2-2.jpg" alt="img" />
												</div>
											</div>
											<div className="about-bg-shape2-1">
												<div className="shape1" />
												<div className="shape2" />
											</div>
										</div>
									</div>
									<div className="col-xl-6">
										<div className="section__title">
											<span className="sub-title text-anim">About Amazing Company</span>
											<h2 className="title text-anim2">We’re Trusted Professional Consultancy Company</h2>
										</div>
										<p className="mt-30 mb-40">The business consultancy company stands as a stalwart beacon of guidance and innovation, offering a multifaceted array of services tailored to propel enterprises toward their zenith. At its core, this entity operates as a bastion of strategic insight, employing a cadre of seasoned professionals.</p>
										<div className="checklist-wrap">
											<ul className="list-wrap">
												<li>
													<span className="icon">
														<i className="fas fa-check-circle" />
													</span>
													Remain flexible and adaptive to swiftly respond to changing market dynamics and client needs.
												</li>
												<li>
													<span className="icon">
														<i className="fas fa-check-circle" />
													</span>
													Empower clients through knowledge transfer, skill-building, and fostering a culture of self-sufficiency.
												</li>
												<li>
													<span className="icon">
														<i className="fas fa-check-circle" />
													</span>
													Facilitate a culture of ongoing learning and refinement to ensure sustained success and growth.
												</li>
											</ul>
										</div>
										<div className="cta-link">Call to ask any question <Link href="/tel:52537561523">+525-3756-1523</Link></div>
										<div className="tg-button-wrap mt-30">
											<Link href="/appointment" className="btn">
												<span className="btn-text" data-text="Make An Appointment" />
											</Link>
											<Link href="/service" className="btn btn-six">
												<span className="btn-text" data-text="View Our Services" />
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>

					{/*============================== Counter Area ==============================*/}
					<section className="counter-area-1 pb-120 pt-120 pt-xl-0">
						<div className="container">
							<div className="row gy-30 justify-content-center">
								{counters.map((counter, index) => (
									<div key={index} className="col-lg-4 col-md-6">
										<div className="counter-card">
											<h3 className="counter-card_title">
												<CounterUp>{counter.number}</CounterUp>
											</h3>
											<p className="counter-card_subtitle">{counter.title}</p>
											<p className="counter-card_text">{counter.text}</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</section>

					{/*============================== Team Area ==============================*/}
					<section className="team-area-1 pt-120 pb-120 gray-bg section-radius position-relative">
						<div className="team-bg-shape3-1 d-xl-block d-none">
							<img src="/assets/img/bg/team-bg-shape3-1.png" alt="img" />
						</div>
						<div className="container">
							<div className="row justify-content-center">
								<div className="col-12">
									<div className="section__title text-center mb-50">
										<span className="sub-title text-anim">Team members</span>
										<h2 className="title text-white text-anim2">Our Dedicated People</h2>
									</div>
								</div>
							</div>
							<div className="row gy-30 justify-content-center">
								{teamMembers.map((member, index) => (
									<div key={index} className="col-lg-4 col-md-6">
										<div className="team-card">
											<div className="box-img image-anim">
												<Link href="/team-details" className="thumb">
													<img src={member.img} alt="img" />
												</Link>
												<div className="team-social">
													<button className="icon-btn"><i className="fas fa-share-alt" /></button>
													<div className="social-wrap">
														<Link target="_blank" href="/https://facebook.com/" tabIndex={-1}><i className="fab fa-facebook-f" /></Link>
														<Link target="_blank" href="/https://youtube.com/" tabIndex={-1}><i className="fab fa-youtube" /></Link>
														<Link target="_blank" href="/https://behance.com/" tabIndex={-1}><i className="fab fa-behance" /></Link>
														<Link target="_blank" href="/https://twitter.com/" tabIndex={-1}><i className="fab fa-twitter" /></Link>
													</div>
												</div>
											</div>
											<div className="team-card-details">
												<h4 className="box-title"><Link href="/team-details">{member.name}</Link></h4>
												<span className="box-text">{member.role}</span>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</section>

					{/*============================== Goal Area ==============================*/}
					<section className="goal-area-1 pt-120 pb-120 overflow-hidden">
						<div className="container">
							<div className="row gx-40 gy-5 justify-content-center align-items-center">
								<div className="col-xl-6">
									<div className="goal-thumb1-1 image-anim">
										<div className="img-bg-shape" data-mask-src="/assets/img/others/goal-img-mask1-2.png" />
										<div className="thumb" data-mask-src="/assets/img/others/goal-img-mask1-1.png">
											<img src="/assets/img/others/goal1-1.png" alt="img" />
										</div>
									</div>
								</div>
								<div className="col-xl-6">
									<div className="section__title mb-50">
										<span className="sub-title text-anim">OUR Business GOAL</span>
										<h2 className="title text-anim2">Make Every Stage in The Customer Journey</h2>
									</div>
									<div className="goal-grid-card">
										<div className="box-icon">
											<svg width={50} height={50} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
												{/* SVG Path 1 remains unchanged */}
												<path d="M48.2874 31.733H47.5529V6.36285C47.5529 4.87917 46.3458 3.67205 44.8621 3.67205H29.7209V1.71229C29.7209 0.76816 28.9528 0 28.0086 0H21.9911C21.0469 0 20.2788 0.76816 20.2788 1.71229V3.67205H15.102C14.6966 3.67205 14.3681 4.00056 14.3681 4.40593C14.3681 4.8113 14.6966 5.13981 15.102 5.13981H44.8622C45.5366 5.13981 46.0854 5.68844 46.0854 6.36295V31.7331H34.5274C34.1221 31.7331 33.7936 32.0616 33.7936 32.467C33.7936 32.8724 34.1221 33.2009 34.5274 33.2009H48.2874C48.4224 33.2009 48.532 33.3105 48.532 33.4455V35.1606C48.532 35.2956 48.4224 35.4053 48.2874 35.4053H9.14126C8.73589 35.4053 8.40737 35.7338 8.40737 36.1391C8.40737 36.5445 8.73589 36.873 9.14126 36.873H13.4059L10.9409 49.1214C10.8975 49.337 10.9531 49.5608 11.0925 49.7311C11.2319 49.9014 11.4403 50 11.6603 50H16.0626C16.412 50 16.7131 49.7536 16.782 49.4109L17.5865 45.4138H32.4588L33.2632 49.4109C33.3322 49.7536 33.6332 50 33.9826 50H38.3849C38.6049 50 38.8134 49.9013 38.9527 49.7311C39.0922 49.5608 39.1477 49.3371 39.1044 49.1214L36.6393 36.873H48.2874C49.2315 36.873 49.9997 36.1049 49.9997 35.1607V33.4456C49.9997 32.5012 49.2315 31.733 48.2874 31.733ZM21.7465 1.71229C21.7465 1.57733 21.8561 1.46767 21.9911 1.46767H28.0086C28.1436 1.46767 28.2533 1.57733 28.2533 1.71229V3.67205H21.7465V1.71229ZM30.7399 36.8727L31.5326 40.8117H18.5126L19.3054 36.8727H30.7399ZM15.4617 48.532H12.5566L14.903 36.8728H17.8083L15.4617 48.532ZM17.8818 43.9458L18.2172 42.2793H31.8279L32.1633 43.9458H17.8818ZM37.4886 48.532H34.5833L32.2368 36.8728H35.1421L37.4886 48.532Z" fill="currentColor" />
												<path d="M6.20582 35.4051H1.71229C1.57733 35.4051 1.46767 35.2954 1.46767 35.1604V33.4453C1.46767 33.3104 1.57733 33.2007 1.71229 33.2007H31.592C31.9974 33.2007 32.3259 32.8722 32.3259 32.4668C32.3259 32.0614 31.9974 31.7329 31.592 31.7329H3.91433V6.36285C3.91433 5.68844 4.46296 5.13972 5.13737 5.13972H12.1665C12.5719 5.13972 12.9004 4.8112 12.9004 4.40583C12.9004 4.00046 12.5719 3.67195 12.1665 3.67195H5.13747C3.65379 3.67195 2.44667 4.87907 2.44667 6.36276V31.7329H1.71229C0.76816 31.733 0 32.5012 0 33.4453V35.1604C0 36.1046 0.76816 36.8727 1.71229 36.8727H6.20582C6.61119 36.8727 6.93971 36.5442 6.93971 36.1389C6.93971 35.7335 6.61119 35.4051 6.20582 35.4051Z" fill="currentColor" />
												<path d="M17.703 12.4792C17.4129 12.196 16.9481 12.202 16.6653 12.4922L14.2826 14.9355L13.282 13.9624C12.9912 13.6797 12.5269 13.6864 12.2443 13.977C11.9617 14.2675 11.9682 14.7321 12.2588 15.0147L13.7848 16.4986C13.9274 16.6373 14.1119 16.7063 14.2963 16.7063C14.4872 16.7063 14.6779 16.6323 14.8218 16.4849L17.7161 13.517C17.999 13.2267 17.9932 12.7621 17.703 12.4792Z" fill="currentColor" />
												<path d="M20.4564 14.3555C20.4564 11.336 17.9999 8.87954 14.9805 8.87954C11.961 8.87954 9.50453 11.3361 9.50453 14.3555C9.50453 17.375 11.9611 19.8314 14.9805 19.8314C18 19.8314 20.4564 17.375 20.4564 14.3555ZM14.9805 18.3638C12.7703 18.3638 10.9722 16.5656 10.9722 14.3555C10.9722 12.1453 12.7703 10.3472 14.9805 10.3472C17.1906 10.3472 18.9888 12.1453 18.9888 14.3555C18.9888 16.5656 17.1906 18.3638 14.9805 18.3638Z" fill="currentColor" />
												<path d="M17.1418 23.3117C16.8551 23.0252 16.3905 23.0252 16.1039 23.3117L14.9805 24.4351L13.857 23.3117C13.5704 23.0252 13.1058 23.0252 12.8192 23.3117C12.5326 23.5983 12.5326 24.0629 12.8192 24.3496L13.9426 25.473L12.8192 26.5964C12.5326 26.883 12.5326 27.3477 12.8192 27.6343C12.9625 27.7776 13.1503 27.8493 13.3381 27.8493C13.5259 27.8493 13.7137 27.7776 13.857 27.6343L14.9805 26.5109L16.1039 27.6343C16.2473 27.7776 16.4351 27.8493 16.6229 27.8493C16.8106 27.8493 16.9984 27.7776 17.1418 27.6343C17.4283 27.3477 17.4283 26.883 17.1418 26.5964L16.0184 25.473L17.1418 24.3496C17.4284 24.0629 17.4284 23.5984 17.1418 23.3117Z" fill="currentColor" />
												<path d="M39.5228 23.3117C39.2362 23.0252 38.7715 23.0252 38.4849 23.3117L37.3615 24.4351L36.2381 23.3117C35.9514 23.0252 35.4868 23.0252 35.2002 23.3117C34.9136 23.5983 34.9136 24.0629 35.2002 24.3496L36.3236 25.473L35.2002 26.5964C34.9136 26.883 34.9136 27.3477 35.2002 27.6343C35.3435 27.7776 35.5313 27.8493 35.7191 27.8493C35.9069 27.8493 36.0947 27.7776 36.2381 27.6343L37.3615 26.5109L38.4849 27.6343C38.6283 27.7776 38.8161 27.8493 39.0039 27.8493C39.1917 27.8493 39.3795 27.7776 39.5228 27.6343C39.8094 27.3477 39.8094 26.883 39.5228 26.5964L38.3994 25.473L39.5228 24.3496C39.8094 24.0629 39.8094 23.5984 39.5228 23.3117Z" fill="currentColor" />
												<path d="M24.45 16.6499C24.5933 16.7932 24.7811 16.8648 24.9689 16.8648C25.1567 16.8648 25.3445 16.7932 25.4878 16.6499L26.6113 15.5265L27.7347 16.6499C27.8781 16.7932 28.0658 16.8648 28.2536 16.8648C28.4414 16.8648 28.6292 16.7932 28.7726 16.6499C29.0591 16.3633 29.0591 15.8986 28.7726 15.612L27.6492 14.4886L28.7726 13.3652C29.0591 13.0785 29.0591 12.6139 28.7726 12.3273C28.486 12.0408 28.0213 12.0408 27.7347 12.3273L26.6113 13.4507L25.4878 12.3273C25.2012 12.0408 24.7367 12.0407 24.45 12.3273C24.1634 12.6139 24.1634 13.0785 24.45 13.3652L25.5734 14.4886L24.45 15.612C24.1633 15.8986 24.1633 16.3633 24.45 16.6499Z" fill="currentColor" />
												<path d="M23.5016 25.4731C23.5016 27.1878 24.8966 28.5827 26.6114 28.5827C28.3261 28.5827 29.721 27.1877 29.721 25.4731C29.721 23.7585 28.326 22.3633 26.6114 22.3633C24.8967 22.3633 23.5016 23.7585 23.5016 25.4731ZM28.2533 25.4731C28.2533 26.3785 27.5166 27.1151 26.6113 27.1151C25.7059 27.1151 24.9693 26.3785 24.9693 25.4731C24.9693 24.5677 25.7059 23.8311 26.6113 23.8311C27.5166 23.8311 28.2533 24.5677 28.2533 25.4731Z" fill="currentColor" />
												<path d="M21.9193 19.928C21.847 20.3268 22.1118 20.7087 22.5106 20.7809C22.6305 20.8026 23.897 21.0236 25.6587 21.0236C28.073 21.0236 31.4172 20.6084 34.0132 18.6962C36.1298 17.137 37.3861 14.8503 37.7474 11.8994C37.7968 11.4972 37.5104 11.1311 37.1082 11.0819C36.707 11.0329 36.3399 11.3189 36.2906 11.7211C35.9806 14.2529 34.9231 16.2009 33.1475 17.5109C29.1721 20.444 22.8353 19.348 22.7717 19.3366C22.3736 19.265 21.9916 19.5293 21.9193 19.928Z" fill="currentColor" />
											</svg>
										</div>
										<div className="card-details">
											<h4 className="box-title">Strategy Development</h4>
											<p className="box-text">Efficiently unleash cross-media information without cross-media value work.</p>
										</div>
									</div>
									<div className="goal-grid-card">
										<div className="box-icon">
											<svg width={51} height={50} viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
												{/* SVG Path 2 remains unchanged */}
												<path d="M50.4683 21.216L41.9867 10.1982C41.6727 9.79068 41.1001 9.69016 40.666 9.9662L35.1899 13.4488H28.048C27.9556 13.4488 27.8635 13.4686 27.7746 13.4945L22.2371 15.0885L16.4912 13.5169L10.9081 9.9662C10.4812 9.6948 9.9191 9.78681 9.60169 10.1804L0.220429 21.8005C-0.116701 22.2181 -0.0610282 22.8278 0.345693 23.1777L5.26269 27.4092L9.67399 33.3538C8.38385 34.7282 8.40898 36.896 9.75131 38.2387C10.3463 38.8333 11.1029 39.1693 11.8812 39.2474C11.8541 39.4237 11.8402 39.6027 11.8402 39.7844C11.8402 40.7224 12.2056 41.6042 12.8686 42.2673C13.532 42.9307 14.4139 43.2961 15.3518 43.2961C15.3646 43.2961 15.377 43.2953 15.3893 43.2949C15.389 43.3189 15.3878 43.3425 15.3878 43.3664C15.3878 44.3044 15.7532 45.1862 16.4162 45.8497C17.0796 46.5127 17.9615 46.8781 18.8994 46.8781C19.0846 46.8781 19.2679 46.863 19.4477 46.8352C19.5238 47.6161 19.8606 48.3762 20.4575 48.9731C21.1418 49.6578 22.0411 50 22.9404 50C23.8396 50 24.7389 49.6578 25.4236 48.9731L25.9606 48.4361L26.186 48.6178C26.8649 49.2755 27.7464 49.6041 28.6279 49.6041C29.5272 49.6041 30.4264 49.262 31.1107 48.5773C31.8094 47.8786 32.1515 46.9566 32.1372 46.0391C33.0543 46.053 33.9767 45.7113 34.6753 45.013C35.3732 44.3148 35.7153 43.3935 35.7018 42.4764C36.6571 42.4915 37.5634 42.1246 38.2396 41.4484C38.9382 40.7498 39.2803 39.8277 39.266 38.9103C40.1839 38.9242 41.1056 38.5824 41.8042 37.8838C42.9965 36.6915 43.15 34.8485 42.2658 33.488L45.4867 26.7423L50.3291 22.5753C50.7292 22.2309 50.7903 21.6339 50.4683 21.216ZM10.5903 12.1193L14.6049 14.6721L5.87161 25.3118L2.37195 22.2997L10.5903 12.1193ZM11.1567 34.6776L12.3683 33.4659C12.405 33.4292 12.4437 33.3944 12.4831 33.3619C12.7201 33.1686 13.007 33.0534 13.3109 33.026C13.3194 33.0252 13.3283 33.0252 13.3368 33.0248C13.3801 33.0213 13.4234 33.019 13.4671 33.0194C13.8823 33.0252 14.2682 33.1949 14.5543 33.4969C15.1156 34.0903 15.0855 35.06 14.487 35.6584L13.3121 36.8334C12.7178 37.4276 11.7509 37.4276 11.1567 36.8334C10.5624 36.2388 10.5624 35.2718 11.1567 34.6776ZM14.274 40.8619C13.9859 40.5743 13.8274 40.1915 13.8274 39.7844C13.8274 39.3773 13.9859 38.9946 14.274 38.7065L16.6234 36.3571C17.0735 35.907 17.781 35.7837 18.3562 36.0578C18.9493 36.3404 19.283 36.9842 19.196 37.6317C19.1496 37.9774 18.9888 38.3029 18.7421 38.55L16.4297 40.8619C16.1417 41.15 15.759 41.3085 15.3518 41.3085C14.9447 41.3085 14.562 41.15 14.274 40.8619ZM17.8216 44.4439C17.5335 44.1563 17.375 43.7735 17.375 43.3664C17.375 42.9593 17.5335 42.5766 17.8216 42.2885L20.1706 39.9391C20.652 39.4581 21.424 39.3545 22.0133 39.6974C22.5514 40.0106 22.8333 40.6253 22.7409 41.2377C22.6902 41.5745 22.5302 41.8911 22.2893 42.132L19.9773 44.4439C19.6893 44.732 19.3065 44.8905 18.8994 44.8905C18.4923 44.8905 18.1096 44.732 17.8216 44.4439ZM21.8625 47.5678C21.2682 46.9736 21.2682 46.0066 21.8625 45.4124L23.0741 44.2007C23.1109 44.164 23.1491 44.1296 23.1886 44.0971C23.1897 44.0964 23.1905 44.0956 23.1913 44.0948C23.3885 43.9348 23.62 43.8277 23.8671 43.7809C23.8729 43.7801 23.8787 43.7793 23.8845 43.7786C23.927 43.7708 23.9703 43.7646 24.0136 43.7608C24.031 43.7592 24.0484 43.7592 24.0662 43.7581C24.1018 43.7561 24.1369 43.7538 24.1729 43.7542C24.5877 43.76 24.974 43.9293 25.2601 44.2317C25.2952 44.2688 25.3281 44.3075 25.3583 44.3473C25.8152 44.9446 25.7538 45.8319 25.1866 46.3994L24.0179 47.5682C23.4236 48.1624 22.4567 48.162 21.8625 47.5678ZM40.3988 36.4785C39.8046 37.0731 38.8377 37.0727 38.2434 36.4785C38.2218 36.4568 38.199 36.4367 38.1758 36.4178L31.7865 29.9613C31.4003 29.5712 30.7713 29.5681 30.3812 29.9543C29.9911 30.3401 29.988 30.9692 30.3738 31.3593L36.8323 37.885C36.8331 37.8857 36.8338 37.8865 36.8346 37.8873C37.4288 38.4815 37.4288 39.4488 36.8346 40.0431C36.5466 40.3311 36.1638 40.4896 35.7567 40.4896C35.3492 40.4896 34.9665 40.3311 34.6788 40.0431L30.3584 35.6778C29.9725 35.2877 29.3435 35.2846 28.9534 35.6704C28.5633 36.0567 28.5602 36.6857 28.9461 37.0758L33.2004 41.3742C33.2221 41.4013 33.2453 41.4272 33.27 41.4519C33.8642 42.0461 33.8642 43.0134 33.27 43.6077C32.6754 44.2019 31.7081 44.2015 31.1138 43.6073L28.7559 41.2246C28.3696 40.8345 27.7406 40.831 27.3505 41.2172C26.9604 41.6031 26.9573 42.2321 27.3432 42.6222L29.6354 44.938C29.6571 44.9651 29.6803 44.9914 29.7054 45.0161C30.2996 45.6104 30.2996 46.5777 29.7054 47.1719C29.1112 47.7665 28.1442 47.7661 27.55 47.1719C27.4816 47.1035 27.4011 47.0509 27.3246 46.9921C27.2596 46.9426 27.2426 46.9082 27.2751 46.8294C27.308 46.7493 27.3571 46.677 27.3899 46.5966C27.4263 46.5069 27.4557 46.4145 27.4843 46.3217C27.6366 45.8307 27.6814 45.3026 27.613 44.793C27.4816 43.8153 26.9438 42.933 26.1288 42.3748C25.6884 42.0736 25.1789 41.876 24.6508 41.8018C24.9067 40.6729 24.5993 39.4488 23.7998 38.6041C23.1418 37.9089 22.253 37.5188 21.2969 37.5057C21.2621 37.5053 21.2273 37.5053 21.1921 37.5057C21.2133 36.5933 20.8816 35.6867 20.2526 35.0221C19.5942 34.3269 18.7054 33.9368 17.7496 33.9237C17.4655 33.9198 17.1786 33.95 16.9018 34.0138C16.7835 33.1907 16.3686 32.429 15.7404 31.8843C15.116 31.3438 14.3308 31.0438 13.4945 31.0322C12.6142 31.0194 11.7493 31.3442 11.0956 31.9345L7.25454 26.7589L16.4437 15.564L19.3723 16.3651L15.5475 23.1143C15.0851 23.9304 14.9683 24.8776 15.2185 25.7815C15.4686 26.6858 16.0555 27.4382 16.8716 27.9006C16.9227 27.9296 16.9741 27.957 17.0263 27.9833C17.0301 27.9853 17.034 27.9872 17.0383 27.9891C17.1755 28.0576 17.3166 28.1163 17.4597 28.1658C18.1258 28.3966 18.8453 28.4217 19.5393 28.23C20.4432 27.9798 21.1956 27.3926 21.658 26.5768L24.1435 22.1906L28.5815 22.5054L40.3992 34.3227C40.9931 34.9173 40.9931 35.8842 40.3988 36.4785ZM40.8106 31.9237L29.7243 20.8379C29.7035 20.8166 29.6814 20.7965 29.6586 20.7776C29.4989 20.6446 29.301 20.5641 29.0922 20.5495L23.6583 20.164C23.2825 20.1381 22.909 20.338 22.7235 20.6654L19.929 25.5971C19.7283 25.9513 19.4017 26.206 19.0092 26.3147C18.6172 26.4233 18.2059 26.3723 17.8513 26.1716C17.4972 25.971 17.2424 25.6443 17.1338 25.2519C17.0251 24.8595 17.0758 24.4481 17.2768 24.094L21.0073 17.5103L22.519 17.0753C22.529 17.0722 22.5387 17.0684 22.5487 17.0653L28.1906 15.4361H35.0075L43.5177 26.2544L40.8106 31.9237ZM44.8194 24.6948L36.9494 14.6849L40.966 12.1305L48.3198 21.6826L44.8194 24.6948Z" fill="currentColor" />
												<path d="M30.7001 11.583C30.9545 11.583 31.2089 11.486 31.403 11.2919L38.1905 4.50447C38.5786 4.1163 38.5786 3.48728 38.1905 3.09911C37.8023 2.71095 37.1733 2.71095 36.7851 3.09911L29.9977 9.88656C29.6095 10.2747 29.6095 10.9037 29.9977 11.2919C30.1917 11.486 30.4461 11.583 30.7001 11.583Z" fill="currentColor" />
												<path d="M19.2718 11.2919C19.4658 11.486 19.7202 11.583 19.9746 11.583C20.2286 11.583 20.483 11.486 20.6771 11.2919C21.0653 10.9037 21.0653 10.2747 20.6771 9.88656L13.8897 3.09911C13.5015 2.71095 12.8725 2.71095 12.4843 3.09911C12.0961 3.48728 12.0961 4.1163 12.4843 4.50447L19.2718 11.2919Z" fill="currentColor" />
												<path d="M25.3374 11.583C25.886 11.583 26.331 11.138 26.331 10.5894V4.97227C26.331 4.42366 25.886 3.97867 25.3374 3.97867C24.7888 3.97867 24.3438 4.42366 24.3438 4.97227V10.5894C24.3438 11.138 24.7888 11.583 25.3374 11.583Z" fill="currentColor" />
												<path d="M24.4203 1.37093C24.5781 1.7533 24.9713 2.00421 25.3861 1.98256C25.7959 1.9613 26.1559 1.68448 26.2827 1.29438C26.4099 0.901195 26.2715 0.453106 25.9421 0.202579C25.6061 -0.0533618 25.1375 -0.0676666 24.7861 0.16469C24.394 0.423724 24.2421 0.939471 24.4203 1.37093Z" fill="currentColor" />
											</svg>
										</div>
										<div className="card-details">
											<h4 className="box-title">Data-Driven Insights</h4>
											<p className="box-text">Efficiently unleash cross-media information without cross-media value work.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</>
			</Layout>
		</>
	)
}