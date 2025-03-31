export default async function sitemap() {
    const baseUrl = "http://143.198.153.179";
  
    // Static Routes
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
  
    // Dynamic Routes: Single Integrations
    const integrations = [
      { id: 1, name: "Binance" },
      { id: 2, name: "Bybit" },
      { id: 3, name: "Coinbase" },
      { id: 4, name: "Crypto.com" },
      { id: 5, name: "Kraken" },
      { id: 6, name: "KuCoin" },
      { id: 7, name: "OKX" },
    ];
  
    const dynamicRoutes = integrations.map(({ name }) => ({
      url: `${baseUrl}/singleIntegration/${name.toLowerCase()}`,
      lastModified: new Date().toISOString(),
    }));
  
    return [...staticRoutes, ...dynamicRoutes];
  }
  