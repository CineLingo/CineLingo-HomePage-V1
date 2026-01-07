"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/Stagger";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

export default function CareerPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <section className="pt-32 pb-20 bg-gray-50 border-b border-gray-100">
                <div className="container mx-auto px-4">
                    <FadeIn>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
                            Open Roles
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
                            We’re currently hiring for Generative Speech (LLM-based TTS). Other roles are planned and shown below for visibility.
                        </p>
                    </FadeIn>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 max-w-6xl mx-auto">

                        {/* CARD 1 — ACTIVE */}
                        <StaggerItem className="relative flex flex-col h-full bg-white rounded-3xl border border-gray-200 p-8 hover:border-spark-orange/50 hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center justify-between mb-6">
                                <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full tracking-wide uppercase">
                                    Open
                                </span>
                            </div>

                            <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                Generative Speech — LLM-Based TTS
                            </h2>
                            <p className="text-gray-500 font-medium mb-4">
                                Research Engineer / Applied Scientist
                            </p>

                            <p className="text-lg text-gray-700 font-medium mb-8">
                                Build controllable, identity-preserving speech synthesis for real-world video localization.
                            </p>

                            <div className="mb-8 space-y-3">
                                <div className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-spark-orange mt-2 shrink-0" />
                                    <span className="text-gray-600">LLM-conditioned control (style / emotion / intent)</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-spark-orange mt-2 shrink-0" />
                                    <span className="text-gray-600">Speaker identity preservation + long-form stability</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-spark-orange mt-2 shrink-0" />
                                    <span className="text-gray-600">PyTorch training / finetuning + eval loop</span>
                                </div>
                            </div>

                            <div className="mt-auto">
                                <Link
                                    href="mailto:jaeseokchung@cinelingo-labs.com?subject=Application for Generative Speech Engineer"
                                    className="w-full block text-center bg-spark-orange text-white font-bold py-4 rounded-xl hover:bg-orange-600 transition-colors mb-4"
                                >
                                    Contact us
                                </Link>
                                <p className="text-sm text-gray-400 text-center leading-relaxed">
                                    No formal application — just send what you have.<br />
                                    Optional: LinkedIn, CV, GitHub/paper link, or short intro.
                                </p>
                            </div>

                            <div className="mt-6 pt-6 border-t border-gray-100 flex flex-wrap gap-2">
                                {["LLM-conditioned TTS", "voice identity", "prosody/style control", "multilingual"].map((tag, i) => (
                                    <span key={i} className="px-3 py-1 bg-gray-50 text-gray-500 text-xs font-medium rounded-lg">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </StaggerItem>

                        {/* LOCKED CARDS */}
                        {[
                            {
                                title: "Video Text Spotting — Detection, Tracking & Recognition",
                                level: "Applied Scientist / CV Engineer",
                                oneLiner: "Detect and track on-screen text in videos, then recognize it reliably across frames.",
                                highlights: [
                                    "Text detection + tracking across time (scene cuts, motion blur)",
                                    "Recognition with multilingual support",
                                    "Dataset curation + evaluation for real-world overlays"
                                ]
                            },
                            {
                                title: "Video Motion Typography Translation — Layout-Aware Editing",
                                level: "Applied Scientist / Research Engineer",
                                oneLiner: "Translate animated on-screen typography while preserving motion, timing, and design.",
                                highlights: [
                                    "Track text regions + motion paths (warp, perspective, occlusion)",
                                    "Style-consistent rendering (fonts, stroke/shadow, effects)",
                                    "Frame-accurate timing + seamless compositing"
                                ]
                            },
                            {
                                title: "Agentic LLM — Workflow Automation for Localization",
                                level: "ML Engineer / Applied Scientist",
                                oneLiner: "Build tool-using agents that orchestrate translation → terminology → QA → synthesis reliably at scale.",
                                highlights: [
                                    "Agent planning + verification",
                                    "Tool integration (search, QA, evaluation)",
                                    "Production-grade pipelines & monitoring"
                                ]
                            }
                        ].map((role, idx) => (
                            <StaggerItem key={idx} className="relative flex flex-col h-full bg-white rounded-3xl border border-gray-100 p-8 overflow-hidden group select-none">
                                {/* Blurred Content */}
                                <div className="filter blur-[2px] opacity-60 pointer-events-none select-none transition-all duration-500">
                                    <div className="flex items-center justify-between mb-6">
                                        <span className="px-3 py-1 bg-gray-100 text-gray-500 text-xs font-bold rounded-full tracking-wide uppercase">
                                            Planned
                                        </span>
                                    </div>

                                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                        {role.title}
                                    </h2>
                                    <p className="text-gray-400 font-medium mb-4">
                                        {role.level}
                                    </p>

                                    <p className="text-lg text-gray-400 font-medium mb-8">
                                        {role.oneLiner}
                                    </p>

                                    <div className="mb-8 space-y-3">
                                        {role.highlights.map((highlight, hIdx) => (
                                            <div key={hIdx} className="flex items-start gap-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2 shrink-0" />
                                                <span className="text-gray-400">{highlight}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-auto">
                                        <div className="w-full block text-center bg-gray-100 text-gray-400 font-bold py-4 rounded-xl mb-4">
                                            Join talent pool
                                        </div>
                                    </div>

                                    <div className="mt-3 text-xs text-center text-gray-300">
                                        Not accepting applications yet
                                    </div>
                                </div>

                                {/* Lock Overlay */}
                                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white/10">
                                    <div className="flex flex-col items-center gap-3">
                                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 mb-2">
                                            <Lock size={20} />
                                        </div>
                                        <span className="font-bold text-gray-500 text-lg">Opening soon</span>
                                    </div>

                                    {/* Action Button on Overlay */}
                                    <div className="absolute bottom-8 left-0 right-0 px-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                                        <Link
                                            href="mailto:jaeseokchung@cinelingo-labs.com?subject=Interest in Future Roles"
                                            className="w-full flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-600 font-bold py-3 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm hover:shadow-md"
                                        >
                                            <span>Join talent pool</span>
                                            <ArrowUpRight size={16} />
                                        </Link>
                                        <p className="text-xs text-gray-400 text-center mt-3 font-medium">
                                            Optional: send a short intro + relevant work.
                                        </p>
                                    </div>
                                </div>
                            </StaggerItem>
                        ))}

                    </StaggerContainer>
                </div>
            </section>

            <Footer />
        </main>
    );
}
