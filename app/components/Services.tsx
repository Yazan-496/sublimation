import Image from 'next/image';
import data from '@/data';
import ImagePreview from './LightboxModal';
export default function Services() {
    const { services } = data;

    return (
        <section id="services" className="pt-8 bg-gray-50 dark:bg-zinc-900">
            <div className=" mx-auto text-center px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
                        خدماتنا
                    </h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        {services.title}
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
                        {services.subtitle}
                    </p>
                </div>

                <div className="w-full overflow-x-auto mt-5 pb-0 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    <div className="flex gap-4 px-5 md:px-0 w-max md:w-fit md:mx-auto">
                        {services.items.map((service, index) => (
                            <div
                                key={index}
                                className="h-full max-h-[500px] shrink-0 w-72 sm:w-80 flex flex-col bg-white dark:bg-black rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-[1.02] border border-gray-100 dark:border-zinc-800 snap-center"
                            >
                                <div className="p-4 text-center">
                                    <h3 className="text-lg leading-6 font-bold text-gray-900 dark:text-white">
                                        {service.title}
                                    </h3>
                                </div>

                                <div className="h-78 w-full relative overflow-hidden bg-gray-200 dark:bg-zinc-800">
                                    <ImagePreview
                                        src={service.image}
                                        alt={''}
                                        fill
                                        className="object-cover h-full"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                        quality={60}
                                    />
                                </div>

                                <div className="p-4 h-auto text-center grow">
                                    <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-3">
                                        {service.description}
                                    </p>
                                </div>

                                <div className="pb-4 flex justify-center">
                                    <div className="flex items-center justify-center w-8 h-8 rounded-full dark:text-white text-black text-sm font-bold shadow-sm">
                                        {index + 1}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
