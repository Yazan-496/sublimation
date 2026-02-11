'use client';

import dynamic from 'next/dynamic';
import About from './About';
import DetailedServices from './DetailedServices';

const Services = dynamic(() => import('./Services'), {
    ssr: false,
    loading: () => <div className="h-[600px] w-full bg-gray-50 dark:bg-zinc-900 animate-pulse" />,
});

const Portfolio = dynamic(() => import('./Portfolio'), {
    ssr: false,
    loading: () => <div className="h-[800px] w-full bg-white dark:bg-black animate-pulse" />,
});

const Testimonials = dynamic(() => import('./Testimonials'), {
    ssr: false,
    loading: () => <div className="h-[400px] w-full bg-blue-50 dark:bg-zinc-900 animate-pulse" />,
});

const Contact = dynamic(() => import('./Contact'), {
    ssr: false,
    loading: () => <div className="h-[600px] w-full bg-white dark:bg-black animate-pulse" />,
});

export default function LazySections() {
    return (
        <div className="px-5">
            <About />
            <Services />
            <DetailedServices />
            {/* <Portfolio /> */}
            {/* <Testimonials /> */}
            <Contact />
        </div>
    );
}
