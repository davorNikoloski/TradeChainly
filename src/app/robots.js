import { NextResponse } from 'next/server';

export async function GET() {
  // Use your production URL (replace with environment variable if needed)
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://143.198.153.179';

  // Define the robots.txt content
  const robotsText = `
User-agent: *
Disallow: /api/
Disallow: /admin/
Allow: /

Sitemap: ${baseUrl}/sitemap.xml
  `;

  // Return the response with correct headers
  return new NextResponse(robotsText, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400', // Cache for 24h
    },
  });
}