import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
    const projectsList = [
        {
            title: "AI-ATS Resume Checker",
            github: "https://github.com/codewithhimanshuraj/ATS-RESUME-CHECKER",
            description: "n AI-powered ATS (Applicant Tracking System) Resume Checker that analyzes resumes against job descriptions, calculates ATS compatibility scores.",
            tech: ["MongoDB", "Express.js", "React.js", "Node.js","Gemini Api"],
            demo: "#",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXoNTolkZItwup8PIDdiwIlF6k7V1FPYJHpkYZY_yxpg&s"
        },
        {
            title: "Algo Visualizer",
            github: "https://github.com/codewithhimanshuraj/AlgoVisual",
            description: "Interactive visualization platform for understanding sorting and pathfinding algorithms through real-time animations.",
            tech: ["React", "JavaScript", "CSS"],
            demo: "#",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
        },
        {
            title: "Clarify AI",
            github: "https://github.com/codewithhimanshuraj/ClarifyAI",
            description: "AI-powered application designed to provide intelligent responses and automate user workflows.",
            tech: ["MERN Stack", "AI APIs"],
            demo: "#",
            image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80"
        },
        {
            title: "Task Manager System",
            github: "https://github.com/codewithhimanshuraj/Task-Manager-System",
            description: "Full-stack task management platform with authentication, task tracking, and productivity features.",
            tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
            demo: "#",
            image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&q=80"
        },
        {
            title: "Spotify UI Clone",
            github: "https://github.com/codewithhimanshuraj/spoplaylist",
            description: "Responsive Spotify-inspired user interface clone with modern design principles.",
            tech: ["HTML", "CSS", "JavaScript"],
            demo: "#",
            image: "/spotify.jpg"
        },
        {
            title: "Tic Tac Toe",
            github: "https://github.com/codewithhimanshuraj/Tic-Tac-Toe-Game",
            description: "Interactive Tic Tac Toe game built using modern web technologies.",
            tech: ["HTML", "CSS", "JavaScript"],
            demo: "#",
            image: "https://images.unsplash.com/photo-1553481187-be93c21490a9?w=800&q=80"
        }
    ];

    return (
        <section id="projects" className="py-20 bg-[var(--bg-secondary)]">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsList.map((project, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-[#1a202c] border border-gray-700/50 rounded-2xl overflow-hidden flex flex-col h-full hover:shadow-2xl hover:shadow-blue-500/20 transition-all"
                        >
                            <div className="h-48 overflow-hidden relative group">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transition transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition duration-300"></div>
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-xs bg-orange-500/20 text-orange-400 px-3 py-1 rounded-md font-semibold border border-orange-500/20">{t}</span>
                                    ))}
                                </div>
                                <div className="flex justify-between items-center mt-auto border-t border-gray-700/50 pt-4">
                                    <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center text-gray-300 hover:text-white transition font-medium">
                                        <FiGithub className="mr-2" /> GitHub
                                    </a>
                                    <a href={project.demo} className="flex items-center text-blue-500 hover:text-blue-400 transition font-medium">
                                        <FiExternalLink className="mr-2" /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
