import { MetadataRoute } from 'next';
import data from "@/data";
export default function robots(): MetadataRoute.Robots {
  const baseUrl = data.site.baseUrl;
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
