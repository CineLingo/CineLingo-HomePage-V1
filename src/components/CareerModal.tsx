"use client";

import Link from "next/link";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { X, Loader2, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CareerModalContextType {
    isOpen: boolean;
    openCareerModal: () => void;
    closeCareerModal: () => void;
}

const CareerModalContext = createContext<CareerModalContextType | undefined>(undefined);

export function useCareerModal() {
    const context = useContext(CareerModalContext);
    if (!context) {
        throw new Error('useCareerModal must be used within a CareerModalProvider');
    }
    return context;
}

export function CareerModalProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState('');

    // Form State
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        link: '',
        message: ''
    });

    const openCareerModal = () => {
        setIsOpen(true);
        setIsSuccess(false);
        setError('');
        setFormData({
            name: '',
            email: '',
            link: '',
            message: ''
        });
    };

    const closeCareerModal = () => setIsOpen(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const response = await fetch('/api/career', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Failed to send application');
            }

            // Success
            setIsSuccess(true);
            setTimeout(() => {
                closeCareerModal();
            }, 3000); // Close after 3 seconds of success message
        } catch (err: any) {
            console.error(err);
            setError(err.message || 'Something went wrong. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <CareerModalContext.Provider value={{ isOpen, openCareerModal, closeCareerModal }}>
            {children}
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeCareerModal}
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
                                <h3 className="text-xl font-bold text-gray-900">Join Our Team</h3>
                                <button onClick={closeCareerModal} className="text-gray-400 hover:text-gray-600 transition-colors">
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
                                        <h4 className="text-2xl font-bold text-gray-800">Application Sent!</h4>
                                        <p className="text-gray-600">
                                            We've received your details.<br />
                                            We'll get back to you shortly.
                                        </p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        {/* Name */}
                                        <div className="space-y-1.5">
                                            <label className="text-sm font-semibold text-gray-700">Name <span className="text-red-500">*</span></label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                placeholder="Your Name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-spark-orange/20 focus:border-spark-orange transition-all outline-none"
                                            />
                                        </div>

                                        {/* Email */}
                                        <div className="space-y-1.5">
                                            <label className="text-sm font-semibold text-gray-700">Email <span className="text-red-500">*</span></label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                placeholder="you@example.com"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-spark-orange/20 focus:border-spark-orange transition-all outline-none"
                                            />
                                        </div>

                                        {/* Link */}
                                        <div className="space-y-1.5">
                                            <label className="text-sm font-semibold text-gray-700">LinkedIn / Portfolio / Resume Link</label>
                                            <input
                                                type="url"
                                                name="link"
                                                placeholder="https://linkedin.com/in/..."
                                                value={formData.link}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-spark-orange/20 focus:border-spark-orange transition-all outline-none"
                                            />
                                        </div>

                                        {/* Message */}
                                        <div className="space-y-1.5">
                                            <label className="text-sm font-semibold text-gray-700">Introduction</label>
                                            <textarea
                                                name="message"
                                                placeholder="Tell us about yourself..."
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows={4}
                                                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-spark-orange/20 focus:border-spark-orange transition-all outline-none resize-none"
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
                                                'Send Application'
                                            )}
                                        </button>

                                        <p className="text-xs text-gray-400 text-center mt-4 leading-relaxed">
                                            By applying, you agree to our <Link href="/privacy" className="underline hover:text-gray-600" target="_blank">Privacy Policy</Link>.
                                        </p>
                                    </form>
                                )}
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </CareerModalContext.Provider>
    );
}
