import { url as baseUrl } from "../../constants"; // adjust the path as needed

export async function GET() {
  const staticRoutes = [
    "/",
    "/404",
    "/features",
    "/contact",
    "/exchangeSupport",
    "/pricing",
    "/privacyPolicy",
    "/termsAndConditions",
    "/api/auth/[...nextauth]",
    "/api/webhook",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date().toISOString(),
  }));

  const integrations = [
    { name: "Binance" },
    { name: "Bybit" },
    { name: "Coinbase" },
    { name: "Crypto.com" },
    { name: "Kraken" },
    { name: "KuCoin" },
    { name: "OKX" },
  ];

  const dynamicRoutes = integrations.map(({ name }) => ({
    url: `${baseUrl}/singleIntegration/${name.toLowerCase()}`,
    lastModified: new Date().toISOString(),
  }));

  const allRoutes = [...staticRoutes, ...dynamicRoutes];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${allRoutes
      .map(
        ({ url, lastModified }) => `
      <url>
        <loc>${url}</loc>
        <lastmod>${lastModified}</lastmod>
      </url>`
      )
      .join("")}
  </urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
