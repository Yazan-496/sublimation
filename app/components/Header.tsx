'use client';

import { useState } from 'react';
import Image from 'next/image';
import data from '@/data';

export default function Header() {
    const { header } = data;
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full bg-white dark:bg-zinc-900 shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="shrink-0 flex items-center">
                        <a
                            href="/"
                            className="relative flex items-center justify-end h-16 min-w-[4rem]"
                        >
                            {header.logo ? (
                                <div className="relative h-16 w-16">
                                    <Image
                                        src={header.logo}
                                        alt={header.title}
                                        fill
                                        className="object-contain object-right"
                                        priority
                                    />
                                </div>
                            ) : (
                                <span className="text-xl font-bold whitespace-nowrap dark:text-white">
                                    {header.title}
                                </span>
                            )}
                        </a>
                    </div>
                    <nav className="hidden md:flex space-x-8 space-x-reverse">
                        {header.nav.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>
                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 p-2 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            <span className="sr-only">فتح القائمة</span>
                            {isOpen ? (
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-white dark:bg-zinc-900 border-t border-gray-100 dark:border-zinc-800">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {header.nav.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}
