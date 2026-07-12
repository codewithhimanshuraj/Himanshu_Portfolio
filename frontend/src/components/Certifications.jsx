import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiExternalLink } from 'react-icons/fi';

const Certifications = () => {
    const certs = [
        {
            title: "Spring and Angular Full Stack Developer",
            link: "https://drive.google.com/file/d/1s0m3v068X1JcT0W7ZVWFqs0Drp4PYH14/view?usp=drivesdk",
            image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80"
        },
        {
            title: "Deloitte Data Analytics Job Simulation",
            link: "https://drive.google.com/file/d/1-3RXpalFBoCtYpJr05oFFiops2WYCkNi/view?usp=drivesdk",
            image: "/deloitte.png"
        },
        {
            title: "Be10X Certificate",
            link: "https://drive.google.com/file/d/1rp5F4ifksfu8bzlSSoAkXmvtdx642efM/view?usp=drivesdk",
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80"
        },
        {
            title: "Consulting Foundation",
            link: "https://www.linkedin.com/learning/certificates/ac1e32133ada314c8528021d750c4bafec8dd47a351d1ca9277d64bda28ef7a2",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
        },
        {
            title: "Creating a Business Plan",
            link: "https://www.linkedin.com/learning/certificates/42fbd908b41ce998f5b29098847afa29427533c7818e118da4b9df572ef71238",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
        },
        {
            title: "Data Intelligence",
            link: "https://www.linkedin.com/learning/certificates/ff347e811ab933729b1ce5867cc6eff03e6a80ea308bfc86e5eea877a93fd296",
            image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80"
        }
    ];

    return (
        <section id="certifications" className="py-20 bg-[var(--bg-primary)]">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Certifications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certs.map((cert, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-[#1a202c] border border-gray-700/50 rounded-2xl overflow-hidden flex flex-col h-full hover:shadow-2xl hover:shadow-purple-500/20 transition-all"
                        >
                            <div className="h-48 overflow-hidden relative group">
                                <img 
                                    src={cert.image} 
                                    alt={cert.title} 
                                    className="w-full h-full object-cover transition transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition duration-300"></div>
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold mb-4 text-white flex-grow">{cert.title}</h3>
                                <div className="flex justify-between items-center mt-auto border-t border-gray-700/50 pt-4">
                                    <div className="flex items-center text-purple-400">
                                        <FiAward className="mr-2" /> Verified
                                    </div>
                                    <a href={cert.link} target="_blank" rel="noreferrer" className="flex items-center text-blue-500 hover:text-blue-400 transition font-medium">
                                        View Credential <FiExternalLink className="ml-2" />
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

export default Certifications;
