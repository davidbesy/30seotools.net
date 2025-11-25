import { NextResponse } from 'next/server'
import { getLocalImagePath, downloadAndSaveImage } from '@/util/imageDownloader'

const WORDPRESS_PAGE_ENDPOINT = 'https://seotoolsgroupbuy.us/wp-json/wp/v2/pages?slug=single-tools-list'
const WORDPRESS_PAGE_URL = 'https://seotoolsgroupbuy.us/single-tools-list/'
const DEFAULT_FALLBACK_IMAGE = '/assets/img/service/service-img-1-1.jpg'

const baseHeaders = {
	'User-Agent':
		'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
	Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
	'Accept-Language': 'en-US,en;q=0.5',
	Referer: 'https://seotoolsgroupbuy.us/',
}

export async function GET() {
	try {
		const html = await fetchSingleToolsMarkup()
		
		// Parse HTML to extract tool data
		const tools: Array<{
			name: string
			category: string
			originalPrice: string
			currentPrice: string
			image: string
			link: string
		}> = []

		// Try to find product items - WooCommerce products are usually in <li class="product">
		const productMatches = html.match(/<li[^>]*class="[^"]*product[^"]*"[^>]*>[\s\S]*?<\/li>/gi) || 
								 html.match(/<div[^>]*class="[^"]*product[^"]*"[^>]*>[\s\S]*?<\/div>/gi) || []

		// Process products and extract data
		const imageDownloadTasks: Array<{ toolIndex: number; remoteUrl: string; name: string }> = []
		
		for (const product of productMatches) {
			// Extract tool name - try multiple patterns
			let name = ''
			const namePatterns = [
				/<h2[^>]*class="[^"]*woocommerce-loop-product__title[^"]*"[^>]*>([^<]+)<\/h2>/i,
				/<h3[^>]*class="[^"]*woocommerce-loop-product__title[^"]*"[^>]*>([^<]+)<\/h3>/i,
				/<a[^>]*class="[^"]*woocommerce-LoopProduct-link[^"]*"[^>]*title="([^"]+)"/i,
				/<h2[^>]*>([^<]+)<\/h2>/i,
				/<h3[^>]*>([^<]+)<\/h3>/i,
			]
			
			for (const pattern of namePatterns) {
				const match = product.match(pattern)
				if (match && match[1]) {
					name = match[1].trim().replace(/Group Buy|group buy/gi, '').trim()
					break
				}
			}

			// Extract category
			let category = 'SEO TOOLS'
			const categoryPatterns = [
				/<span[^>]*class="[^"]*category[^"]*"[^>]*>([^<]+)<\/span>/i,
				/<p[^>]*class="[^"]*category[^"]*"[^>]*>([^<]+)<\/p>/i,
				/SEO TOOLS|designing tools|Writing Tools|Amazon tools|Streaming|AI Content tools|Ai tools|Backlink Analysis Tools|AI Technology|Animations tools|adspy tools|Marketing tools|keyword tools|Learning tools|Anime tools|Ai writer/i,
			]
			
			for (const pattern of categoryPatterns) {
				const match = product.match(pattern)
				if (match) {
					category = match[1] ? match[1].trim() : match[0].replace(/<[^>]+>/g, '').trim()
					break
				}
			}

			// Extract prices
			let originalPrice = ''
			let currentPrice = '$10.00'
			
			// Original price patterns
			const originalPricePatterns = [
				/<del[^>]*>.*?\$([\d.]+).*?<\/del>/i,
				/~~\$([\d.]+)~~/i,
				/Original price was: \$([\d.]+)/i,
				/<span[^>]*class="[^"]*price[^"]*"[^>]*>.*?<del[^>]*>.*?\$([\d.]+).*?<\/del>/i,
			]
			
			for (const pattern of originalPricePatterns) {
				const match = product.match(pattern)
				if (match && match[1]) {
					originalPrice = `$${match[1]}`
					break
				}
			}

			// Current price patterns
			const currentPricePatterns = [
				/<span[^>]*class="[^"]*price[^"]*"[^>]*>.*?<ins[^>]*>.*?\$([\d.]+).*?<\/ins>/i,
				/Current price is: \$([\d.]+)/i,
				/<span[^>]*class="[^"]*woocommerce-Price-amount[^"]*"[^>]*>.*?\$([\d.]+)/i,
				/<bdi[^>]*>.*?\$([\d.]+)/i,
			]
			
			for (const pattern of currentPricePatterns) {
				const match = product.match(pattern)
				if (match && match[1]) {
					currentPrice = `$${match[1]}`
					break
				}
			}

			// Extract image - improved patterns to catch all image sources
			let image = DEFAULT_FALLBACK_IMAGE
			let remoteImageUrl = ''
			const imagePatterns = [
				/<img[^>]*class="[^"]*attachment-woocommerce_thumbnail[^"]*"[^>]*src="([^"]+)"/i,
				/<img[^>]*src="([^"]+)"[^>]*class="[^"]*attachment-woocommerce_thumbnail[^"]*"/i,
				/<img[^>]*data-src="([^"]+)"/i,
				/<img[^>]*src="([^"]+)"[^>]*class="[^"]*attachment[^"]*"/i,
				/<img[^>]*src="([^"]*wp-content[^"]*)"[^>]*/i,
				/<img[^>]*src="([^"]+\.(jpg|jpeg|png|webp|gif))"/i,
			]
			
			for (const pattern of imagePatterns) {
				const match = product.match(pattern)
				if (match && match[1]) {
					remoteImageUrl = match[1]
					// Decode HTML entities
					remoteImageUrl = remoteImageUrl.replace(/&amp;/g, '&').replace(/&#36;/g, '$').replace(/&#039;/g, "'")
					
					if (!remoteImageUrl.startsWith('http')) {
						if (remoteImageUrl.startsWith('//')) {
							remoteImageUrl = `https:${remoteImageUrl}`
						} else if (remoteImageUrl.startsWith('/')) {
							remoteImageUrl = `https://seotoolsgroupbuy.us${remoteImageUrl}`
						} else {
							remoteImageUrl = `https://seotoolsgroupbuy.us/${remoteImageUrl}`
						}
					}
					
					// Check for local image first
					image = getLocalImagePath(remoteImageUrl, name)
					break
				}
			}

			// Extract link
			let link = '#'
			const linkPatterns = [
				/<a[^>]*class="[^"]*woocommerce-LoopProduct-link[^"]*"[^>]*href="([^"]+)"/i,
				/<a[^>]*href="([^"]+)"[^>]*class="[^"]*woocommerce[^"]*"/i,
			]
			
			for (const pattern of linkPatterns) {
				const match = product.match(pattern)
				if (match && match[1]) {
					link = match[1]
					if (!link.startsWith('http')) {
						link = `https://seotoolsgroupbuy.us${link}`
					}
					break
				}
			}

			if (name && name.length > 2) {
				const toolIndex = tools.length
				tools.push({
					name,
					category,
					originalPrice,
					currentPrice,
					image,
					link
				})
				
				// If image is remote, add to download queue
				if (remoteImageUrl && image.startsWith('http')) {
					imageDownloadTasks.push({
						toolIndex,
						remoteUrl: remoteImageUrl,
						name
					})
				}
			}
		}
		
		// Download all images in parallel and update paths
		if (imageDownloadTasks.length > 0) {
			await Promise.all(
				imageDownloadTasks.map(async (task) => {
					try {
						const localPath = await downloadAndSaveImage(task.remoteUrl, task.name)
						if (tools[task.toolIndex]) {
							tools[task.toolIndex].image = localPath
						}
					} catch (error) {
						console.error(`Failed to download image for ${task.name}:`, error)
						// Keep remote URL if download fails
					}
				})
			)
		}

		// If no tools found from scraping, return comprehensive tool list from website data
		if (tools.length === 0) {
			return NextResponse.json({
				success: true,
				tools: getAllToolsFromWebsite()
			})
		}

		return NextResponse.json({ success: true, tools })
	} catch (error) {
		console.error('Scraping error:', error)
		// Return comprehensive tool list on error
		return NextResponse.json({
			success: true,
			tools: getAllToolsFromWebsite()
		})
	}
}

