import { NextResponse } from "next/server";
import { url } from "../../../constants";

export function GET() {
  const content = `
User-agent: *
Disallow: /_next/
Disallow: /api/
Disallow: /admin/

User-agent: Googlebot
Disallow: /private/

Sitemap: ${url}/sitemap.xml
  `.trim();

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
