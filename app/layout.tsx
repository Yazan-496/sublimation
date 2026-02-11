import type { Metadata, Viewport } from 'next';
import { Cairo } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import data from '@/data';
import WhatsAppButton from './components/WhatsAppButton';
const cairo = Cairo({
    subsets: ['arabic'],
    variable: '--font-cairo',
    display: 'swap',
    preload: true,
});

export const viewport: Viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#ffffff' },
        { media: '(prefers-color-scheme: dark)', color: '#000000' },
    ],
    initialScale: 1,
    width: 'device-width',
    minimumScale: 1,
    maximumScale: 5,
};

export const metadata: Metadata = {
    title: data.site.title,
    description: data.site.description,
    keywords: data.site.keywords,
    metadataBase: new URL(data.site.baseUrl),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: data.site.title,
        description: data.site.description,
        url: data.site.baseUrl,
        siteName: data.site.title,
        locale: data.site.locale,
        type: 'website',
        images: [
            {
                url: data.site.ogImage,
                width: 1200,
                height: 630,
                alt: data.site.title,
            },
        ],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'PrintShop',
        name: data.site.title,
        description: data.site.description,
        image: `${data.site.baseUrl}${data.site.ogImage}`,
        url: data.site.baseUrl,
        telephone: data.contact.phone,
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'شارع الملك فهد',
            addressLocality: 'الرياض',
            postalCode: '11564',
            addressCountry: 'SA',
        },
        priceRange: '$$',
    };

    return (
        <html lang="ar" dir="rtl">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body
                className={`${cairo.variable} font-sans antialiased flex flex-col min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100`}
            >
                <Header />
                <main className="grow">{children}</main>
                <WhatsAppButton />
                <Footer />
            </body>
        </html>
    );
}
