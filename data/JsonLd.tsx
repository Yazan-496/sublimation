import Script from 'next/script';
import data from '@/data';

export const businessData = {
    name: 'مطبعة لازورد',
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
        {
            id: 3,
            name: 'فهد المطيري',
            rating: 5,
            comment: 'جودة طباعة ممتازة وأسعار منافسة. أنصح بالتعامل معهم.',
        },
        {
            id: 4,
            name: 'نورة العتيبي',
            rating: 5,
            comment: 'خدمة سريعة واحترافية. طباعة البوكسات كانت رائعة.',
        },
        {
            id: 5,
            name: 'خالد الدوسري',
            rating: 5,
            comment: 'تعاملت معهم أكثر من مرة، دائماً متميزين في الجودة والسرعة.',
        },
        {
            id: 6,
            name: 'شركة النجاح',
            rating: 5,
            comment: 'أفضل مطبعة في الرياض من حيث الجودة والالتزام بالمواعيد.',
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
        // Add alternative name in English
        alternativeName: 'Lazord Printing',
        // Add price range
        priceRange: '$$',
        // Add 24/7 opening hours
        openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday'
            ],
            opens: '00:00',
            closes: '23:59'
        },
        // Add aggregate rating based on reviews
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '5',
            reviewCount: businessData.reviews.length.toString(),
            bestRating: '5',
            worstRating: '1'
        },
        // Add reviews schema
        review: businessData.reviews.map(review => ({
            '@type': 'Review',
            author: {
                '@type': 'Person',
                name: review.name
            },
            reviewRating: {
                '@type': 'Rating',
                ratingValue: review.rating.toString(),
                bestRating: '5',
                worstRating: '1'
            },
            reviewBody: review.comment
        })),
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
        name: businessData.name,
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
