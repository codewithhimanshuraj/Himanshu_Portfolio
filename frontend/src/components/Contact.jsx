import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';

const Contact = () => {
    const [formData, setFormData] = useState({ fullName: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');
        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/api/contact`, formData);
            setStatus('Message sent successfully!');
            setFormData({ fullName: '', email: '', subject: '', message: '' });
        } catch (error) {
            setStatus('Failed to send message. Please try again.');
        }
    };

    return (
        <section id="contact" className="py-20 bg-[var(--bg-primary)]">
            <div className="container mx-auto px-6 max-w-6xl">
                <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Contact Me</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-3xl font-bold mb-6">Let's Connect</h3>
                        <p className="text-[var(--text-secondary)] mb-8 text-lg">
                            Whether you have a question, a project idea, or just want to say hi, feel free to drop a message. I'll get back to you as soon as possible!
                        </p>
                        
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-full flex items-center justify-center text-xl">
                                    <FiMail />
                                </div>
                                <div>
                                    <h4 className="font-bold">Email</h4>
                                    <a href="mailto:himanshuraj1707@gmail.com" className="text-[var(--text-secondary)] hover:text-blue-500 transition">himanshuraj1707@gmail.com</a>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-full flex items-center justify-center text-xl">
                                    <FiLinkedin />
                                </div>
                                <div>
                                    <h4 className="font-bold">LinkedIn</h4>
                                    <a href="https://www.linkedin.com/in/himanshu-raj-330916244/" target="_blank" rel="noreferrer" className="text-[var(--text-secondary)] hover:text-blue-500 transition">Himanshu Raj</a>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-full flex items-center justify-center text-xl">
                                    <FiGithub />
                                </div>
                                <div>
                                    <h4 className="font-bold">GitHub</h4>
                                    <a href="https://github.com/codewithhimanshuraj" target="_blank" rel="noreferrer" className="text-[var(--text-secondary)] hover:text-blue-500 transition">codewithhimanshuraj</a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="glass p-8 rounded-2xl shadow-xl"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium mb-2 text-[var(--text-secondary)]">Full Name</label>
                                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required className="w-full px-4 py-3 bg-[var(--bg-primary)] border border-gray-600 focus:border-blue-500 rounded-xl focus:outline-none transition" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 text-[var(--text-secondary)]">Email Address</label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 bg-[var(--bg-primary)] border border-gray-600 focus:border-blue-500 rounded-xl focus:outline-none transition" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 text-[var(--text-secondary)]">Subject</label>
                                <input type="text" name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-3 bg-[var(--bg-primary)] border border-gray-600 focus:border-blue-500 rounded-xl focus:outline-none transition" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 text-[var(--text-secondary)]">Message</label>
                                <textarea name="message" value={formData.message} onChange={handleChange} required rows="4" className="w-full px-4 py-3 bg-[var(--bg-primary)] border border-gray-600 focus:border-blue-500 rounded-xl focus:outline-none transition resize-none"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-xl shadow-lg transition duration-300">
                                Send Message
                            </button>
                            {status && <p className={`text-center mt-4 ${status.includes('success') ? 'text-green-500' : 'text-red-500'}`}>{status}</p>}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
