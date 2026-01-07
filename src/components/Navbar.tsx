"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useDemoModal } from "./DemoModal";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { openDemoModal } = useDemoModal();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileMenuOpen]);

    return (
        <>
            <nav
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
                    isScrolled || mobileMenuOpen
                        ? "bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm"
                        : "bg-white/70 backdrop-blur-sm"
                )}
            >
                <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between relative z-50">
                    <Link href="/" className="flex items-center gap-2 group" onClick={() => setMobileMenuOpen(false)}>
                        <div className="relative h-14 w-56 md:h-16 md:w-64 shrink-0">
                            {/* Orange Logo (Bottom Layer) */}
                            <Image
                                src="/image/cinelingo_wordmark_orange.svg"
                                alt="Cinelingo Logo Hover"
                                fill
                                className="object-contain object-left"
                                priority
                            />
                            {/* Black Logo (Top Layer - Fades out on hover) */}
                            <Image
                                src="/image/cinelingo_wordmark_black.svg"
                                alt="Cinelingo Logo"
                                fill
                                className="object-contain object-left transition-opacity duration-300 group-hover:opacity-0"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
                        <Link href="#" className="hover:text-black transition-colors">
                            Home
                        </Link>
                        <Link href="/about" className="hover:text-black transition-colors">
                            About Us
                        </Link>

                        <div className="relative group">
                            <button className="flex items-center gap-1 hover:text-black transition-colors focus:outline-none">
                                Services
                                <svg className="w-4 h-4 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 p-2">
                                <Link href="https://myvoice.cinelingo-labs.com" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg">
                                    MyVoice
                                </Link>
                                <Link href="https://editvoice.cinelingo-labs.com" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg">
                                    EditVoice
                                </Link>
                            </div>
                        </div>

                        <Link href="/research" className="hover:text-black transition-colors">
                            Research
                        </Link>
                        <Link href="/career" className="hover:text-black transition-colors">
                            Career
                        </Link>
                    </div>

                    <div className="flex items-center gap-4">
                        {/* CTA - visible on desktop, hidden on mobile unless needed */}
                        <button
                            onClick={openDemoModal}
                            className="hidden sm:block px-5 py-2.5 text-sm font-semibold text-white bg-spark-orange rounded-full hover:bg-orange-500 transition-colors"
                        >
                            Partner with Us
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2 text-gray-600 hover:text-black focus:outline-none"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 top-20 bg-white z-40 md:hidden overflow-y-auto">
                    <div className="flex flex-col p-6 gap-6 text-lg font-medium text-gray-800">
                        <Link href="/" onClick={() => setMobileMenuOpen(false)} className="border-b border-gray-100 pb-4">
                            Home
                        </Link>
                        <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="border-b border-gray-100 pb-4">
                            About Us
                        </Link>

                        <div className="border-b border-gray-100 pb-4 space-y-4">
                            <span className="text-gray-400 text-sm font-bold uppercase tracking-wider">Services</span>
                            <div className="flex flex-col gap-4 pl-4">
                                <Link href="https://myvoice.cinelingo-labs.com" onClick={() => setMobileMenuOpen(false)}>
                                    MyVoice
                                </Link>
                                <Link href="https://editvoice.cinelingo-labs.com" onClick={() => setMobileMenuOpen(false)}>
                                    EditVoice
                                </Link>
                            </div>
                        </div>

                        <Link href="/research" onClick={() => setMobileMenuOpen(false)} className="border-b border-gray-100 pb-4">
                            Research
                        </Link>
                        <Link href="/career" onClick={() => setMobileMenuOpen(false)} className="border-b border-gray-100 pb-4">
                            Career
                        </Link>

                        <button
                            onClick={() => {
                                setMobileMenuOpen(false);
                                openDemoModal();
                            }}
                            className="w-full mt-4 px-5 py-4 text-center font-bold text-white bg-spark-orange rounded-xl active:bg-orange-600 transition-colors"
                        >
                            Partner with Us
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
