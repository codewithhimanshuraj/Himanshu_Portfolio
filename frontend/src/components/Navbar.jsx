import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className="fixed w-full z-50 glass py-4 px-8 flex justify-between items-center transition-all duration-300">
            <div className="text-2xl font-bold gradient-text">Himanshu Raj</div>
            <ul className="hidden md:flex space-x-6 items-center font-medium">
                <li><a href="#home" className="hover:text-blue-500 transition">Home</a></li>
                <li><a href="#about" className="hover:text-blue-500 transition">About</a></li>
                <li><a href="#education" className="hover:text-blue-500 transition">Education</a></li>
                <li><a href="#skills" className="hover:text-blue-500 transition">Skills</a></li>
                <li><a href="#projects" className="hover:text-blue-500 transition">Projects</a></li>
                <li><a href="#experience" className="hover:text-blue-500 transition">Experience</a></li>
                <li><a href="#contact" className="hover:text-blue-500 transition">Contact</a></li>
                <li>
                    <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-700/20 transition">
                        {theme === 'dark' ? <FiSun className="text-yellow-400" size={20}/> : <FiMoon className="text-gray-800" size={20}/>}
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
