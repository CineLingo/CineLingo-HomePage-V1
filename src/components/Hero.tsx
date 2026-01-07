"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useDemoModal } from "./DemoModal";

export function Hero() {
    const [videoLoaded, setVideoLoaded] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const { openDemoModal } = useDemoModal();

    useEffect(() => {
        if (videoRef.current) {
            // Prepare video playback
            videoRef.current.play().catch(error => {
                console.log("Autoplay prevented or failed:", error);
            });
        }
    }, []);

    return (
        <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
            {/* Background Container */}
            <div className="absolute inset-0 z-0">
                {/* Poster Image - Fades out ONLY when video is loaded */}
                <div
                    className={`absolute inset-0 z-10 transition-opacity duration-1000 ease-in-out ${videoLoaded ? 'opacity-0 delay-200' : 'opacity-100'}`}
                >
                    <Image
                        src="/video/hero-poster.jpg"
                        alt="Hero Poster"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Video Overlay - Always there, just behind poster until poster fades */}
                <div className="absolute inset-0 z-0">
                    <video
                        ref={videoRef}
                        className="w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                        onCanPlayThrough={() => setVideoLoaded(true)}
                    >
                        <source src="/video/hero-bg.webm" type="video/webm" />
                    </video>
                </div>

                {/* Overlay - Darker for better text visibility if we swap to white text, OR lighter for black text. 
                    User asked to "fix text visibility". 
                    Given "Light off-white background", let's use a stronger white overlay to make the black text pop, 
                    or switch to white text with a dark overlay. 
                    User originally requested "Light off-white background for main content".
                    Background video might be dark. Let's try White Text with Dark Overlay for better video visibility + "Space" atmosphere.
                */}
                {/* Overlay - Gradient for depth and better text visibility */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 z-20" />
            </div>

            {/* Content */}
            <div className="relative z-30 container mx-auto px-4 text-center max-w-5xl pt-20 h-full flex flex-col justify-center items-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-4xl md:text-7xl font-bold tracking-tighter text-white mb-6 md:mb-8 drop-shadow-md leading-[0.9]"
                >
                    You Focus on Creating. <br />
                    We’ll Handle the World.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="text-lg md:text-xl text-gray-200 mb-8 md:mb-10 font-medium max-w-2xl mx-auto"
                >
                    We localize, launch, and run your YouTube videos in new languages—<span className="whitespace-nowrap">end to end.</span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                >
                    <button
                        onClick={openDemoModal}
                        className="px-8 py-4 text-lg md:px-10 md:py-5 md:text-xl font-bold text-white bg-spark-orange rounded-full hover:bg-orange-500 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
                    >
                        Start Globalizing
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
