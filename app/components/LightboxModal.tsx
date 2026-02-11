'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom'; // استيراد Portal
import Image, { ImageProps } from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface ImagePreviewProps extends Omit<ImageProps, 'src' | 'alt'> {
    src: string;
    alt: string;
    className?: string;
}

export default function ImagePreview({ src, alt, className, ...rest }: ImagePreviewProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    useEffect(() => {
        if (isOpen) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'unset';
    }, [isOpen]);

    return (
        <>
            <div
                className="shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg dark:border-zinc-700 dark:bg-zinc-800 snap-center cursor-pointer group"
                onClick={() => setIsOpen(true)}
            >
                <div className="relative h-56 w-full overflow-hidden">
                    <Image
                        className={`object-cover transition-transform duration-500 group-hover:scale-110 ${className || ''}`}
                        src={src || ''}
                        alt={alt || ''}
                        {...rest}
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"></div>
                </div>
                {alt && (
                    <p className="p-3 text-center text-sm text-gray-600 dark:text-gray-300">
                        {alt}
                    </p>
                )}
            </div>

            {mounted &&
                createPortal(
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-10"
                                onClick={() => setIsOpen(false)}
                            >
                                <button className="absolute top-6 right-6 text-white/70 hover:text-white z-[10000] transition-colors">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-10 h-10"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>

                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.8, opacity: 0 }}
                                    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                                    className="relative w-full h-[80vh] md:w-[90vw] md:h-[90vh]"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <Image
                                        src={src}
                                        alt={alt}
                                        fill
                                        className="object-contain"
                                        quality={100}
                                        priority
                                    />
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>,
                    document.body,
                )}
        </>
    );
}
