import { url } from "../../../constants";

const BASE_URL = url || "http://143.198.153.179";

// Default image path (should be in public folder)
const DEFAULT_IMAGE = "/images/App Logo/HQTransparent_Mark.png";

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
  ogImage = DEFAULT_IMAGE, // Use default image if none provided

  // Twitter specific
  twitterImage,

  // URL handling
  path = "",
  canonicalUrl,

  // Technical SEO
  noIndex = false,

  // Verification
  googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  yandexVerification,

  // Extra
  ...rest
}) => {
  // Construct full title
  const fullTitle = title === "TradeChainly" || title.includes("TradeChainly")
    ? title
    : `TradeChainly • ${title}`;

  // Ensure canonical URL is properly formed
  const finalCanonicalUrl = canonicalUrl || `${BASE_URL}${path}`;

  // Helper to format image URLs (must be absolute for OG/Twitter)
  const formatImageUrl = (url) => {
    if (!url) return `${BASE_URL}${DEFAULT_IMAGE}`;
    return url.startsWith("http") ? url : `${BASE_URL}${url}`;
  };

  // Process images
  const formattedOgImage = formatImageUrl(ogImage);
  const formattedTwitterImage = twitterImage 
    ? formatImageUrl(twitterImage) 
    : formattedOgImage;

  // Main metadata object
  const metadata = {
    metadataBase: new URL(BASE_URL), // Important for Next.js 13+ to resolve relative URLs
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
      card: "summary_large_image", // Important for proper image display
      title: ogTitle || fullTitle,
      description: ogDescription || description,
      images: [formattedTwitterImage],
      site: "@TradeChainly", // Add your Twitter handle if you have one
      creator: "@TradeChainly", // Add content creator if different
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

  // Add verification tags if present
  if (googleVerification || yandexVerification) {
    metadata.verification = {
      ...(googleVerification && { google: googleVerification }),
      ...(yandexVerification && { yandex: yandexVerification }),
    };
  }

  return metadata;
};