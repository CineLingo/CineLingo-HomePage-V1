"use client";

import { Navbar } from "@/components/Navbar";
import { FadeIn } from "@/components/FadeIn";
import Link from "next/link";
import Image from "next/image";
import { FinalCTA } from "@/components/Placeholders";
import { Footer } from "@/components/Footer";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Header Section */}
            <section className="pt-40 pb-4 md:pt-52 md:pb-8 bg-white relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <FadeIn>
                        <h1 className="text-4xl md:text-7xl font-bold text-gray-900 mb-4 tracking-tighter">
                            Meet Our Team
                        </h1>
                    </FadeIn>
                </div>
            </section>

            {/* Team Grid */}
            {/* Company Info Text */}
            <section className="pt-0 pb-20 md:pt-0 md:pb-32 bg-white">
                <div className="container mx-auto px-4 max-w-3xl">
                    <FadeIn delay={0.2}>
                        {/* Huge Logo as requested */}
                        <div className="relative h-24 w-full md:h-48 mb-12">
                            <Image
                                src="/image/cinelingo_logo_wordmark_color.svg"
                                alt="Cinelingo"
                                fill
                                className="object-contain object-center"
                            />
                        </div>
                        <div className="space-y-12 text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                            <p>
                                CineLingo is led by <span className="font-bold text-gray-900">Mingi Kwon</span>, <span className="font-bold text-gray-900">Jaeseok Jeong</span>, and a team of creative individuals with a shared passion. We are backed by <span className="font-bold text-gray-900">Youngjung Uh</span> at Yonsei University, <span className="font-bold text-gray-900">Yongjae Lee</span> at UW-Madison and a collection of founders and investors.
                            </p>
                            <p>
                                We have offices in Seoul, Korea. Our team members have long-tenured careers in machine learning, software, and entertainment.
                            </p>
                            <div className="pt-8 border-t border-gray-100">
                                <p className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight italic">
                                    "We strongly believe that a small, focused team with a clear vision can build great things."
                                </p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Team Photos Grid */}
            <section className="py-20 md:py-32 bg-gray-50 border-y border-gray-100">
                <div className="container mx-auto px-4 max-w-6xl">
                    <FadeIn delay={0.2}>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                "/image/photo0.jpg",
                                "/image/photo1.png",
                                "/image/photo2.jpg",
                                "/image/photo3.png",
                                "/image/photo4.png",
                                "/image/photo5.png",
                                "/image/photo6.jpg",
                                "/image/photo7.jpg",
                                "/image/photo8.jpg"
                            ].map((src, index) => (
                                <div key={index} className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                    <img
                                        src={src}
                                        alt={`Team Photo ${index + 1}`}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Contact & Location */}
            <section className="py-20 md:py-32 bg-white">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <FadeIn delay={0.4}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Location</h4>
                                <p className="text-xl text-gray-900 leading-relaxed font-medium">
                                    61, Yonsei-ro 2na-gil,<br />
                                    Seodaemun-gu, Seoul,<br />
                                    Republic of Korea
                                </p>
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Contact</h4>
                                <a href="mailto:mingikwon@cinelingo-labs.com" className="text-xl text-gray-900 font-medium hover:text-spark-orange transition-colors">
                                    mingikwon@cinelingo-labs.com
                                </a>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <FinalCTA />
            <Footer />
        </main>
    );
}
