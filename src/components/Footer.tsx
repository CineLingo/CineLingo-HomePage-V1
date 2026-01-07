"use client";

import Link from "next/link";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="bg-black text-white py-12 md:py-20 relative overflow-hidden">
            {/* Watermark Background - visual flair */}
            <div className="absolute -right-20 -bottom-20 w-96 h-96 opacity-10 pointer-events-none select-none">
                <Image
                    src="/image/cinelingo_logo_watermark_white.svg"
                    alt=""
                    fill
                    className="object-contain"
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12">

                    {/* Brand Column */}
                    <div className="text-center md:text-left">
                        <div className="relative h-10 w-48 mx-auto md:mx-0 mb-6">
                            <Image
                                src="/image/cinelingo_wordmark_white.svg"
                                alt="Cinelingo"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                        <p className="text-gray-400 text-sm max-w-xs mx-auto md:mx-0 leading-relaxed">
                            We localize, launch, and run your YouTube videos in new languages—end to end.
                        </p>
                    </div>

                    {/* Links Column */}
                    <div className="flex gap-12 text-sm font-medium text-gray-400">
                        <div className="flex flex-col gap-4">
                            <span className="text-white font-bold uppercase tracking-widest text-xs">Company</span>
                            <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
                            <Link href="/career" className="hover:text-white transition-colors">Careers</Link>
                        </div>
                        <div className="flex flex-col gap-4">
                            <span className="text-white font-bold uppercase tracking-widest text-xs">Legal</span>
                            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-12 pt-8 text-center md:text-left text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Cinelingo. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
