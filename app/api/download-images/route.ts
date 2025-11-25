import { NextResponse } from 'next/server'
import { downloadAndSaveImage } from '@/util/imageDownloader'
import { getAllToolsFromWebsite } from '../scrape-tools/route'

export async function POST() {
	try {
		// Get tools data directly from the function
		const tools = getAllToolsFromWebsite()

		const results = []
		const errors = []

		// Download images for each tool
		for (const tool of tools) {
			if (tool.image && tool.image.startsWith('http')) {
				try {
					const localPath = await downloadAndSaveImage(tool.image, tool.name)
					results.push({
						tool: tool.name,
						originalUrl: tool.image,
						localPath,
						success: true,
					})
					// Small delay to avoid overwhelming the server
					await new Promise(resolve => setTimeout(resolve, 100))
				} catch (error) {
					errors.push({
						tool: tool.name,
						error: error instanceof Error ? error.message : 'Unknown error',
					})
				}
			}
		}

		return NextResponse.json({
			success: true,
			downloaded: results.length,
			failed: errors.length,
			results,
			errors,
		})
	} catch (error) {
		console.error('Error downloading images:', error)
		return NextResponse.json(
			{ success: false, error: error instanceof Error ? error.message : 'Unknown error' },
			{ status: 500 }
		)
	}
}

