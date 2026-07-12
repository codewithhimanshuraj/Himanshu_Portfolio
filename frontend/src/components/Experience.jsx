import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-[var(--bg-primary)]">
            <div className="container mx-auto px-6 max-w-5xl">
                <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Experience & Achievements</h2>
                
                <div className="glass p-8 rounded-3xl mb-12 border-l-4 border-blue-500 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
                    <h3 className="text-2xl font-bold mb-2">Self-Employed Developer</h3>
                    <p className="text-[var(--text-secondary)] mb-6">Building Full Stack Web Applications</p>
                    <p className="text-lg leading-relaxed mb-6">
                        Designed and developed 3+ full-stack MERN applications, implementing features such as user authentication, real-time updates, REST APIs, and responsive user interfaces while following scalable software development practices.
                    </p>
                    
                    <h4 className="text-xl font-bold mb-4 text-purple-500">Key Achievements</h4>
                    <ul className="space-y-3 list-none">
                        <li className="flex items-center"><span className="text-blue-500 mr-3">✔</span> Solved 500+ DSA problems across LeetCode, GeeksforGeeks, and CodeStudio.</li>
                        <li className="flex items-center"><span className="text-blue-500 mr-3">✔</span> Achieved 5-Star Rating in Problem Solving.</li>
                        <li className="flex items-center"><span className="text-blue-500 mr-3">✔</span> Strengthened expertise in Data Structures, Algorithms, and System Design.</li>
                        <li className="flex items-center"><span className="text-blue-500 mr-3">✔</span> Built and deployed end-to-end web applications using the MERN Stack.</li>
                    </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.a 
                        href="https://leetcode.com/u/himanshuraj1707/" 
                        target="_blank" 
                        rel="noreferrer"
                        whileHover={{ scale: 1.05 }}
                        className="glass p-6 rounded-xl flex items-center justify-between hover:border-yellow-500/50 transition cursor-pointer"
                    >
                        <div>
                            <h4 className="text-xl font-bold text-yellow-500 mb-1">LeetCode Profile</h4>
                            <p className="text-sm text-[var(--text-secondary)]">View my problem solving stats</p>
                        </div>
                        <div className="text-3xl text-yellow-500">LC</div>
                    </motion.a>
                    
                    <motion.a 
                        href="https://www.geeksforgeeks.org/profile/himanshubwpr?tab=activity" 
                        target="_blank" 
                        rel="noreferrer"
                        whileHover={{ scale: 1.05 }}
                        className="glass p-6 rounded-xl flex items-center justify-between hover:border-green-500/50 transition cursor-pointer"
                    >
                        <div>
                            <h4 className="text-xl font-bold text-green-500 mb-1">GeeksForGeeks</h4>
                            <p className="text-sm text-[var(--text-secondary)]">View my coding activity</p>
                        </div>
                        <div className="text-3xl text-green-500">GFG</div>
                    </motion.a>
                </div>
            </div>
        </section>
    );
};

export default Experience;
