"use client";

import { useDemoModal } from "./DemoModal";
import { cn } from "@/lib/utils";
import { FadeIn } from "./FadeIn";
import { StaggerContainer, StaggerItem } from "./Stagger";

export function CoreValue() {
    return (
        <section id="value" className="py-20 md:py-32 bg-white relative overflow-hidden">
            {/* Visual Anchor: Large typographic element "ZERO" */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none select-none overflow-hidden w-full h-full flex items-center justify-center">
                <span className="text-[12rem] md:text-[30rem] font-black text-gray-900/5 tracking-tighter leading-none whitespace-nowrap">
                    ZERO
                </span>
            </div>

            <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
                <FadeIn>
                    <span className="text-caption-blue font-bold tracking-widest text-sm uppercase mb-4 block">Core Value</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                        You create. We do the rest.
                    </h2>
                    <h3 className="text-xl md:text-2xl text-gray-600 mb-16 max-w-2xl mx-auto leading-relaxed">
                        Keep your focus on your main channel. We take care of the entire international lifecycle.
                    </h3>

                    <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {["Zero Upfront Costs", "Zero Management Time", "Zero Algorithm Risk", "100% Focus on your Craft"].map((item, i) => (
                            <StaggerItem key={i} className="flex flex-col items-center group hover:-translate-y-1 transition-transform duration-300">
                                {/* Removed decorative bars per "Large typographic element only" visual anchor rule */}
                                <p className="text-lg md:text-xl font-bold text-gray-900 text-center">{item}</p>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </FadeIn>
            </div>
        </section>
    );
}

export function Process() {
    return (
        <section id="process" className="py-20 md:py-32 bg-white border-t border-gray-100 relative overflow-hidden">
            {/* Visual Anchor: Large typographic element "PROCESS" */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none select-none overflow-hidden w-full h-full flex items-center justify-center">
                <span className="text-[8rem] md:text-[25rem] font-black text-gray-900/5 tracking-tighter leading-none">
                    PROCESS
                </span>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <FadeIn>
                    <div className="text-center mb-20 md:mb-32">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight">The Simplest Partnership in YouTube.</h2>
                    </div>

                    {/* Three-step flow: Text only with subtext */}
                    <div className="max-w-6xl mx-auto">
                        <StaggerContainer className="flex flex-col md:flex-row justify-between items-center md:items-center gap-12 md:gap-8">
                            {/* Connect */}
                            <StaggerItem className="flex-1 text-center md:text-left">
                                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 tracking-tight">Connect</div>
                                <p className="text-gray-500 text-lg md:text-xl leading-relaxed">A quick chat about your channel goals.</p>
                            </StaggerItem>

                            {/* Arrow */}
                            <div className="hidden md:block text-gray-300 text-4xl font-light transform scale-y-75">→</div>

                            {/* Partner */}
                            <StaggerItem className="flex-1 text-center md:text-left">
                                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 tracking-tight">Partner</div>
                                <p className="text-gray-500 text-lg md:text-xl leading-relaxed">A simple revenue-share agreement.</p>
                            </StaggerItem>

                            {/* Arrow */}
                            <div className="hidden md:block text-gray-300 text-4xl font-light transform scale-y-75">→</div>

                            {/* Relax */}
                            <StaggerItem className="flex-1 text-center md:text-left">
                                <div className="text-3xl md:text-4xl font-bold text-spark-orange mb-3 tracking-tight">Relax</div>
                                <p className="text-gray-500 text-lg md:text-xl leading-relaxed">
                                    We launch and manage everything globally.
                                    <span className="block text-sm text-gray-400 mt-1">You just watch the numbers grow.</span>
                                </p>
                            </StaggerItem>
                        </StaggerContainer>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}

export function ManagementScope() {
    return (
        <section className="py-20 md:py-32 bg-white border-b border-gray-100 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <FadeIn>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-gray-900 tracking-tight">You don’t handle anything</h2>
                        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-12">
                            {[
                                "Translation & Dubbing",
                                "Sync & Mixing",
                                "Channel Setup & Uploads",
                                "Monetization Management",
                                "Community Management",
                                "Promotion & Shorts"
                            ].map((item, i) => (
                                <StaggerItem key={i} className="flex items-center gap-4 group cursor-default">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-spark-orange/10 flex items-center justify-center text-spark-orange group-hover:bg-spark-orange group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-lg md:text-xl text-gray-700 font-medium group-hover:text-gray-900 transition-colors group-hover:translate-x-1 transition-transform duration-300 display-inline-block">
                                        {item}
                                    </span>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}

export function SimpleDeal() {
    return (
        <section id="pricing" className="relative min-h-[600px] flex items-center overflow-hidden">
            {/* Background Image - Full Bleed */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/image/grow_together.png"
                    alt="Team reviewing dashboard"
                    className="w-full h-full object-cover object-center"
                />
                {/* Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/60 to-transparent" />
            </div>

            <div className="container mx-auto px-4 md:pl-20 relative z-10">
                <FadeIn>
                    <div className="max-w-2xl py-20 text-left">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight leading-none drop-shadow-sm">
                            Grow <br /> Together
                        </h2>

                        <div className="flex flex-wrap gap-3 mb-10">
                            <span className="px-5 py-2.5 bg-white/80 backdrop-blur-md text-gray-900 rounded-full text-sm md:text-base font-bold border border-white/50 shadow-sm">
                                No upfront cost
                            </span>
                            <span className="px-5 py-2.5 bg-white/80 backdrop-blur-md text-gray-900 rounded-full text-sm md:text-base font-bold border border-white/50 shadow-sm">
                                Revenue share
                            </span>
                        </div>

                        <p className="text-lg md:text-xl text-gray-800 font-medium leading-relaxed max-w-lg drop-shadow-sm">
                            We earn only when your localized channel earns. <br className="hidden md:block" />
                            Same direction, same incentives.
                        </p>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}

export function FreeDemo() {
    const { openDemoModal } = useDemoModal();
    return (
        <section className="relative py-20 md:py-32 overflow-hidden text-center text-white">
            {/* Background Image: Gradient 4 (Blue dominant - Calm) */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/image/gradient-4.webp"
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="container mx-auto px-4 relative z-10 max-w-2xl">
                <FadeIn>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 drop-shadow-sm">Not sure how it’ll sound?</h2>

                    <p className="text-white/90 text-lg md:text-xl mb-10 leading-relaxed font-medium drop-shadow-sm">
                        We’ll create a 1-minute dubbed demo using your existing video. <br />
                        No cost. No commitment.
                    </p>
                    <button
                        onClick={openDemoModal}
                        className="px-8 py-4 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-100 transition-all shadow-lg hover:shadow-white/20 hover:scale-105 active:scale-95"
                    >
                        Get a free demo
                    </button>
                </FadeIn>
            </div>
        </section>
    );
}

export function SocialProof() {
    return (
        <section className="py-20 md:py-32 bg-white border-b border-gray-100">
            <div className="container mx-auto px-4 text-center">
                <FadeIn delay={0.2}>
                    <p className="text-gray-500 font-medium mb-12 uppercase tracking-widest text-sm">Already working with creators you know</p>
                    <StaggerContainer className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
                        {/* Veritasium */}
                        <StaggerItem>
                            <a href="https://www.youtube.com/@veritasium" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-4 group cursor-pointer">
                                <div className="relative w-24 h-24 rounded-full overflow-hidden shadow-lg group-hover:scale-110 transition-transform duration-300 ring-2 ring-transparent group-hover:ring-spark-orange/20">
                                    <img
                                        src="/image/veritasium_logo.jpg"
                                        alt="Veritasium"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <span className="text-sm font-bold text-gray-400 group-hover:text-gray-900 transition-colors uppercase tracking-wider group-hover:translate-y-1 transition-transform">Veritasium</span>
                            </a>
                        </StaggerItem>

                        {/* 3Blue1Brown */}
                        <StaggerItem>
                            <a href="https://www.youtube.com/@3blue1brown" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-4 group cursor-pointer">
                                <div className="relative w-24 h-24 rounded-full overflow-hidden shadow-lg group-hover:scale-110 transition-transform duration-300 ring-2 ring-transparent group-hover:ring-spark-orange/20">
                                    <img
                                        src="/image/3blue1brown_logo.jpg"
                                        alt="3Blue1Brown"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <span className="text-sm font-bold text-gray-400 group-hover:text-gray-900 transition-colors uppercase tracking-wider group-hover:translate-y-1 transition-transform">3Blue1Brown</span>
                            </a>
                        </StaggerItem>

                        {/* Welch Labs */}
                        <StaggerItem>
                            <a href="https://www.youtube.com/@WelchLabsVideo" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-4 group cursor-pointer">
                                <div className="relative w-24 h-24 rounded-full overflow-hidden shadow-lg group-hover:scale-110 transition-transform duration-300 ring-2 ring-transparent group-hover:ring-spark-orange/20">
                                    <img
                                        src="/image/welchlabs_logo.jpg"
                                        alt="Welch Labs"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <span className="text-sm font-bold text-gray-400 group-hover:text-gray-900 transition-colors uppercase tracking-wider group-hover:translate-y-1 transition-transform">Welch Labs</span>
                            </a>
                        </StaggerItem>
                    </StaggerContainer>
                </FadeIn>
            </div>
        </section>
    );
}

export function SafetyLogic() {
    return (
        <section className="py-20 md:py-32 bg-gray-50 relative overflow-hidden">
            {/* Atmospheric Blob */}
            <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-white/40 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />

            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                <FadeIn>
                    <div className="text-center mb-16 md:mb-24">
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gray-900">Global Reach, No Interference.</h2>
                    </div>

                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
                        {/* Column 1: Original */}
                        <StaggerItem className="text-center md:text-right order-2 md:order-1">
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 uppercase tracking-widest">Original Channel</h3>
                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
                                Your home algorithm stays pure. <br />
                                We never touch your source.
                            </p>
                        </StaggerItem>

                        {/* Middle: Visual Metaphor (Prism) */}
                        <StaggerItem className="relative h-64 md:h-80 w-full flex items-center justify-center order-1 md:order-2">
                            <img
                                src="/image/safety_prism.png"
                                alt="Prism Metaphor"
                                className="w-full h-full object-contain drop-shadow-2xl mix-blend-multiply"
                            />
                        </StaggerItem>

                        {/* Column 2: Localized */}
                        <StaggerItem className="text-center md:text-left order-3 md:order-3">
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 uppercase tracking-widest">Localized Channels</h3>
                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
                                We launch separate localized channels. <br />
                                It’s like a second storefront.
                            </p>
                        </StaggerItem>
                    </StaggerContainer>
                </FadeIn>
            </div>
        </section>
    );
}

export function FAQ() {
    return (
        <section className="py-20 md:py-32 bg-white">
            <div className="container mx-auto px-4 max-w-2xl">
                <FadeIn>
                    <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-gray-900 tracking-tight">FAQ</h2>
                    <StaggerContainer className="space-y-6">
                        {[
                            { q: "How much do I have to work?", a: "After the initial setup, virtually zero. We are your dedicated international team, not a tool you have to learn." },
                            { q: "Is there really no upfront cost?", a: "Yes—there are no setup fees or fixed monthly charges. We work on a revenue-share model and earn only when your localized channel earns." },
                            { q: "Do you upload to my main channel?", a: "No. We create and operate separate channels for each language (e.g., YourName Español). This allows us to optimize for local algorithms without affecting your main channel." },
                            { q: "Is it AI or Human?", a: "It’s the best of both. We use cutting-edge tech guided by expert ears to ensure your \"vibe\" is never lost in translation." }
                        ].map((item, i) => (
                            <StaggerItem key={i} className="bg-gray-50 p-6 rounded-2xl hover:bg-gray-100 transition-colors cursor-default hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                                <h4 className="font-bold text-lg md:text-xl mb-3 text-gray-900">
                                    {item.q}
                                </h4>
                                <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-medium">{item.a}</p>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </FadeIn>
            </div>
        </section>
    );
}

export function FinalCTA() {
    const { openDemoModal } = useDemoModal();
    return (
        <section className="relative py-20 md:py-32 overflow-hidden text-center">
            {/* Background Image: Gradient 1 (Orange dominant) */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/image/gradient-1.webp"
                    alt=""
                    className="w-full h-full object-cover"
                />
                {/* Subtle dark overlay for text readability */}
                <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <FadeIn>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight drop-shadow-sm">
                        Don’t let your content <br /> stop at the border.
                    </h2>
                    <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto font-medium shadow-black/5 drop-shadow-sm">
                        Join the world’s top creators and start your global journey today.
                    </p>
                    <button
                        onClick={openDemoModal}
                        className="px-10 py-5 text-xl font-bold text-spark-orange bg-white rounded-full hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:scale-105 active:scale-95"
                    >
                        Claim Your Free Demo
                    </button>
                </FadeIn>
            </div>
        </section>
    );
}
