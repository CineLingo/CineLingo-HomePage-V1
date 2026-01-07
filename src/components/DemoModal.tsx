"use client";

import Link from "next/link";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { X, Loader2, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface DemoModalContextType {
    isOpen: boolean;
    openDemoModal: () => void;
    closeDemoModal: () => void;
}

const DemoModalContext = createContext<DemoModalContextType | undefined>(undefined);

export function useDemoModal() {
    const context = useContext(DemoModalContext);
    if (!context) {
        throw new Error('useDemoModal must be used within a DemoModalProvider');
    }
    return context;
}

const COUNTRY_CODES = [
    { code: '+82', country: 'KR' },
    { code: '+1', country: 'US/CA' },
    { code: '+44', country: 'UK' },
    { code: '+81', country: 'JP' },
    { code: '+86', country: 'CN' },
    { code: '+49', country: 'DE' },
    { code: '+33', country: 'FR' },
    { code: '+91', country: 'IN' },
    { code: '+61', country: 'AU' },
];

export function DemoModalProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState('');

    // Form State
    const [formData, setFormData] = useState({
        youtubeUrl: '',
        companyName: '',
        countryCode: '+82',
        contactNumber: '',
        email: ''
    });

    const openDemoModal = () => {
        setIsOpen(true);
        setIsSuccess(false);
        setError('');
        setFormData({
            youtubeUrl: '',
            companyName: '',
            countryCode: '+82',
            contactNumber: '',
            email: ''
        });
    };

    const closeDemoModal = () => setIsOpen(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Failed to send request');
            }

            // Success
            setIsSuccess(true);
            setTimeout(() => {
                closeDemoModal();
            }, 3000); // Close after 3 seconds of success message
        } catch (err: any) {
            console.error(err);
            setError(err.message || 'Something went wrong. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <DemoModalContext.Provider value={{ isOpen, openDemoModal, closeDemoModal }}>
            {children}
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeDemoModal}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />

                        {/* Modal */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden"
                        >
                            {/* Header */}
                            <div className="px-6 py-5 bg-gray-50 border-b border-gray-100 flex justify-between items-center">
                                <h3 className="text-xl font-bold text-gray-900">Partner with Us</h3>
                                <button onClick={closeDemoModal} className="text-gray-400 hover:text-gray-600 transition-colors">
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Body */}
                            <div className="p-6">
                                {isSuccess ? (
                                    <div className="flex flex-col items-center justify-center py-8 text-center space-y-4">
                                        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-2">
                                            <CheckCircle2 size={32} />
                                        </div>
                                        <h4 className="text-2xl font-bold text-gray-800">Request Sent!</h4>
                                        <p className="text-gray-600">
                                            We've received your details.<br />
                                            We'll get back to you within 24 hours.
                                        </p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        {/* YouTube URL */}
                                        <div className="space-y-1.5">
                                            <label className="text-sm font-semibold text-gray-700">YouTube Channel URL <span className="text-red-500">*</span></label>
                                            <input
                                                type="url"
                                                name="youtubeUrl"
                                                required
                                                placeholder="https://youtube.com/@yourchannel"
                                                value={formData.youtubeUrl}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-spark-orange/20 focus:border-spark-orange transition-all outline-none"
                                            />
                                        </div>

                                        {/* Company Name */}
                                        <div className="space-y-1.5">
                                            <label className="text-sm font-semibold text-gray-700">Name</label>
                                            <input
                                                type="text"
                                                name="companyName"
                                                placeholder="Name."
                                                value={formData.companyName}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-spark-orange/20 focus:border-spark-orange transition-all outline-none"
                                            />
                                        </div>

                                        {/* Contact Number */}
                                        <div className="space-y-1.5">
                                            <label className="text-sm font-semibold text-gray-700">Contact Number</label>
                                            <div className="flex gap-2">
                                                <select
                                                    name="countryCode"
                                                    value={formData.countryCode}
                                                    onChange={handleChange}
                                                    className="w-24 px-2 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-spark-orange/20 focus:border-spark-orange bg-white outline-none"
                                                >
                                                    {COUNTRY_CODES.map(c => (
                                                        <option key={c.code} value={c.code}>{c.code}</option>
                                                    ))}
                                                </select>
                                                <input
                                                    type="tel"
                                                    name="contactNumber"
                                                    placeholder="010-1234-5678"
                                                    value={formData.contactNumber}
                                                    onChange={handleChange}
                                                    className="flex-1 px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-spark-orange/20 focus:border-spark-orange transition-all outline-none"
                                                />
                                            </div>
                                        </div>

                                        {/* Email */}
                                        <div className="space-y-1.5">
                                            <label className="text-sm font-semibold text-gray-700">Work Email <span className="text-red-500">*</span></label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                placeholder="you@gmail.com"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-spark-orange/20 focus:border-spark-orange transition-all outline-none"
                                            />
                                        </div>

                                        {error && (
                                            <div className="p-3 text-sm text-red-600 bg-red-50 rounded-lg">
                                                {error}
                                            </div>
                                        )}

                                        <button
                                            type="submit"
                                            disabled={isLoading}
                                            className="w-full py-3.5 px-6 font-bold text-white bg-spark-orange rounded-xl hover:bg-orange-500 active:scale-[0.98] transition-all shadow-lg hover:shadow-orange-500/25 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                        >
                                            {isLoading ? (
                                                <>
                                                    <Loader2 className="animate-spin" />
                                                    Sending...
                                                </>
                                            ) : (
                                                'Send Request'
                                            )}
                                        </button>

                                        <p className="text-xs text-gray-400 text-center mt-4 leading-relaxed">
                                            By contacting us, you agree to our <Link href="/privacy" className="underline hover:text-gray-600" target="_blank">Privacy Policy</Link>.
                                            <br />
                                            (Optional) Request deletion anytime at <a href="mailto:privacy@cinelingo-labs.com" className="underline hover:text-gray-600">privacy@cinelingo-labs.com</a>.
                                        </p>
                                    </form>
                                )}
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </DemoModalContext.Provider>
    );
}
