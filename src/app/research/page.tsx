"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Globe } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/Stagger";
import { useCareerModal } from "@/components/CareerModal";

export default function ResearchPage() {
    const { openCareerModal } = useCareerModal();
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Header / Hero for Research */}
            <section className="pt-32 pb-20 bg-gray-50 border-b border-gray-100">
                <div className="container mx-auto px-4">
                    <FadeIn>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
                            Research
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
                            Pushing the boundaries of AI-driven media localization.
                            Our team reconstructs video content from the ground up.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Paper 1: JAM-Flow */}
            <section className="py-20 border-b border-gray-100">
                <div className="container mx-auto px-4">
                    <FadeIn>
                        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                            {/* Text Content */}
                            <div className="flex-1">
                                <div className="mb-2 text-spark-orange font-bold uppercase tracking-widest text-sm">
                                    Audio-Motion Synthesis
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                                    JAM-Flow: Joint Audio-Motion Synthesis with Flow Matching
                                </h2>
                                <p className="text-gray-500 mb-6 font-medium">
                                    CineLingo Research Team • Seoul, South Korea
                                </p>

                                <div className="flex flex-wrap gap-4 mb-8">
                                    <Link
                                        href="https://www.arxiv.org/abs/2506.23552"
                                        target="_blank"
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold transition-colors"
                                    >
                                        <BookOpen size={18} />
                                        <span>arXiv</span>
                                    </Link>
                                    <Link
                                        href="https://joonghyuk.com/jamflow-web/"
                                        target="_blank"
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold transition-colors"
                                    >
                                        <Globe size={18} />
                                        <span>Project Page</span>
                                    </Link>
                                </div>

                                <div className="prose prose-lg text-gray-600 mb-8">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Abstract</h3>
                                    <p className="mb-4">
                                        The intrinsic link between facial motion and speech is often overlooked in video localization, where lip-sync, text-to-speech (TTS), and visual text translation are typically addressed as separate tasks. This paper introduces CineLingo, a unified framework to simultaneously synthesize and condition on both facial motion, speech, and visual elements for seamless video localization.
                                    </p>
                                    <p>
                                        Our approach leverages advanced AI models and a novel Multi-Modal Localization Transformer (MM-LT) architecture. Trained with an end-to-end objective, CineLingo supports a wide array of conditioning inputs—including text, reference audio, and reference motion.
                                    </p>
                                </div>
                            </div>

                            {/* Image Content */}
                            <div className="flex-1">
                                <div className="bg-gray-50 rounded-2xl p-4 md:p-8 border border-gray-100">
                                    <div className="relative aspect-[4/3] w-full mb-4">
                                        <Image
                                            src="/image/jamflow_archi.png"
                                            alt="JAM-Flow Architecture"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <p className="text-sm text-gray-400 text-center font-medium">
                                        Figure 1: The training and inference pipeline of the JAM-Flow framework.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Paper 2: TTS-CtrlNet */}
            <section className="py-20 border-b border-gray-100 bg-gray-50/50">
                <div className="container mx-auto px-4">
                    <FadeIn>
                        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                            {/* Text Content */}
                            <div className="flex-1 order-1 lg:order-2">
                                <div className="mb-2 text-spark-orange font-bold uppercase tracking-widest text-sm">
                                    Emotion Control TTS
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                                    TTS-CtrlNet: Time varying emotion aligned text-to-speech generation with ControlNet
                                </h2>
                                <p className="text-gray-500 mb-6 font-medium">
                                    CineLingo Research Team • Seoul, South Korea
                                </p>

                                <div className="flex flex-wrap gap-4 mb-8">
                                    <Link
                                        href="https://arxiv.org/abs/2507.04349"
                                        target="_blank"
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold transition-colors"
                                    >
                                        <BookOpen size={18} />
                                        <span>arXiv</span>
                                    </Link>
                                    <Link
                                        href="https://curryjung.github.io/ttsctrlnet_project_page/"
                                        target="_blank"
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold transition-colors"
                                    >
                                        <Globe size={18} />
                                        <span>Project Page</span>
                                    </Link>
                                </div>

                                <div className="prose prose-lg text-gray-600 mb-8">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Abstract</h3>
                                    <p className="mb-4">
                                        Recent advances in text-to-speech (TTS) have enabled natural speech synthesis, but fine-grained, time-varying emotion control remains challenging. We propose the first ControlNet-based approach for controlling flow-matching TTS (TTS-CtrlNet).
                                    </p>
                                    <p>
                                        We show that TTS-CtrlNet can boost the pretrained large TTS model by adding intuitive, scalable, and time-varying emotion control while inheriting the ability of the original model (e.g., zero-shot voice cloning & naturalness).
                                    </p>
                                </div>
                            </div>

                            {/* Image Content */}
                            <div className="flex-1 order-2 lg:order-1">
                                <div className="bg-white rounded-2xl p-4 md:p-8 border border-gray-100 shadow-sm">
                                    <div className="relative aspect-video w-full mb-4">
                                        <Image
                                            src="/image/ttsctrlnet_archi.png"
                                            alt="TTS-CtrlNet Architecture"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <p className="text-sm text-gray-400 text-center font-medium">
                                        Figure 2: The training and inference pipeline of the TTS-CtrlNet framework.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Research Areas */}
            <section className="py-20 md:py-32">
                <div className="container mx-auto px-4">
                    <FadeIn>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center tracking-tight">
                            Our Research Areas
                        </h2>

                        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {/* Card 1 */}
                            <StaggerItem className="p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:border-spark-orange/30 transition-colors group">
                                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-spark-orange mb-6 group-hover:bg-spark-orange group-hover:text-white transition-colors">
                                    <Globe size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Agent-based Translation</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    We use AI agents to perform high-quality, context-aware translation that adapts to content genre, tone, and culture. Our agents understand the broader context for intelligent decisions.
                                </p>
                            </StaggerItem>

                            {/* Card 2 */}
                            <StaggerItem className="p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:border-spark-orange/30 transition-colors group">
                                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-spark-orange mb-6 group-hover:bg-spark-orange group-hover:text-white transition-colors">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Text-to-Speech (TTS)</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Our custom TTS systems produce native-level voices tailored to tone, timing, and character consistency. We leverage large language models for voices that sound natural.
                                </p>
                            </StaggerItem>

                            {/* Card 3 */}
                            <StaggerItem className="p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:border-spark-orange/30 transition-colors group">
                                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-spark-orange mb-6 group-hover:bg-spark-orange group-hover:text-white transition-colors">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Lip-sync Modeling</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    We build models that align facial movements with translated speech — frame-accurate and emotion-preserving. We ensure that every lip movement matches the spoken words naturally.
                                </p>
                            </StaggerItem>

                            {/* Card 4 */}
                            <StaggerItem className="p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:border-spark-orange/30 transition-colors group">
                                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-spark-orange mb-6 group-hover:bg-spark-orange group-hover:text-white transition-colors">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">On-Screen Text Translation</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Combining inpainting with vision-language models, we reconstruct visual text to deliver seamless translations. Our system detects, translates, and replaces text while maintaining coherence.
                                </p>
                            </StaggerItem>
                        </StaggerContainer>

                        <div className="mt-16 text-center">
                            <p className="text-gray-500 mb-6 font-medium">Interested in joining our research team?</p>
                            <button onClick={openCareerModal} className="inline-flex items-center gap-2 text-spark-orange font-bold hover:underline">
                                <span>Join Us</span>
                                <ArrowUpRight size={18} />
                            </button>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <Footer />
        </main>
    );
}
