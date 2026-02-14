import data from "@/data";
import {businessData} from "@/data/JsonLd";

export default function Contact() {
  const { contact } = data;
    const {geo, location, telephone, googleMapsUrl, reviews} = businessData;

    const mapEmbedUrl = `https://maps.google.com/maps?q=${geo.lat},${geo.lng}&z=15&output=embed`;
  return (
    <section id="contact" className="py-16 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            {contact.title}
          </h2>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">
            {contact.subtitle}
          </p>
        </div>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className=" mx-auto bg-gray-50 m-2 dark:bg-zinc-900 rounded-xl shadow-lg p-8">
                  <div className="space-y-6 w-full">
                      <div className="flex items-center">
                          <div className="shrink-0">
                              <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24"
                                   stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                              </svg>
                          </div>
                          <div className="mr-3 text-lg text-gray-900 dark:text-white">
                              {contact.phone}
                          </div>
                      </div>
                      <div className="flex items-center">
                          <div className="shrink-0">
                              <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                              </svg>
                          </div>
                          <div className="mr-3 text-lg text-gray-900 dark:text-white">
                              {contact.email}
                          </div>
                      </div>
                      <div className="flex items-center text-gray-700 dark:text-gray-300">
                          <div className="shrink-0">
                          <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                          </svg>
                          </div>
                          <span className="mr-3 text-lg">{location}</span>
                      </div>

                      <div className="w-full h-64 rounded-xl overflow-hidden shadow-inner">
                          <iframe
                              src={mapEmbedUrl}
                              width="100%"
                              height="100%"
                              style={{border: 0}}
                              loading="lazy"
                          ></iframe>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                          <a
                              href={googleMapsUrl}
                              target="_blank"
                              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-xl transition font-bold"
                          >
                              فتح في الخرائط
                          </a>
                          <a
                              href={contact.whatsapp}
                              target="_blank"
                              className="flex-1 bg-green-600 hover:bg-green-700 text-white text-center py-3 rounded-xl transition font-bold"
                          >
                              واتساب
                          </a>
                      </div>
                  </div>
              </div>
          </div>


      </div>

    </section>
  );
}
