import Script from 'next/script';
import data from '@/data';
import { log } from 'console';
import { url } from 'inspector';

const mapId = 'a3NvHM2v1nBf1Qjj9'; // uEYHSwfFSkKRtcS2A
export const businessData = {
    name: 'مطبعة لازورد',
    fullName: 'مطبعة لازورد - أفضل خدمات طباعة في الرياض',
    siteName: 'Lazord Printing',
    description: data.site.description,
    url: data.site.baseUrl,
    telephone: '+966572371578',
    whatsapp: 'https://wa.me/966572371578',
    phone: 'tel: +966572371578',
    location: 'المملكة العربية السعودية - الرياض - حي المنصورة - شارع الفرزدق',
    geo: {
        lat: 24.61574870574911,
        lng: 46.73759422944415,
    },
    googleMapsUrl: `https://maps.app.goo.gl/${mapId}`, // https://maps.app.goo.gl/a3NvHM2v1nBf1Qjj9
    reviews: [
        {
            id: 1,
            name: 'سعد القحطاني',
            rating: 5,
            comment: 'أفضل مطبعة في الرياض من ناحية الدقة والسرعة.',
        },
        {
            id: 2,
            name: 'مؤسسة الإبداع',
            rating: 5,
            comment: 'تعامل راقي جداً والنتيجة مبهرة دائماً.',
        },
    ],
};

export const mapEmbedUrl = `https://maps.google.com/maps?q=${businessData.geo.lat},${businessData.geo.lng}&z=15&output=embed`;

export default function JsonLd() {
    const org = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': `${data.site.baseUrl}#organization`,
        name: businessData.siteName,
        alternateName: businessData.siteName,
        description: businessData.description,
        url: data.site.baseUrl,
        logo: data.site.baseUrl + data.site.logo,
        sameAs: [businessData.phone, businessData.whatsapp].filter(Boolean),
        contactPoint: [
            {
                '@type': 'ContactPoint',
                telephone: businessData.telephone,
                contactType: 'customer service',
                areaServed: 'SA',
                availableLanguage: ['Arabic', 'English'],
            },
        ],
        address: {
            '@type': 'PostalAddress',
            streetAddress: businessData.location,
            addressLocality: 'الرياض',
            addressCountry: 'SA',
            postalCode: '12692',
        },
    };

    const localBusiness = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': `${data.site.baseUrl}#localBusiness`,
        name: businessData.name,
        alternateName: businessData.siteName,
        description: businessData.description,
        url: data.site.baseUrl,
        image: [data.site.baseUrl + data.site.ogImage],
        logo: data.site.baseUrl + data.site.logo,
        telephone: businessData.telephone,
        priceRange: '$',
        parentOrganization: {
            '@id': `${data.site.baseUrl}#organization`,
        },
        contactPoint: [
            {
                '@type': 'ContactPoint',
                telephone: businessData.telephone,
                contactType: 'customer service',
                areaServed: 'SA',
                availableLanguage: ['Arabic', 'English'],
            },
        ],
        address: {
            '@type': 'PostalAddress',
            streetAddress: businessData.location,
            addressLocality: 'الرياض',
            addressCountry: 'SA',
            postalCode: '12692',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: businessData.geo.lat,
            longitude: businessData.geo.lng,
        },
        hasMap: businessData.googleMapsUrl,
        sameAs: [businessData.phone, businessData.whatsapp].filter(Boolean),
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '5',
            ratingCount: businessData.reviews.length,
        },
        review: businessData.reviews.map((review) => ({
            '@type': 'Review',
            author: { '@type': 'Person', name: review.name },
            reviewRating: {
                '@type': 'Rating',
                ratingValue: review.rating.toString(),
            },
            reviewBody: review.comment,
        })),
    };

    const website = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${data.site.baseUrl}#webSite`,
        url: data.site.baseUrl,
        name: businessData.siteName,
        alternateName: businessData.siteName,
        publisher: {
            '@id': `${data.site.baseUrl}#organization`,
        },
    };

    const contactPage = {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        '@id': `${data.site.baseUrl}#contactPage`,
        url: `${data.site.baseUrl}/contact-us`,
        name: `اتصل بنا - ${businessData.siteName}`,
        mainEntity: {
            '@type': 'ContactPoint',
            telephone: businessData.telephone,
            contactType: 'customer service',
        },
    };

    const webPage = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': `${data.site.baseUrl}#webPage`,
        url: data.site.baseUrl,
        name: businessData.fullName,
        description: businessData.description,
        image: [data.site.baseUrl + data.site.ogImage],
    };

    const article = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        '@id': `${data.site.baseUrl}#article`,
        headline: businessData.fullName,
        description: businessData.description,
        image: [data.site.baseUrl + data.site.ogImage],
        url: data.site.baseUrl + data.site.logo,
        datePublished: new Date().toISOString(),
        dateModified: new Date().toISOString(),
        author: {
            '@type': 'Organization',
            name: businessData.siteName,
            logo: data.site.baseUrl + data.site.logo,
            url: data.site.baseUrl + data.site.logo,
        },
        publisher: {
            '@type': 'Organization',
            name: businessData.siteName,
            logo: {
                '@type': 'ImageObject',
                url: data.site.baseUrl + data.site.logo,
            },
        },
        mainEntityOfPage: data.site.baseUrl,
    };

    const breadcrumb = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        '@id': `${data.site.baseUrl}#breadcrumb`,
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'الرئيسية',
                item: data.site.baseUrl,
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'خدمات الطباعة',
                item: `${data.site.baseUrl}/#printing-service`,
            },
            {
                '@type': 'ListItem',
                position: 3,
                name: 'معرض الأعمال',
                item: `${data.site.baseUrl}/#all-services`,
            },
            {
                '@type': 'ListItem',
                position: 4,
                name: 'اتصل بنا',
                item: `${data.site.baseUrl}/#contact-us`,
            },
        ],
    };

    const schema = {
        '@context': 'https://schema.org',
        '@graph': [org, localBusiness, website, contactPage, webPage, article, breadcrumb],
    };

    return (
        <Script
            id="json-ld"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            strategy="beforeInteractive"
        />
    );
}
