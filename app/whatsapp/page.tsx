'use client';

import { businessData } from '@/data/JsonLd';
import Image from 'next/image';
import { useEffect } from 'react';

export default function WhatsappPage() {
    useEffect(() => {
        const timer = setTimeout(() => {
            window.location.href = businessData.whatsapp;
        }, 650);

        return () => clearTimeout(timer);
    }, []);

    return (
        <main className="min-h-screen bg-[#0b0f17] text-white px-6 py-12 flex items-center justify-center overflow-hidden">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-24 left-10 h-56 w-56 rounded-full bg-emerald-500/25 blur-3xl float-slow" />
                <div className="absolute top-24 right-10 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl float-fast" />
                <div className="absolute -bottom-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-500/25 blur-3xl float-mid" />
            </div>

            <div className="relative z-10 w-full max-w-5xl">
                <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] items-center">
                    <div className="rounded-4xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-12 shadow-[0_40px_120px_rgba(0,0,0,0.4)]">
                        <div className="flex items-center gap-4">
                            <div className="relative h-14 w-14 rounded-2xl bg-white/10 p-2">
                                <Image
                                    src="/images/logo.png"
                                    alt="Lazord Printing"
                                    fill
                                    className="object-contain"
                                    sizes="56px"
                                    priority
                                />
                            </div>
                            <div>
                                <p className="text-sm text-emerald-200">Lazord Printing</p>
                                <h1 className="text-3xl md:text-4xl font-semibold">
                                    جاري تحويلك إلى واتساب
                                </h1>
                            </div>
                        </div>

                        <p className="mt-6 text-lg text-white/80">
                            سنفتح المحادثة مباشرة مع فريق مطبعة لازورد خلال ثوان.
                        </p>
                        <p className="mt-2 text-sm text-white/50">
                            إذا لم يتم التحويل تلقائيا، اضغط الزر أدناه.
                        </p>

                        <div className="mt-8">
                            <a
                                href={businessData.whatsapp}
                                className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:scale-[1.02] hover:bg-emerald-400"
                            >
                                فتح واتساب الآن
                            </a>
                        </div>

                        <div className="mt-6">
                            <div className="flex items-center gap-3 text-xs text-white/60">
                                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                                    تحويل تلقائي
                                </span>
                                <span>رقم الخدمة: 966572371578</span>
                            </div>
                            <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-white/10">
                                <span className="block h-full w-1/3 rounded-full bg-gradient-to-r from-emerald-400 via-sky-400 to-indigo-400 progress-bar" />
                            </div>
                        </div>
                    </div>

                    <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-10 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
                        <h2 className="text-xl font-semibold">نصائح سريعة لرسالة أسرع</h2>
                        <ul className="mt-5 space-y-3 text-sm text-white/75">
                            <li className="flex items-start gap-3">
                                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                                اذكر نوع الطباعة والكمية المطلوبة.
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1 h-2 w-2 rounded-full bg-sky-400" />
                                ارفق التصميم أو المقاسات إن وُجد.
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1 h-2 w-2 rounded-full bg-indigo-400" />
                                حدّد موعد التسليم المتوقع.
                            </li>
                        </ul>

                        <div className="mt-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5">
                            <p className="text-sm text-emerald-200">جاهزين لأي استفسار</p>
                            <p className="mt-2 text-base text-white/80">
                                خدمة سريعة، جودة عالية، وتسعير واضح.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .float-slow {
                    animation: float 12s ease-in-out infinite;
                }
                .float-mid {
                    animation: float 9s ease-in-out infinite;
                }
                .float-fast {
                    animation: float 7s ease-in-out infinite;
                }
                .progress-bar {
                    animation: loading 1.6s ease-in-out infinite;
                }
                @keyframes float {
                    0%,
                    100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-14px);
                    }
                }
                @keyframes loading {
                    0% {
                        transform: translateX(-40%);
                    }
                    100% {
                        transform: translateX(260%);
                    }
                }
            `}</style>
        </main>
    );
}
