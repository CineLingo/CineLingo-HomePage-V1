"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";
import Link from "next/link";

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <section className="pt-32 pb-20">
                <div className="container mx-auto px-4 max-w-4xl">
                    <FadeIn>
                        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Use</h1>
                        <p className="text-gray-500 mb-12">Last updated: 2026-01-07</p>

                        <div className="prose prose-lg text-gray-700 max-w-none space-y-8">
                            <p>
                                By accessing or using this website operated by <strong>Cinelingo</strong> (“we”), you agree to these Terms of Use.
                            </p>

                            <section>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">1) Website use</h3>
                                <p>
                                    You may use this website for lawful purposes only. You agree not to misuse the site, attempt unauthorized access, or disrupt operations.
                                </p>
                            </section>

                            <section>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">2) Intellectual property</h3>
                                <p>
                                    All content on this website (text, graphics, logos, and design) is owned by or licensed to Cinelingo and is protected by applicable laws. You may not copy, reproduce, or distribute site content without permission.
                                </p>
                            </section>

                            <section>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">3) Candidate submissions (Careers)</h3>
                                <p>
                                    If you send us materials (e.g., resume, portfolio links), you represent you have the right to share them. We will use them for recruiting purposes as described in our Privacy Policy.
                                </p>
                            </section>

                            <section>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">4) Creator/partner submissions</h3>
                                <p>
                                    If you share channel links, analytics screenshots, decks, or other materials, you represent you have the right to share them. We will use them to evaluate and discuss potential partnerships, as described in our Privacy Policy.
                                </p>
                            </section>

                            <section>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">5) No offer / no guarantee (Creators & Partnerships)</h3>
                                <p>
                                    Any information on this website is for general informational purposes only. Partnership terms (including pricing, revenue share, deliverables, timelines, and access) are defined only in a separate written agreement. We do not guarantee outcomes (e.g., views, revenue, growth).
                                </p>
                            </section>

                            <section>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">6) Disclaimer</h3>
                                <p>
                                    This website is provided “as is” without warranties of any kind. We do not guarantee the site will be uninterrupted or error-free.
                                </p>
                            </section>

                            <section>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">7) Limitation of liability</h3>
                                <p>
                                    To the maximum extent permitted by law, Cinelingo will not be liable for any indirect, incidental, or consequential damages arising from your use of the website.
                                </p>
                            </section>

                            <section>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">8) Changes</h3>
                                <p>
                                    We may update these Terms from time to time. The “Last updated” date will reflect changes.
                                </p>
                            </section>

                            <section>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">9) Governing law</h3>
                                <p>
                                    These Terms are governed by the laws of the Republic of Korea, without regard to conflict-of-law principles.
                                </p>
                            </section>

                            <section>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">10) Contact</h3>
                                <p>
                                    <Link href="mailto:support@cinelingo-labs.com" className="text-spark-orange hover:underline">support@cinelingo-labs.com</Link>
                                </p>
                            </section>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <Footer />
        </main>
    );
}
