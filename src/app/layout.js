import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import DynamicSeo from "../../components/SEO/DynamicSeo";
import SiteLayout from "../../components/layout/SiteLayout";

export const metadata = {
  metadataBase: new URL("https://savedost.in"),
  title: {
    default: "SaveDost | Payments, Recharge and Financial Services",
    template: "%s | SaveDost",
  },
  description:
    "Recharge, pay bills, explore insurance, booking, PAN card, credit and loan services with SaveDost.",
  keywords: [
    "SaveDost",
    "bill payment",
    "mobile recharge",
    "insurance",
    "PAN card",
    "financial services",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "SaveDost",
    title: "SaveDost | Payments, Recharge and Financial Services",
    description:
      "Recharge, pay bills, explore insurance, booking, PAN card, credit and loan services with SaveDost.",
    url: "/",
    images: [
      {
        url: "/image/SaveDost-initial.png",
        alt: "SaveDost",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SaveDost | Payments, Recharge and Financial Services",
    description:
      "Recharge, pay bills, explore insurance, booking, PAN card, credit and loan services with SaveDost.",
    images: ["/image/SaveDost-initial.png"],
  },
  icons: {
    icon: "/image/SaveDost-initial.png",
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="p:domain_verify" content="af39ba6ce6e91e27bb91d26563303735" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
      {
        "@context": "https://schema.org",
        "@type": "Article",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://savedost.in/"
        },
        "headline": "SaveDost Bill Payment, Recharge, Insurance, Booking, Credit Card, pancard, Loan",
        "image": "https://savedost.in/_next/image?url=%2Fimage%2Fmen-home.png&w=1200&q=75",
        "author": { "@type": "Organization", "name": "" },
        "publisher": {
          "@type": "Organization",
          "name": "",
          "logo": { "@type": "ImageObject", "url": "" }
        },
        "datePublished": ""
      }
      `,
          }}
        />

        <link rel="icon" type="image/png" href="/image/SaveDost-initial.png" />

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5TKFRRHQ');`}
        </Script>
        <meta
          property="og:image"
          content="https://savedost.in/image/SaveDost-initial.png"
        />
      </head>

      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <DynamicSeo />

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5TKFRRHQ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