async function fetchSingleToolsMarkup() {
	try {
		const response = await fetch(WORDPRESS_PAGE_ENDPOINT, {
			headers: {
				...baseHeaders,
				Accept: 'application/json',
			},
			cache: 'no-store',
		})

		if (response.ok) {
			const data = await response.json()
			const html = Array.isArray(data) ? data[0]?.content?.rendered : undefined
			if (typeof html === 'string' && html.trim().length > 0) {
				return html
			}
		} else {
			console.warn('WP JSON fetch failed:', response.status, response.statusText)
		}
	} catch (error) {
		console.warn('WP JSON fetch threw:', error)
	}

	const response = await fetch(WORDPRESS_PAGE_URL, {
		headers: baseHeaders,
		cache: 'no-store',
	})

	if (!response.ok) {
		throw new Error(`Failed to fetch data: ${response.status}`)
	}

	return response.text()
}

// Function to get all tools from website data
export function getAllToolsFromWebsite() {
	// Helper function to generate local image path from tool name
	const getImageUrl = (toolName: string) => {
		const slug = toolName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
		const remoteUrl = `https://seotoolsgroupbuy.us/wp-content/uploads/2024/01/${slug}-logo.png`
		// Try to use local path, fallback to remote URL
		return getLocalImagePath(remoteUrl, toolName)
	}

	return [
		{ name: 'Ahrefs', category: 'SEO TOOLS', originalPrice: '$119.00', currentPrice: '$10.00', image: getImageUrl('Ahrefs'), link: 'https://seotoolsgroupbuy.us/product/ahrefs-group-buy/' },
		{ name: 'SEMrush', category: 'SEO TOOLS', originalPrice: '$10.00', currentPrice: '$5.00', image: getImageUrl('SEMrush'), link: 'https://seotoolsgroupbuy.us/product/semrush-group-buy/' },
		{ name: 'ChatGPT', category: 'SEO TOOLS', originalPrice: '$10.00', currentPrice: '$5.00', image: getImageUrl('ChatGPT'), link: 'https://seotoolsgroupbuy.us/product/chatgpt-group-buy/' },
		{ name: 'Adobe Stock', category: 'designing tools', originalPrice: '', currentPrice: '$10.00', image: getImageUrl('Adobe Stock'), link: 'https://seotoolsgroupbuy.us/product/adobe-stock-group-buy/' },
		{ name: 'Envato Elements', category: 'SEO TOOLS', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('Envato Elements'), link: 'https://seotoolsgroupbuy.us/product/envato-elements-group-buy/' },
		{ name: 'Frase', category: 'SEO TOOLS', originalPrice: '$50.00', currentPrice: '$5.00', image: getImageUrl('Frase'), link: 'https://seotoolsgroupbuy.us/product/frase-group-buy/' },
		{ name: 'Netflix', category: 'Streaming', originalPrice: '$10.00', currentPrice: '$5.00', image: getImageUrl('Netflix'), link: 'https://seotoolsgroupbuy.us/product/netflix-group-buy/' },
		{ name: 'Prime Video', category: 'Streaming', originalPrice: '$10.00', currentPrice: '$3.00', image: getImageUrl('Prime Video'), link: 'https://seotoolsgroupbuy.us/product/prime-video-group-buy/' },
		{ name: 'AmzTrackers', category: 'SEO TOOLS', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('AmzTrackers'), link: 'https://seotoolsgroupbuy.us/product/amztrackers-group-buy/' },
		{ name: 'AnswerThePublic', category: 'SEO TOOLS', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('AnswerThePublic'), link: 'https://seotoolsgroupbuy.us/product/answerthepublic-group-buy/' },
		{ name: 'Article Builder', category: 'SEO TOOLS', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('Article Builder'), link: 'https://seotoolsgroupbuy.us/product/article-builder-group-buy/' },
		{ name: 'Article Forge', category: 'SEO TOOLS', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('Article Forge'), link: 'https://seotoolsgroupbuy.us/product/article-forge-group-buy/' },
		{ name: 'BuzzStream', category: 'SEO TOOLS', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('BuzzStream'), link: 'https://seotoolsgroupbuy.us/product/buzzstream-group-buy/' },
		{ name: 'BuzzSumo', category: 'SEO TOOLS', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('BuzzSumo'), link: 'https://seotoolsgroupbuy.us/product/buzzsumo-group-buy/' },
		{ name: 'Canva', category: 'SEO TOOLS', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('Canva'), link: 'https://seotoolsgroupbuy.us/product/canva-group-buy/' },
		{ name: 'CBEngine', category: 'SEO TOOLS', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('CBEngine'), link: 'https://seotoolsgroupbuy.us/product/cbengine-group-buy/' },
		{ name: 'Copymatic AI', category: 'Writing Tools', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('Copymatic AI'), link: 'https://seotoolsgroupbuy.us/product/copymatic-ai-group-buy/' },
		{ name: 'Ecomhunt', category: 'SEO TOOLS', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('Ecomhunt'), link: 'https://seotoolsgroupbuy.us/product/ecomhunt-group-buy/' },
		{ name: 'Freepik', category: 'designing tools', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('Freepik'), link: 'https://seotoolsgroupbuy.us/product/freepik-group-buy/' },
		{ name: 'Grammarly', category: 'Writing Tools', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('Grammarly'), link: 'https://seotoolsgroupbuy.us/product/grammarly-group-buy/' },
		{ name: 'Helium 10', category: 'Amazon tools', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('Helium 10'), link: 'https://seotoolsgroupbuy.us/product/helium-10-group-buy/' },
		{ name: 'Indexification', category: 'SEO TOOLS', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('Indexification'), link: 'https://seotoolsgroupbuy.us/product/indexification-group-buy/' },
		{ name: 'iSpionage', category: 'SEO TOOLS', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('iSpionage'), link: 'https://seotoolsgroupbuy.us/product/ispionage-group-buy/' },
		{ name: 'Jasper AI', category: 'Writing Tools', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('Jasper AI'), link: 'https://seotoolsgroupbuy.us/product/jasper-ai-group-buy/' },
		{ name: 'Jungle Scout', category: 'Amazon tools', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('Jungle Scout'), link: 'https://seotoolsgroupbuy.us/product/jungle-scout-group-buy/' },
		{ name: 'Keyword Revealer', category: 'SEO TOOLS', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('Keyword Revealer'), link: 'https://seotoolsgroupbuy.us/product/keyword-revealer-group-buy/' },
		{ name: 'Keywords Everywhere', category: 'SEO TOOLS', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('Keywords Everywhere'), link: 'https://seotoolsgroupbuy.us/product/keywords-everywhere-group-buy/' },
		{ name: 'KeywordTool.io', category: 'SEO TOOLS', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('KeywordTool.io'), link: 'https://seotoolsgroupbuy.us/product/keywordtool-io-group-buy/' },
		{ name: 'KWFinder', category: 'SEO TOOLS', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('KWFinder'), link: 'https://seotoolsgroupbuy.us/product/kwfinder-group-buy/' },
		{ name: 'LinkedIn Learning', category: 'SEO TOOLS', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('LinkedIn Learning'), link: 'https://seotoolsgroupbuy.us/product/linkedin-learning-group-buy/' },
		{ name: 'Majestic', category: 'SEO TOOLS', originalPrice: '$20.00', currentPrice: '$10.00', image: getImageUrl('Majestic'), link: 'https://seotoolsgroupbuy.us/product/majestic-group-buy/' },
		{ name: 'Moz Pro', category: 'SEO TOOLS', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('Moz Pro'), link: 'https://seotoolsgroupbuy.us/product/moz-group-buy/' },
		{ name: 'NeuronWriter', category: 'Writing Tools', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('NeuronWriter'), link: 'https://seotoolsgroupbuy.us/product/neuronwriter-group-buy/' },
		{ name: 'Pexda', category: 'SEO TOOLS', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('Pexda'), link: 'https://seotoolsgroupbuy.us/product/pexda-group-buy/' },
		{ name: 'Pillbanana', category: 'designing tools', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('Pillbanana'), link: 'https://seotoolsgroupbuy.us/product/pillbanana-group-buy/' },
		{ name: 'Quetext', category: 'Writing Tools', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('Quetext'), link: 'https://seotoolsgroupbuy.us/product/quetext-group-buy/' },
		{ name: 'Quillbot', category: 'Writing Tools', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('Quillbot'), link: 'https://seotoolsgroupbuy.us/product/quillbot-group-buy/' },
		{ name: 'SaleHoo', category: 'Amazon tools', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('SaleHoo'), link: 'https://seotoolsgroupbuy.us/product/salehoo-group-buy/' },
		{ name: 'Screaming Frog', category: 'SEO TOOLS', originalPrice: '', currentPrice: '$10.00', image: getImageUrl('Screaming Frog'), link: 'https://seotoolsgroupbuy.us/product/screaming-frog-group-buy/' },
		{ name: 'SEO Profiler', category: 'SEO TOOLS', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('SEO Profiler'), link: 'https://seotoolsgroupbuy.us/product/seo-profiler-group-buy/' },
		{ name: 'Serpstat', category: 'SEO TOOLS', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('Serpstat'), link: 'https://seotoolsgroupbuy.us/product/serpstat-group-buy/' },
		{ name: 'Skillshare', category: 'SEO TOOLS', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('Skillshare'), link: 'https://seotoolsgroupbuy.us/product/skillshare-group-buy/' },
		{ name: 'SpamZilla', category: 'SEO TOOLS', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('SpamZilla'), link: 'https://seotoolsgroupbuy.us/product/spamzilla-group-buy/' },
		{ name: 'Spin Rewriter', category: 'SEO TOOLS', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('Spin Rewriter'), link: 'https://seotoolsgroupbuy.us/product/spin-rewriter-group-buy/' },
		{ name: 'Spyfu', category: 'SEO TOOLS', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('Spyfu'), link: 'https://seotoolsgroupbuy.us/product/spyfu-group-buy/' },
		{ name: 'StockUnlimited', category: 'SEO TOOLS', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('StockUnlimited'), link: 'https://seotoolsgroupbuy.us/product/stockunlimited-group-buy/' },
		{ name: 'Ubersuggest', category: 'SEO TOOLS', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('Ubersuggest'), link: 'https://seotoolsgroupbuy.us/product/ubersuggest-group-buy/' },
		{ name: 'Unbounce', category: 'SEO TOOLS', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('Unbounce'), link: 'https://seotoolsgroupbuy.us/product/unbounce-group-buy/' },
		{ name: 'Woorank', category: 'SEO TOOLS', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('Woorank'), link: 'https://seotoolsgroupbuy.us/product/woorank-group-buy/' },
		{ name: 'WordAi', category: 'SEO TOOLS', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('WordAi'), link: 'https://seotoolsgroupbuy.us/product/wordai-group-buy/' },
		{ name: 'SE Ranking', category: 'SEO TOOLS', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('SE Ranking'), link: 'https://seotoolsgroupbuy.us/product/se-ranking-group-buy/' },
		{ name: 'Cognitive SEO', category: 'SEO TOOLS', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('Cognitive SEO'), link: 'https://seotoolsgroupbuy.us/product/cognitive-seo-group-buy/' },
		{ name: 'Crello', category: 'SEO TOOLS', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('Crello'), link: 'https://seotoolsgroupbuy.us/product/crello-group-buy/' },
		{ name: 'Vyond', category: 'SEO TOOLS', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('Vyond'), link: 'https://seotoolsgroupbuy.us/product/vyond-group-buy/' },
		{ name: 'LongTailPro', category: 'SEO TOOLS', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('LongTailPro'), link: 'https://seotoolsgroupbuy.us/product/longtailpro-group-buy/' },
		{ name: 'Audioblocks', category: 'SEO TOOLS', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('Audioblocks'), link: 'https://seotoolsgroupbuy.us/product/audioblocks-group-buy/' },
		{ name: 'Storyblocks', category: 'SEO TOOLS', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('Storyblocks'), link: 'https://seotoolsgroupbuy.us/product/storyblocks-group-buy/' },
		{ name: 'Videoblocks', category: 'SEO TOOLS', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('Videoblocks'), link: 'https://seotoolsgroupbuy.us/product/videoblocks-group-buy/' },
		{ name: 'Fotojet', category: 'SEO TOOLS', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('Fotojet'), link: 'https://seotoolsgroupbuy.us/product/fotojet-group-buy/' },
		{ name: 'Sellthetrend', category: 'SEO TOOLS', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('Sellthetrend'), link: 'https://seotoolsgroupbuy.us/product/sellthetrend-group-buy/' },
		{ name: 'Onlinetools.ai', category: 'AI Content tools', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('Onlinetools.ai'), link: 'https://seotoolsgroupbuy.us/product/onlinetools-ai-group-buy/' },
		{ name: 'Copygenius', category: 'Ai tools', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('Copygenius'), link: 'https://seotoolsgroupbuy.us/product/copygenius-group-buy/' },
		{ name: 'Aiseo.ai', category: 'Ai tools', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('Aiseo.ai'), link: 'https://seotoolsgroupbuy.us/product/aiseo-ai-group-buy/' },
		{ name: 'Creator.ai', category: 'Animations tools', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('Creator.ai'), link: 'https://seotoolsgroupbuy.us/product/creator-ai-group-buy/' },
		{ name: 'Adheart.me', category: 'adspy tools', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('Adheart.me'), link: 'https://seotoolsgroupbuy.us/product/adheart-group-buy/' },
		{ name: 'Spyhero', category: 'adspy tools', originalPrice: '', currentPrice: '$10.00', image: getImageUrl('Spyhero'), link: 'https://seotoolsgroupbuy.us/product/spyhero-group-buy/' },
		{ name: 'Smodin', category: 'AI Content tools', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('Smodin'), link: 'https://seotoolsgroupbuy.us/product/smodin-group-buy/' },
		{ name: 'DreamArt Image AI', category: 'Animations tools', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('DreamArt Image AI'), link: 'https://seotoolsgroupbuy.us/product/dreamart-image-ai-group-buy/' },
		{ name: 'Hyperwrite AI', category: 'AI Content tools', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('Hyperwrite AI'), link: 'https://seotoolsgroupbuy.us/product/hyperwrite-ai-group-buy/' },
		{ name: 'Bramework', category: 'AI Content tools', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('Bramework'), link: 'https://seotoolsgroupbuy.us/product/bramework-group-buy/' },
		{ name: 'HelloScribe AI', category: 'AI Content tools', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('HelloScribe AI'), link: 'https://seotoolsgroupbuy.us/product/helloscribe-ai-group-buy/' },
		{ name: 'Nobuna', category: 'AI Content tools', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('Nobuna'), link: 'https://seotoolsgroupbuy.us/product/nobuna-group-buy/' },
		{ name: 'Inkforall', category: 'AI Content tools', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('Inkforall'), link: 'https://seotoolsgroupbuy.us/product/inkforall-group-buy/' },
		{ name: 'Keyword Eye', category: 'Backlink Analysis Tools', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('Keyword Eye'), link: 'https://seotoolsgroupbuy.us/product/keyword-eye-group-buy/' },
		{ name: 'Authority Labs', category: 'Backlink Analysis Tools', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('Authority Labs'), link: 'https://seotoolsgroupbuy.us/product/authority-labs-group-buy/' },
		{ name: 'Vidnami', category: 'AI Technology', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('Vidnami'), link: 'https://seotoolsgroupbuy.us/product/vidnami-group-buy/' },
		{ name: 'Rank Key Top SEO', category: 'Backlink Tools', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('Rank Key Top SEO'), link: 'https://seotoolsgroupbuy.us/product/rank-key-top-seo-group-buy/' },
		{ name: 'Content Samurai', category: 'AI Technology', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('Content Samurai'), link: 'https://seotoolsgroupbuy.us/product/content-samurai-group-buy/' },
		{ name: 'Similarweb', category: 'Backlink Analysis Tools', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('Similarweb'), link: 'https://seotoolsgroupbuy.us/product/similarweb-group-buy/' },
		{ name: 'Creative Fabrica', category: 'Ai tools', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('Creative Fabrica'), link: 'https://seotoolsgroupbuy.us/product/creative-fabrica-group-buy/' },
		{ name: 'GraphicStock', category: 'designing tools', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('GraphicStock'), link: 'https://seotoolsgroupbuy.us/product/graphicstock-group-buy/' },
		{ name: 'LSIGraph', category: 'keyword tools', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('LSIGraph'), link: 'https://seotoolsgroupbuy.us/product/lsigraph-group-buy/' },
		{ name: 'Tools Group Buy', category: 'Backlink Analysis Tools', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('Tools Group Buy'), link: 'https://seotoolsgroupbuy.us/product/tools-group-buy/' },
		{ name: 'Pictory', category: 'AI Technology', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('Pictory'), link: 'https://seotoolsgroupbuy.us/product/pictory-group-buy/' },
		{ name: 'Lynda', category: 'Learning tools', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('Lynda'), link: 'https://seotoolsgroupbuy.us/product/lynda-group-buy/' },
		{ name: 'Animoto', category: 'AI Technology', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('Animoto'), link: 'https://seotoolsgroupbuy.us/product/animoto-group-buy/' },
		{ name: 'Crunchyroll', category: 'Anime tools', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('Crunchyroll'), link: 'https://seotoolsgroupbuy.us/product/crunchyroll-group-buy/' },
		{ name: 'Pizap', category: 'Ai writer', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('Pizap'), link: 'https://seotoolsgroupbuy.us/product/pizap-group-buy/' },
		{ name: 'Stencil', category: 'Animations tools', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('Stencil'), link: 'https://seotoolsgroupbuy.us/product/stencil-group-buy/' },
		{ name: 'Peppercontent', category: 'AI Technology', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('Peppercontent'), link: 'https://seotoolsgroupbuy.us/product/peppercontent-group-buy/' },
		{ name: 'TextWizard', category: 'AI Technology', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('TextWizard'), link: 'https://seotoolsgroupbuy.us/product/textwizard-group-buy/' },
		{ name: 'Katteb AI', category: 'AI Technology', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('Katteb AI'), link: 'https://seotoolsgroupbuy.us/product/katteb-ai-group-buy/' },
		{ name: 'Alexa', category: 'Marketing tools', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('Alexa'), link: 'https://seotoolsgroupbuy.us/product/alexa-group-buy/' },
		{ name: 'Screaming Frog SEO Spider', category: 'SEO TOOLS', originalPrice: '', currentPrice: '$10.00', image: getImageUrl('Screaming Frog SEO Spider'), link: 'https://seotoolsgroupbuy.us/product/screaming-frog-seo-spider-group-buy/' },
		{ name: 'Gamma Ai', category: 'AI Content tools', originalPrice: '$18.00', currentPrice: '$5.00', image: getImageUrl('Gamma Ai'), link: 'https://seotoolsgroupbuy.us/product/gamma-ai-group-buy/' },
		{ name: 'Midjourney', category: 'AI Content tools', originalPrice: '', currentPrice: '$10.00', image: getImageUrl('Midjourney'), link: 'https://seotoolsgroupbuy.us/product/midjourney-group-buy/' },
		{ name: 'Seobility', category: 'SEO TOOLS', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('Seobility'), link: 'https://seotoolsgroupbuy.us/product/seobility-group-buy/' },
		{ name: 'Snapied', category: 'designing tools', originalPrice: '$10.00', currentPrice: '$4.99', image: getImageUrl('Snapied'), link: 'https://seotoolsgroupbuy.us/product/snapied-group-buy/' }
	]
}
