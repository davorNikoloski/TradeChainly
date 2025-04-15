import { url } from "../../../constants";

const BASE_URL = url || "http://143.198.153.179";

// ✅ New OG-optimized image path (MUST be 1200x630, which it is now)
const DEFAULT_IMAGE = "/images/App Logo/default-og.jpg";

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
  ogImage = DEFAULT_IMAGE, // Use optimized default
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
  const fullTitle = title === "TradeChainly" || title.includes("TradeChainly")
    ? title
    : `TradeChainly • ${title}`;

  const finalCanonicalUrl = canonicalUrl || `${BASE_URL}${path}`;

  const formatImageUrl = (imagePath) => {
    if (!imagePath) return `${BASE_URL}${DEFAULT_IMAGE}`;
    return imagePath.startsWith("http") ? imagePath : `${BASE_URL}${imagePath}`;
  };

  const formattedOgImage = formatImageUrl(ogImage);
  const formattedTwitterImage = twitterImage 
    ? formatImageUrl(twitterImage) 
    : formattedOgImage;

  const metadata = {
    metadataBase: new URL(BASE_URL),
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
      site: "@TradeChainly",
      creator: "@TradeChainly",
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
