import Image from 'next/image';
import data from "@/data";
export default function Services() {
  const { services } = data;

  return (
    <section id="services" className="py-12 bg-gray-50 dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">خدماتنا</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {services.title}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
            {services.subtitle}
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {services.items.map((service, index) => (
              <div key={index} className="flex flex-col items-center text-center bg-white dark:bg-black rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
                <div className="h-48 w-full relative bg-gray-200 dark:bg-zinc-800">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 25vw, 256px"
                    quality={60}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
