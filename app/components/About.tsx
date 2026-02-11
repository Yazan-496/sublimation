import data from '@/data';

const { about } = data;

export default function About() {
    return (
        <section
            id="about"
            className="w-full flex items-center justify-center px-5 py-16 md:py-20 lg:py-28"
        >
            <div className="w-full">
                <div className="text-center">
                    <h2 className="text-3xl font-bold sm:text-4xl">{about.title}</h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                        {about.subtitle}
                    </p>
                    <p className="mt-2 text-base text-gray-500 dark:text-gray-300">
                        {about.description}
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {about.features.map((feature, index) => (
                        <div
                            key={index}
                            className="rounded-lg bg-white p-6 shadow-lg dark:bg-zinc-800"
                        >
                            <h3 className="text-xl font-semibold">{feature.title}</h3>
                            <p className="mt-2 text-gray-500 dark:text-gray-400">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <h3 className="text-2xl font-bold sm:text-3xl">{about.services_title}</h3>
                    <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
                        {about.services_subtitle}
                    </p>
                    <p className="mt-1 text-base text-gray-500 dark:text-gray-300">
                        {about.services_description}
                    </p>
                </div>
            </div>
        </section>
    );
}
