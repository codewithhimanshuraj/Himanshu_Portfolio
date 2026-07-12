import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-[var(--bg-secondary)] border-t border-[var(--bg-primary)] py-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
            
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold gradient-text mb-2">Himanshu Raj</h2>
                <p className="text-[var(--text-secondary)] mb-8">Building impactful digital experiences through code and innovation.</p>
                
                <div className="flex justify-center space-x-6 mb-8 flex-wrap">
                    <a href="#home" className="hover:text-blue-500 transition mb-2">Home</a>
                    <a href="#about" className="hover:text-blue-500 transition mb-2">About</a>
                    <a href="#education" className="hover:text-blue-500 transition mb-2">Education</a>
                    <a href="#skills" className="hover:text-blue-500 transition mb-2">Skills</a>
                    <a href="#projects" className="hover:text-blue-500 transition mb-2">Projects</a>
                    <a href="#experience" className="hover:text-blue-500 transition mb-2">Experience</a>
                    <a href="#certifications" className="hover:text-blue-500 transition mb-2">Certifications</a>
                    <a href="#resume" className="hover:text-blue-500 transition mb-2">Resume</a>
                    <a href="#contact" className="hover:text-blue-500 transition mb-2">Contact</a>
                </div>

                <div className="flex justify-center space-x-6 mb-8">
                    <a href="https://github.com/codewithhimanshuraj" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-blue-600 hover:text-white transition group">
                        <FiGithub className="group-hover:scale-110 transition" />
                    </a>
                    <a href="https://www.linkedin.com/in/himanshu-raj-330916244/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-blue-600 hover:text-white transition group">
                        <FiLinkedin className="group-hover:scale-110 transition" />
                    </a>
                    <a href="mailto:himanshuraj1707@gmail.com" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-blue-600 hover:text-white transition group">
                        <FiMail className="group-hover:scale-110 transition" />
                    </a>
                </div>

                <div className="border-t border-gray-600/30 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-[var(--text-secondary)] text-sm">
                    <p>© 2026 Himanshu Raj. All Rights Reserved.</p>
                    <button onClick={scrollToTop} className="mt-4 md:mt-0 flex items-center hover:text-blue-500 transition">
                        Back To Top <FiArrowUp className="ml-2" />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
