import type { Metadata, Viewport } from 'next';
import { Cairo } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import data from '@/data';
import WhatsAppButton from './components/WhatsAppButton';
import JsonLd from '@/data/JsonLd';

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
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon.ico',
        apple: '/apple-touch-icon.png',
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
