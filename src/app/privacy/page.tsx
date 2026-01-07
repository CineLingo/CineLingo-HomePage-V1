"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";
import Link from "next/link";

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <section className="pt-32 pb-20">
                <div className="container mx-auto px-4 max-w-4xl">
                    <FadeIn>
                        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
                        <p className="text-gray-500 mb-12">Last updated: 2026-01-07</p>

                        <div className="prose prose-lg text-gray-700 max-w-none space-y-8">
                            <p>
                                This Privacy Policy explains how <strong>Cinelingo</strong> (“we”, “us”) collects, uses, and protects personal information when you visit our website, contact us, or interact with us regarding careers or creator/partner inquiries.
                            </p>

                            <section>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">1) Information we collect</h3>
                                <div className="space-y-4">
                                    <h4 className="text-xl font-bold text-gray-900">A. Website usage (optional)</h4>
                                    <p>Basic usage data (e.g., pages visited) if we use cookies/analytics.</p>

                                    <h4 className="text-xl font-bold text-gray-900">B. Careers inquiries (optional)</h4>
                                    <p>If you contact us about jobs or join a talent pool, we may collect:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Contact info: name, email address</li>
                                        <li>Professional info: LinkedIn profile, resume/CV, portfolio links, GitHub/papers/demos</li>
                                        <li>Messages you send us and any attachments you provide</li>
                                    </ul>

                                    <h4 className="text-xl font-bold text-gray-900">C. Creator/partner inquiries (optional)</h4>
                                    <p>If you contact us about creator partnerships or demos, we may collect:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Contact info: name, email address, company/brand name (if provided)</li>
                                        <li>Channel info: channel URL, public channel identifiers, content category</li>
                                        <li>Business info you choose to share (optional): audience regions, performance metrics (e.g., views, RPM/CPM ranges), and your goals</li>
                                        <li>Messages and files you send us (e.g., screenshots, decks)</li>
                                    </ul>
                                </div>
                            </section>

                            <section>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">2) How we use your information</h3>
                                <p>We use personal information to:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Respond to inquiries and communicate with you</li>
                                    <li>Schedule calls/demos and follow up on requests</li>
                                    <li>Evaluate fit for roles (Careers) or collaboration (Creators/Partners)</li>
                                    <li>Maintain an internal contact list for future opportunities (only if you opt in)</li>
                                    <li>Improve website performance (if analytics are enabled)</li>
                                </ul>
                            </section>

                            <section>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">3) Sharing and disclosure</h3>
                                <p>
                                    We do not sell your personal information.
                                    We may share information with trusted service providers that help us operate communications and workflows (e.g., email, CRM, file storage, applicant tracking), under confidentiality obligations.
                                </p>
                            </section>

                            <section>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">4) Data retention</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Careers inquiries:</strong> retained as needed for recruiting communications and a reasonable period thereafter</li>
                                    <li><strong>Creator/partner inquiries:</strong> retained as needed for partnership communications and a reasonable period thereafter</li>
                                    <li><strong>Opt-in talent pool / partner contact list:</strong> retained up to 24 months or until you request deletion</li>
                                </ul>
                            </section>

                            <section>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">5) Security</h3>
                                <p>
                                    We take reasonable technical and organizational measures to protect your information. No method of transmission or storage is 100% secure.
                                </p>
                            </section>

                            <section>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">6) Your choices and rights</h3>
                                <p>
                                    Depending on your location, you may have rights to request access, correction, or deletion of your information.
                                    To make a request, contact: <Link href="mailto:support@cinelingo-labs.com" className="text-spark-orange hover:underline">support@cinelingo-labs.com</Link>
                                </p>
                            </section>

                            <section>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">7) Cookies and analytics</h3>
                                <p>
                                    We may use cookies or analytics tools to understand website performance and improve user experience.
                                    You can control cookies through your browser settings.
                                </p>
                            </section>

                            <section>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">8) International transfers</h3>
                                <p>
                                    If your information is processed outside your country, we take steps to ensure appropriate safeguards.
                                </p>
                            </section>

                            <section>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">9) Contact</h3>
                                <p>
                                    Questions about this Privacy Policy:
                                    <br />
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
