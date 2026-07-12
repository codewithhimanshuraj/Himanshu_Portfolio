import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaPython, FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaNodeJs, FaGitAlt, FaGithub, FaNpm } from 'react-icons/fa';
import { SiCplusplus, SiJavascript, SiTailwindcss, SiEjs, SiExpress, SiMongodb, SiMysql, SiJsonwebtokens, SiDocker, SiVercel } from 'react-icons/si';
import { FiMonitor, FiLayout, FiDatabase, FiServer, FiSettings, FiClock, FiCheckCircle, FiRefreshCw, FiZap, FiMessageCircle, FiCode, FiCpu, FiBookOpen, FiLink } from 'react-icons/fi';

const Skills = () => {
    const skillCategories = [
        {
            title: "Programming Languages",
            skills: [
                { name: "C++", icon: <SiCplusplus className="text-blue-500" /> },
                { name: "Java", icon: <FaJava className="text-red-500" /> },
                { name: "Python", icon: <FaPython className="text-yellow-500" /> },
                { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-yellow-400" /> }
            ]
        },
        {
            title: "Frontend Development",
            skills: [
                { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
                { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
                { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" /> },
                { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
                { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
                { name: "EJS", icon: <SiEjs className="text-green-500" /> },
                { name: "Responsive Design", icon: <FiLayout className="text-purple-400" /> },
                { name: "Cross-Browser Compatibility", icon: <FiMonitor className="text-gray-400" /> }
            ]
        },
        {
            title: "Backend Development",
            skills: [
                { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
                { name: "Express.js", icon: <SiExpress className="text-gray-400" /> },
                { name: "RESTful APIs", icon: <FiServer className="text-blue-500" /> },
                { name: "JWT Auth", icon: <SiJsonwebtokens className="text-pink-500" /> }
            ]
        },
        {
            title: "Databases & Core CS",
            skills: [
                { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
                { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
                { name: "DBMS & OS", icon: <FiDatabase className="text-gray-400" /> },
                { name: "OOP & Networks", icon: <FiSettings className="text-gray-400" /> }
            ]
        },
        {
            title: "Tools & Platforms",
            skills: [
                { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
                { name: "GitHub", icon: <FaGithub className="text-white" /> },
                { name: "npm", icon: <FaNpm className="text-red-500" /> },
                { name: "VS Code", icon: <FiCode className="text-blue-500" /> },
                { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
                { name: "Vercel", icon: <SiVercel className="text-white" /> }
            ]
        },
        {
            title: "Generative AI",
            skills: [
                { name: "Generative AI", icon: <FiCpu className="text-pink-400" /> },
                { name: "Prompt Engineering", icon: <FiZap className="text-yellow-400" /> },
                { name: "Large Language Models (LLMs)", icon: <FiBookOpen className="text-purple-400" /> },
                { name: "AI API Integration (OpenAI & Gemini)", icon: <FiCode className="text-green-400" /> },
                { name: "Retrieval-Augmented Generation (RAG)", icon: <FiDatabase className="text-blue-400" /> },
                { name: "LangChain", icon: <FiLink className="text-emerald-400" /> }
            ]
        },
        {
            title: "Interpersonal Skills",
            skills: [
                { name: "Time Management", icon: <FiClock className="text-green-400" /> },
                { name: "Problem Solving", icon: <FiCheckCircle className="text-blue-400" /> },
                { name: "Adaptability", icon: <FiRefreshCw className="text-purple-400" /> },
                { name: "Quick Learner", icon: <FiZap className="text-yellow-400" /> },
                { name: "Communication", icon: <FiMessageCircle className="text-cyan-400" /> }
            ]
        }
    ];

    return (
        <section id="skills" className="py-20 bg-[var(--bg-secondary)]">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {skillCategories.map((category, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-[#1a202c] border border-gray-700/50 p-8 rounded-2xl shadow-xl hover:shadow-blue-500/10 transition"
                        >
                            <h3 className="text-xl font-bold mb-8 text-white">{category.title}</h3>
                            <div className="flex flex-col space-y-4">
                                {category.skills.map((skill, sIndex) => (
                                    <div key={sIndex} className="flex items-center space-x-4 text-gray-300 hover:text-white transition cursor-default">
                                        <div className="text-2xl">
                                            {skill.icon}
                                        </div>
                                        <span className="font-medium text-[15px]">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
