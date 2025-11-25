import fs from 'fs'
import path from 'path'

const TOOLS_IMAGE_DIR = path.join(process.cwd(), 'public', 'assets', 'img', 'tools')

// Ensure directory exists
if (!fs.existsSync(TOOLS_IMAGE_DIR)) {
	fs.mkdirSync(TOOLS_IMAGE_DIR, { recursive: true })
}

/**
 * Download image from URL and save to local tools folder
 * Returns local path relative to public folder
 */
export async function downloadAndSaveImage(imageUrl: string, toolName: string): Promise<string> {
	try {
		// Generate safe filename from tool name
		const safeName = toolName
			.toLowerCase()
			.replace(/[^a-z0-9]+/g, '-')
			.replace(/^-|-$/g, '')
		
		// Get file extension from URL
		let ext = '.jpg'
		try {
			const urlObj = new URL(imageUrl)
			const urlPath = urlObj.pathname
			ext = path.extname(urlPath) || '.jpg'
			// Limit extension length
			if (ext.length > 10) ext = '.jpg'
		} catch {
			ext = '.jpg'
		}
		
		const filename = `${safeName}${ext}`
		const filePath = path.join(TOOLS_IMAGE_DIR, filename)
		const publicPath = `/assets/img/tools/${filename}`

		// Check if file already exists
		if (fs.existsSync(filePath)) {
			return publicPath
		}

		// Download image with retry
		let response: Response | null = null
		for (let attempt = 0; attempt < 3; attempt++) {
			try {
				response = await fetch(imageUrl, {
					headers: {
						'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
						'Accept': 'image/webp,image/apng,image/*,*/*;q=0.8',
						'Referer': 'https://seotoolsgroupbuy.us/',
					},
					cache: 'no-store',
				})

				if (response.ok) {
					break
				}
			} catch (err) {
				if (attempt === 2) throw err
				await new Promise(resolve => setTimeout(resolve, 1000 * (attempt + 1)))
			}
		}

		if (!response || !response.ok) {
			throw new Error(`Failed to download image: ${response?.status || 'Network error'}`)
		}

		const buffer = await response.arrayBuffer()
		
		if (buffer.byteLength === 0) {
			throw new Error('Empty image data received')
		}

		fs.writeFileSync(filePath, Buffer.from(buffer))
		console.log(`✓ Downloaded image for ${toolName}: ${filename}`)

		return publicPath
	} catch (error) {
		console.error(`✗ Error downloading image for ${toolName} (${imageUrl}):`, error)
		// Return remote URL as fallback so image can still load
		return imageUrl
	}
}

/**
 * Convert remote image URL to local path
 * If image doesn't exist locally, return the remote URL (will be downloaded on next sync)
 */
export function getLocalImagePath(remoteUrl: string, toolName: string): string {
	if (!remoteUrl || remoteUrl.startsWith('/assets/')) {
		return remoteUrl || '/assets/img/service/service-img-1-1.jpg'
	}

	const safeName = toolName
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-|-$/g, '')
	
	// Try to find existing file with common extensions
	const extensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif']
	for (const ext of extensions) {
		const filename = `${safeName}${ext}`
		const filePath = path.join(TOOLS_IMAGE_DIR, filename)
		if (fs.existsSync(filePath)) {
			return `/assets/img/tools/${filename}`
		}
	}

	// If not found locally, return remote URL (will be handled by download function)
	return remoteUrl
}

