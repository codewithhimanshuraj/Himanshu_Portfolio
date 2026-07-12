import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiAward } from 'react-icons/fi';

const Education = () => {
    const educationData = [
        {
            degree: "B.E. in Computer Science Engineering",
            institute: "Chandigarh University",
            duration: "Aug 2023 – Aug 2027",
            score: "CGPA: 7.77 / 10",
            logo: "CU",
            type: "University"
        },
        {
            degree: "Senior Secondary (ISC Board, XII)",
            institute: "Nirmala Convent Inter College",
            duration: "Apr 2021 – May 2022",
            score: "",
            type: "School"
        },
        {
            degree: "Secondary (ICSE Board, X)",
            institute: "Nirmala Convent Inter College",
            duration: "Apr 2019 – Apr 2020",
            score: "",
            type: "School"
        }
    ];

    return (
        <section id="education" className="py-20 bg-[var(--bg-primary)]">
            <div className="container mx-auto px-6 max-w-6xl">
                <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Education</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {educationData.map((edu, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-[#1a202c] border border-gray-700/50 p-8 rounded-2xl shadow-xl hover:shadow-blue-500/10 transition flex flex-col h-full"
                        >
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="p-3 bg-blue-500/20 text-blue-500 rounded-lg">
                                    {edu.type === 'University' ? <FiBookOpen size={24} /> : <FiAward size={24} />}
                                </div>
                                <span className="text-gray-400 font-semibold text-sm">{edu.duration}</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-white">{edu.degree}</h3>
                            <h4 className="text-blue-400 font-semibold mb-4 flex items-center">
                                {edu.institute} 
                                {edu.logo && <span className="bg-red-600 text-white text-xs px-2 py-1 rounded ml-2 shadow-md">{edu.logo}</span>}
                            </h4>
                            <div className="mt-auto pt-4 border-t border-gray-700/50">
                                {edu.score ? (
                                    <p className="font-bold text-green-400">{edu.score}</p>
                                ) : (
                                    <p className="text-gray-500 italic">Completed</p>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
