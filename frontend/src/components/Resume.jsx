import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiEye } from 'react-icons/fi';

const Resume = () => {
    const resumeLink = "/Himanshu_Raj_Resume.pdf";

    return (
        <section id="resume" className="py-20 bg-[var(--bg-secondary)]">
            <div className="container mx-auto px-6 text-center max-w-4xl">
                <h2 className="text-4xl font-bold mb-8 gradient-text">Resume</h2>
                <div className="glass p-12 rounded-3xl shadow-xl flex flex-col items-center justify-center">
                    <div className="w-24 h-24 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-purple-500/20">
                        <span className="text-white text-3xl font-bold">CV</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Himanshu Raj's Resume</h3>
                    <p className="text-[var(--text-secondary)] mb-8 max-w-md mx-auto">
                        A comprehensive overview of my academic background, technical skills, projects, and professional experience.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a 
                            href={resumeLink} 
                            target="_blank" 
                            rel="noreferrer"
                            className="flex items-center justify-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition shadow-lg"
                        >
                            <FiEye className="mr-2" /> View Resume
                        </a>
                        <a 
                            href={resumeLink} 
                            download
                            target="_blank" 
                            rel="noreferrer"
                            className="flex items-center justify-center px-8 py-3 bg-transparent border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white rounded-full font-semibold transition shadow-lg"
                        >
                            <FiDownload className="mr-2" /> Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
