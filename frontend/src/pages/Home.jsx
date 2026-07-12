import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications';
import Resume from '../components/Resume';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="flex flex-col">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Education />
                <Skills />
                <Experience />
                <Projects />
                <Certifications />
                <Resume />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
