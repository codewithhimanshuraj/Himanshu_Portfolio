import React, { useCallback } from 'react';
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

const Hero = () => {
    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    background: { color: { value: "transparent" } },
                    fpsLimit: 60,
                    interactivity: {
                        events: {
                            onHover: { enable: true, mode: "repulse" },
                            resize: true
                        },
                        modes: {
                            repulse: {
                                distance: 100,
                                duration: 0.4
                            }
                        }
                    },
                    particles: {
                        color: { value: "#3b82f6" },
                        links: {
                            color: "#a855f7",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce"
                            },
                            random: false,
                            speed: 2,
                            straight: false
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800
                            },
                            value: 80
                        },
                        opacity: {
                            value: 0.5
                        },
                        shape: {
                            type: "circle"
                        },
                        size: {
                            value: {
                                min: 1,
                                max: 5
                            }
                        }
                    },
                    detectRetina: true,
                }}
                className="absolute inset-0 -z-10"
            />

            <div className="container mx-auto px-6 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl shadow-blue-500/20">
                        <div className="w-full h-full bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center text-4xl text-white font-bold">
                            HR
                        </div>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-4">
                        Himanshu <span className="gradient-text">Raj</span>
                    </h1>

                    <h2 className="text-2xl md:text-3xl mb-6 text-[var(--text-secondary)] h-10">
                        <span className="font-semibold text-[var(--text-primary)]">
                            <Typewriter
                                words={[
                                    'Full Stack Developer',
                                    'MERN Stack Developer',
                                    'Problem Solver',
                                    'Software Engineer Aspirant',
                                    'Technology Enthusiast',
                                    'AI Enthusiast'
                                ]}
                                loop={0}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </h2>

                    <p className="max-w-2xl mx-auto text-lg mb-10 text-[var(--text-secondary)]">
                        Computer Science Engineering Student passionate about Full Stack Development, Artificial Intelligence, and Problem Solving. Building scalable web applications and solving real-world challenges through technology.
                    </p>

                    <div className="flex justify-center space-x-4">
                        <a href="#projects" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition shadow-lg hover:shadow-blue-500/50">
                            View Projects
                        </a>

                        <a href="https://drive.google.com/file/d/12FSe_Pg2zGQHuAFzNfdGyqvjHi__Cr1s/view?usp=drivesdk" target="_blank" rel="noreferrer" className="px-8 py-3 bg-transparent border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white rounded-full font-semibold transition shadow-lg">
                            Download Resume
                        </a>

                        <a href="#contact" className="px-8 py-3 bg-transparent border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white rounded-full font-semibold transition shadow-lg">
                            Contact Me
                        </a>
                    </div>

                    <div className="mt-12 flex justify-center space-x-6">
                        <a href="https://www.linkedin.com/in/himanshu-raj-330916244/" target="_blank" rel="noreferrer" className="text-3xl hover:text-blue-500 transition">
                            <i className="fab fa-linkedin"></i> LinkedIn
                        </a>

                        <a href="https://github.com/codewithhimanshuraj" target="_blank" rel="noreferrer" className="text-3xl hover:text-purple-500 transition">
                            <i className="fab fa-github"></i> GitHub
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;