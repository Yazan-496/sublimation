// src/components/JsonLd.tsx
import data from '@/data';

export const businessData = {
    name: "مطبعة لازورد",
    description: data.site.description,
    url: data.site.baseUrl,
    telephone: "+966572371578",
    location: "المملكة العربية السعودية - الرياض - حي المنصورة - شارع الفرزدق",
    geo: {
        lat: 24.615396,
        lng: 46.738384
    },
    googleMapsUrl: "https://maps.app.goo.gl/UFhxFarVbhGcc1f2A",
    reviews: [
        { id: 1, name: "سعد القحطاني", rating: 5, comment: "أفضل مطبعة في الرياض من ناحية الدقة والسرعة." },
        { id: 2, name: "مؤسسة الإبداع", rating: 5, comment: "تعامل راقي جداً والنتيجة مبهرة دائماً." },
    ]
};

export default function JsonLd() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "PrintShop",
        "name": businessData.name,
        "description": businessData.description,
        "telephone": businessData.telephone,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": businessData.location,
            "addressLocality": "الرياض",
            "addressCountry": "SA"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": businessData.geo.lat,
            "longitude": businessData.geo.lng
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}