import { DefaultSeoProps } from "next-seo";
import config from "./utils/config";

const SEO: DefaultSeoProps = {
  canonical: config.url,
  title: "How much would I have today if I invested ₹10,000 in a IPO?",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: config.url,
    site_name: "onethousand-eta.vercel.app",
    title: "How much would I have today if I invested ₹10,000 in a IPO?",
    description:
      "If you had invested ₹10,000 when a company went public, how much would you have today?",
    images: [{ url: `${config.url}/api/poster/ipobrief` }],
  },
  twitter: {
    cardType: "summary_large_image",
    site: "@IPOBrief",
    handle: "@IPOBrief",
  },
};

export default SEO;
