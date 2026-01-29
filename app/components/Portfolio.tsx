import Image from 'next/image';
import data from "@/data";
export default function Portfolio() {
  const { portfolio } = data;

  return (
    <section id="portfolio" className="py-12 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            {portfolio.title}
          </h2>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">
            {portfolio.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolio.items.map((item, index) => (
            <div key={index} className="relative h-64 sm:h-80 rounded-lg overflow-hidden group bg-gray-100 dark:bg-zinc-800">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 384px"
                quality={60}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 font-medium text-lg transition-opacity duration-300">
                  {item.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
