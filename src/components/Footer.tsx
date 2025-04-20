// components/Footer.tsx
import React from 'react';
import Link from 'next/link';
import { FaLinkedin, FaGithub, FaWhatsapp, FaPhone } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className="w-full bg-black text-white py-16">
            <div className=" mx-auto px-4 max-w-7xl">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* Column 1 - Personal Info */}
                    <div className="col-span-1">
                        <h2 className="text-2xl font-bold mb-4">Talagana Rajesh</h2>
                        <p className="text-gray-400 mb-6">
                            Building web solutions where clean design and powerful functionality work in harmony.            </p>
                        <div className="flex space-x-4">
                            <Link href="https://www.linkedin.com/in/talaganaRajesh" className="text-gray-400 hover:text-white transition-colors">
                                <FaLinkedin size={20} />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                            <Link href="https://github.com/talaganaRajesh" className="text-gray-400 hover:text-white transition-colors">
                                <FaGithub size={20} />
                                <span className="sr-only">GitHub</span>
                            </Link>
                            <Link href="https://wa.me/+919692544587" className="text-gray-400 hover:text-white transition-colors">
                                <FaWhatsapp size={20} />
                                <span className="sr-only">WhatsApp</span>
                            </Link>

                        </div>
                    </div>

                    {/* Column 2 - General Links */}
                    <div className="col-span-1">
                        <h3 className="text-lg font-semibold mb-4">The Website</h3>
                        <nav className="flex flex-col space-y-2">
                            <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                                Home
                            </Link>
                            <Link href="/projects" className="text-gray-400 hover:text-white transition-colors">
                                Projects
                            </Link>
                            <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                                About
                            </Link>
                            <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                                Contact
                            </Link>
                        </nav>
                    </div>

                    <div className="col-span-1">
                        <h3 className="text-lg font-semibold mb-4">Projects</h3>
                        <nav className="flex flex-col space-y-2">
                            <a href="https://getmaterial.vercel.app"
                                target="_blank" rel="noopener noreferrer"

                                className="text-gray-400 hover:text-white transition-colors">
                                GetMaterial
                            </a>
                            <a href="https://oroom.vercel.app" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                OpenRoom
                            </a>
                            <a href="https://sih-agrovision.vercel.app" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                AgroVision
                            </a>
                            <a href="https://lemonstudio.vercel.app" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                Lemon Studio
                            </a>



                        </nav>
                    </div>


                    {/* Column 4 - Contact Info */}
                    <div className="col-span-1">
                        <p className="mb-4">
                            I'm open to freelance projects, full-time roles, or collaborative ideas. connect and build something meaningful together.
                        </p>
                        <Link
                            href="mailto:talaganarajesh@gmail.com"
                            className="text-blue-400 hover:text-blue-300 transition-colors flex items-center"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-2"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            talaganarajesh@gmail.com
                        </Link>
                        <Link href="https://wa.me/+919692544587">
                            <p className="mt-2 cursor-pointer text-blue-400 hover:text-blue-500 flex flex-row items-center">
                                <FaPhone className="inline-block mr-3" /> +91 9692544587
                            </p>
                        </Link>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-gray-800 text-center md:text-left text-gray-500 text-sm">
                    <p className='text-center'>Copyright © {new Date().getFullYear()} Talagana Rajesh. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;