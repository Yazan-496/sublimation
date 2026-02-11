'use client';

import data from '@/data';
import Image from 'next/image';
import ImagePreview from './LightboxModal';

const { sections } = data;

export default function DetailedServices() {
    return (
        <section id="portfolio" className="pt-8 md:py-20 px-5 lg:py-28 bg-gray-50 dark:bg-zinc-900">
            <div className="w-full">
                <div className="text-center">
                    <h2 className="text-3xl font-bold sm:text-4xl">{sections.title}</h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                        {sections.description}
                    </p>
                </div>

                <div className="mt-12 space-y-8">
                    {sections.items.map((service, index) => (
                        <div key={index} className="flex flex-col items-center gap-8">
                            <div className="w-full text-center">
                                <h3 className="text-2xl font-bold">{service.title}</h3>
                                <p className="mt-4 text-gray-600 dark:text-gray-400">
                                    {service.description}
                                </p>
                            </div>
                            <div className="w-full overflow-x-auto pb-6 snap-x snap-mandatory md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                                <div className="flex gap-2 md:gap-6 w-fit mx-auto">
                                    {service.images.map((image, imgIndex) => (
                                        <div
                                            key={imgIndex}
                                            className="shrink-0 w-72 sm:w-80 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg dark:border-zinc-700 dark:bg-zinc-800 snap-center"
                                        >
                                            <div className="relative h-78 w-full">
                                                <ImagePreview
                                                    src={image.src || ''}
                                                    alt={''}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            {/* <p className="p-3 text-center text-sm text-gray-600 dark:text-gray-300">
                                                {image.alt}
                                            </p> */}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
