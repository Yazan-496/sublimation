import data from '@/data';

const JsonLd = () => {
    const jsonLdData = {
        "@context": "https://schema.org",
        "@type": "PrintShop",
        "name": "مطبعة رقمية",
        "alternateName": "مطبعة لازورد",
        "description": data.site.description || "مطبعة رقمية متخصصة في تقديم خدمات الطباعة في الرياض",
        "url": data.site.baseUrl || "https://sublimation.vercel.app/",
        "logo": "https://sublimation.vercel.app/_next/image?url=%2Fimages%2Fhero.webp&w=1000&q=75",
        "image": "https://sublimation.vercel.app/_next/image?url=%2Fimages%2Fhero.webp&w=3840&q=75",
        "telephone": "+966572371578",
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "حي المنصورة - شارع الفرزدق",
            "addressLocality": "الرياض",
            "addressRegion": "منطقة الرياض",
            "addressCountry": "SA"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 24.615396,
            "longitude": 46.738384
        },
        "hasMap": "https://maps.app.goo.gl/YourLinkHere1",
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday", "Tuesday", "Wednesday", "Thursday",
                "Friday", "Saturday", "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+966572371578",
            "contactType": "customer service",
            "areaServed": "SA",
            "availableLanguage": ["Arabic", "English"]
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLdData)}}
        />
    );
};

export default JsonLd;