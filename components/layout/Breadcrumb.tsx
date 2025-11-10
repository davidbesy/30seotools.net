import Link from 'next/link'

export default function Breadcrumb({ breadcrumbTitle }: any) {
	return (
		<>
			<section className="breadcrumb__area fix" data-background="assets/img/bg/breadcrumb-bg.png">
				<div className="breadcrumb__bg-shape" />
				<div className="container">
					<div className="row align-items-center">
						<div className="col-xl-6">
							<div className="breadcrumb__content">
								<h3 className="title">{breadcrumbTitle}</h3>
							</div>
						</div>
						<div className="col-xl-6">
							<div className="breadcrumb-wrap">
								<nav className="breadcrumb">
									<span property="itemListElement" typeof="ListItem">
										<Link href="//">Home</Link>
									</span>
									<span className="breadcrumb-separator">/</span>
									<span property="itemListElement" typeof="ListItem">{breadcrumbTitle}</span>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
