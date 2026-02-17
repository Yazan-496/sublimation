import data from '@/data';

export default function Footer() {
    const { footer } = data;

    return (
        <footer className="bg-gradient-to-tr from-[#f3f4f6] via-[#ffffff] to-[#fafafa] dark:from-[#0b0b0b] dark:via-[#22272b] dark:to-[#3a3f44] text-gray-900 dark:text-white rounded-t-xl shadow-xl border-t border-transparent">
            <div className="max-w-7xl mx-auto pb-2 pt-12 px-4 sm:px-6 lg:px-8 animate-fade-up">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-right">
                        <p className="text-gray-700 dark:text-white/90 text-sm">
                            {footer.description}
                        </p>
                    </div>
                    <div className="flex space-x-6 space-x-reverse">
                        {footer.links.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className="text-gray-600 m-1 hover:text-gray-800 dark:text-white/85 dark:hover:text-white transition-colors px-2 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-white/10"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-200 dark:border-white/20 pt-8 text-center">
                    <p className="text-sm text-gray-600 dark:text-white/80">{footer.copyright}</p>
                    <div className="mt-4 hover:bg-gray-50 dark:hover:bg-white/10 inline-flex items-center gap-2 px-3 py-1 rounded-full transition-all shadow-sm">
                        <a
                            href="https://wa.me/963980033496"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <p
                                dir="ltr"
                                className="text-sm md:flex-row flex-col text-gray-700 dark:text-white/90 flex items-center justify-center gap-2"
                            >
                                <span>Designed by Yazan Adanouf</span>
                                {/* <a
                                    href="https://wa.me/963980033496"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white/95 px-3 py-1 rounded-full transition-all shadow-sm"
                                >
                                    <svg
                                        className="whatsapp-icon"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden
                                    >
                                        <path d="M20.52 3.48A11.93 11.93 0 0012 0C5.373 0 .052 5.322.052 11.948c0 2.104.55 4.165 1.595 6.01L0 24l6.265-1.628A11.92 11.92 0 0012 23.896c6.627 0 11.948-5.322 11.948-11.948 0-3.197-1.245-6.197-3.428-8.468zM12 21.896c-1.913 0-3.783-.498-5.406-1.435l-.387-.23-3.72.967.995-3.623-.25-.39A9.92 9.92 0 012.052 11.95C2.052 7.004 6.054 3 11.999 3c2.64 0 5.147 1.027 7.015 2.893A9.91 9.91 0 0120.949 11.95C20.949 17.895 16.947 21.896 12 21.896z" />
                                        <path d="M17.5 14.1c-.3-.15-1.78-.87-2.06-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.18.2-.36.22-.66.07-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.14-.14.3-.36.45-.54.15-.18.2-.3.3-.5.1-.2 0-.37-.01-.52-.02-.15-.66-1.58-.9-2.17-.24-.57-.48-.49-.67-.5-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.45 1.07 2.86 1.22 3.06.15.2 2.11 3.4 5.12 4.77 3.01 1.37 3.01.91 3.56.85.55-.06 1.78-.73 2.03-1.44.25-.71.25-1.32.17-1.44-.08-.12-.27-.2-.57-.35z" />
                                    </svg>
                                    <span>WhatsApp: +963980033496</span>
                                </a> */}
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
