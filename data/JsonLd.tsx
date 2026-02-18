import Script from 'next/script';
import data from '@/data';

export const businessData = {
    name: 'مطبعة لازورد',
    fullName: 'مطبعة لازورد - أفضل خدمات طباعة في الرياض',
    siteName: 'Lazord Printing',
    description: data.site.description,
    url: data.site.baseUrl,
    telephone: '+966572371578',
    location: 'المملكة العربية السعودية - الرياض - حي المنصورة - شارع الفرزدق',
    geo: {
        lat: 24.615396,
        lng: 46.738384,
    },
    googleMapsUrl: 'https://goo.gl/maps/uEYHSwfFSkKRtcS2A?g_st=aw',
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
        name: businessData.name,
        siteName: businessData.siteName,
        description: businessData.description,
        url: data.site.baseUrl,
        logo: data.site.baseUrl + data.site.ogImage,
        sameAs: [data.site.social.twitter, data.site.social.instagram].filter(Boolean),
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
    };

    const website = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        url: data.site.baseUrl,
        name: businessData.name,
        siteName: businessData.siteName,
        potentialAction: {
            '@type': 'SearchAction',
            target: `${data.site.baseUrl}/?s={search_term_string}`,
            'query-input': 'required name=search_term_string',
        },
    };

    const contactPage = {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        url: `${data.site.baseUrl}/#contact`,
        name: `اتصل بنا - ${businessData.name}`,
        mainEntity: {
            '@type': 'ContactPoint',
            telephone: businessData.telephone,
            contactType: 'customer service',
        },
    };

    const webPage = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        url: data.site.baseUrl,
        name: businessData.fullName,
        siteName: businessData.siteName,
        description: businessData.description,
        image: [data.site.baseUrl + data.site.ogImage],
    };

    const schema = [org, website, contactPage, webPage];

    return (
        <Script
            id="json-ld"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            strategy="beforeInteractive"
        />
    );
}
