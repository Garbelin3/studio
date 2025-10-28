import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const pageTitle = "365 Dias de Fé — Um versículo por dia para transformar sua rotina";
const pageDescription = "365 versículos, um por dia, para restaurar sua fé, trazer direção e paz. Acesse hoje e comece em minutos.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "website",
    url: "https://daily-faith.example.com", // TODO: Replace with actual URL
    images: [
      {
        url: "https://picsum.photos/seed/og1/1200/630",
        width: 1200,
        height: 630,
        alt: "Uma imagem inspiradora com um versículo bíblico.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["https://picsum.photos/seed/og1/1200/630"],
  },
};

const facebookPixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID ?? "1186620116862994";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "365 Dias de Fé",
  "description": pageDescription,
  "image": "https://picsum.photos/seed/og1/1200/630",
  "offers": {
    "@type": "Offer",
    "price": "97.00",
    "priceCurrency": "BRL",
    "availability": "https://schema.org/InStock",
    "url": "https://daily-faith.example.com/#oferta",
    "seller": {
      "@type": "Organization",
      "name": "365 Dias de Fé"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1254"
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700;800&family=Inter:wght@400;500&display=swap" rel="stylesheet" />
        {facebookPixelId && (
          <>
            <script
              dangerouslySetInnerHTML={{
                __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');`,
              }}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `fbq('init', '${facebookPixelId}'); fbq('track', 'PageView');`,
              }}
            />
          </>
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">
        {facebookPixelId && (
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img height="1" width="1" style={{ display: 'none' }} src={`https://www.facebook.com/tr?id=${facebookPixelId}&ev=PageView&noscript=1`} alt="" />
          </noscript>
        )}
        {children}
        <Toaster />
      </body>
    </html>
  );
}
