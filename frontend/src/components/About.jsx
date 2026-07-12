import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const highlights = [
        "Full Stack Development",
        "Artificial Intelligence",
        "Problem Solving",
        "Technology Consulting"
    ];

    return (
        <section id="about" className="py-20 bg-[var(--bg-secondary)]">
            <div className="container mx-auto px-6">
                <motion.h2 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-4xl font-bold text-center mb-12 gradient-text"
                >
                    About Me
                </motion.h2>
                <div className="max-w-4xl mx-auto glass p-8 rounded-2xl shadow-xl">
                    <p className="text-lg leading-relaxed mb-6 text-[var(--text-secondary)]">
                        I'm a passionate Computer Science Engineering student at Chandigarh University with a strong foundation in software development, Data Structures & Algorithms, and Artificial Intelligence. I enjoy building scalable web applications, solving complex problems, and exploring innovative technologies that create real-world impact.
                    </p>
                    <p className="text-lg leading-relaxed mb-8 text-[var(--text-secondary)]">
                        Currently, I'm focused on full-stack development, AI-powered applications, and strengthening my problem-solving skills through DSA. I am actively preparing for opportunities in Software Engineering, Business Analysis, and Technology Consulting, where I can leverage technology to develop efficient and impactful solutions.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 mb-8">
                        <div className="flex items-center space-x-2 bg-gray-800/50 border border-gray-700/50 px-4 py-2 rounded-lg shadow-sm">
                            <span className="text-orange-500">📍</span>
                            <span className="text-gray-200 font-medium text-sm">Location: Chandigarh, India</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-gray-800/50 border border-gray-700/50 px-4 py-2 rounded-lg shadow-sm">
                            <span className="text-orange-500">🔤</span>
                            <span className="text-gray-200 font-medium text-sm">Languages: English, Hindi</span>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                        {highlights.map((item, index) => (
                            <motion.div 
                                key={index}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 p-4 rounded-xl text-center font-semibold text-[var(--text-primary)] transition"
                            >
                                {item}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
