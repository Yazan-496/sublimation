import Image from 'next/image';
import data from '@/data';

export default function Hero() {
    const { hero } = data;
    return (
        <section id="hero" className="relative bg-white px-5 dark:bg-black overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="relative pb-12 bg-white dark:bg-black sm:pb-24 md:pb-32 lg:max-w-2xl lg:w-full lg:pb-40 xl:pb-48">
                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 relative z-20">
                        <div className="sm:text-center lg:text-right">
                            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                                <span className="block xl:inline leading-tight">{hero.title}</span>
                            </h1>
                            <p className="text-gray-500 dark:text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 mt-4 text-lg whitespace-pre-line">
                                {hero.subtitle}
                            </p>
                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                <div className="rounded-md shadow">
                                    <a
                                        href={hero.ctaLink}
                                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-colors"
                                    >
                                        {hero.cta}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2 bg-gray-100 dark:bg-zinc-800">
                <div className="h-96 px-5 w-full sm:h-[30rem] md:h-[40rem] lg:w-full lg:h-full relative overflow-hidden">
                    <Image
                        src={hero.image}
                        alt={hero.imageAlt}
                        fill
                        className="object-cover object-center bg-gray-50 dark:bg-zinc-900"
                        priority
                        fetchPriority="high"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>
            </div>
        </section>
    );
}
