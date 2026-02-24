import type { Metadata, Viewport } from 'next';
import { Cairo } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import data from '@/data';
import WhatsAppButton from './components/WhatsAppButton';
import JsonLd, { businessData } from '@/data/JsonLd';

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
    title: {
        default: businessData.siteName,
        template: `%s | ${businessData.siteName}`,
    },
    applicationName: businessData.siteName,
    description: businessData.description,
    keywords: data.site.keywords,
    metadataBase: new URL(data.site.baseUrl),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: businessData.siteName,
        description: businessData.description,
        url: data.site.baseUrl,
        siteName: businessData.siteName,
        locale: data.site.locale,
        type: 'website',
        images: [
            {
                url: data.site.ogImage,
                width: 1200,
                height: 630,
                alt: businessData.siteName,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: businessData.siteName,
        description: businessData.description,
        site: businessData.siteName,
        images: [data.site.ogImage],
    },
    icons: {
        icon: [
            { url: '/icons/icon-48.png', sizes: '48x48', type: 'image/png' },
            { url: '/icons/icon-96.png', sizes: '96x96', type: 'image/png' },
            { url: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
            { url: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
        ],
        shortcut: '/favicon.ico',
        apple: [{ url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
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
    return (
        <html lang="ar" dir="rtl">
            <body
                className={`${cairo.variable} font-sans antialiased flex flex-col min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100`}
            >
                <JsonLd />
                <Header />
                <main className="grow">{children}</main>
                <WhatsAppButton />
                <Footer />
            </body>
        </html>
    );
}
