import { url } from "../../../constants";

const BASE_URL = url || "http://143.198.153.179";

export const generateMetadata = ({
  // Basic metadata
  title = "TradeChainly",
  description = "Automated Crypto Trading Journal & Analytics Platform",
  keywords = [
    "crypto trading journal",
    "automated trade tracking",
    "trading analytics"
  ],

  // OG/Twitter specific
  ogTitle,
  ogDescription,
  ogImage = "/images/App Logo/android-chrome-512x512.png",

  // Twitter specific
  twitterImage,

  // URL handling
  path = "", // New parameter for route paths
  canonicalUrl,

  // Technical SEO
  noIndex = false,

  // Verification
  googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  yandexVerification,

  // Extra
  ...rest
}) => {
  const fullTitle = title.includes("TradeChainly")
    ? title
    : `TradeChainly • ${title}`;

  const finalCanonicalUrl = canonicalUrl || `${BASE_URL}${path}`;

  // Normalize image URLs (must be absolute for OG/Twitter)
  const formatImageUrl = (url) =>
    url.startsWith("http") ? url : `${BASE_URL}${url}`;

  const formattedOgImage = formatImageUrl(ogImage);
  const formattedTwitterImage = twitterImage
    ? formatImageUrl(twitterImage)
    : formattedOgImage;

  const metadata = {
    title: fullTitle,
    description,
    keywords,
    alternates: {
      canonical: finalCanonicalUrl,
    },
    openGraph: {
      title: ogTitle || fullTitle,
      description: ogDescription || description,
      url: finalCanonicalUrl,
      siteName: "TradeChainly",
      images: [
        {
          url: formattedOgImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle || fullTitle,
      description: ogDescription || description,
      images: [formattedTwitterImage],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      nocache: noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        noimageindex: noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    ...rest,
  };

  if (googleVerification || yandexVerification) {
    metadata.verification = {
      ...(googleVerification && { google: googleVerification }),
      ...(yandexVerification && { yandex: yandexVerification }),
    };
  }

  return metadata;
};
