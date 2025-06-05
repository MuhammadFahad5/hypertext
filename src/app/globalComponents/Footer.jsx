// components/Footer.jsx

import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
// import logo from '../public/logo.png'; 

const Footer = () => {
    return (
        <footer className="bg-white text-gray-600">
            <div className="border-t border-gray-200 my-8"></div>
            <div className='my-container'>
                <div className='my-row'>
                    <div className=''>
                        <div className='max-w-[900px] mx-auto'>
                            <h2 className='text-[#000] text-[30px]  md:text-[32 font-semibold mb-4'>
                                Sign up to our newsletter
                            </h2>
                            <p className='text-[#000] text-[12px] md:text-[14px] font-normal mb-4'>
                                A newsletter about traveling and using AI to make finding, planning and booking your vacations really easy. Don't search, just ask Layla.            </p>
                        </div>
                        <div>
                            <button className='text-[#fff] font-extrabold text-[19px] bg-[#21BCBE] border-4 border-[#21BCBE] w-[180px] rounded-xl p-2 '>
                                Subscribe
                            </button>
                        </div>


                    </div>

                </div>
                <div className="px-6 py-12">
                    {/* Main Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">

                        {/* Logo Column */}
                        <div className="lg:col-span-1">
                            {/* <Image src={logo} alt="Logo" width={150} height={50} /> */}
                            <p className="mt-4 text-sm text-gray-400">
                                Building the future, one step at a time.
                            </p>
                        </div>

                        {/* Link Columns */}
                        {[
                            { title: 'Company', items: ['About Us', 'Team', 'Careers'] },
                            { title: 'Products', items: ['Pricing', 'Features', 'Demo'] },
                            { title: 'Resources', items: ['Blog', 'Help Center', 'Documentation'] },
                            { title: 'Contact', items: ['Contact Us', 'Support', 'Email: support@example.com'] },
                            { title: 'Legal', items: ['Privacy Policy', 'Terms of Use', 'Cookies'] },
                        ].map((section, idx) => (
                            <div key={idx}>
                                <h4 className="font-semibold text-black text-lg mb-3">{section.title}</h4>
                                <ul className="space-y-2 text-sm text-gray-400">
                                    {section.items.map((item, i) => (
                                        <li key={i}>
                                            <Link href="#" className="hover:text-gray-600">{item}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Divider */}
                    <div className="border-t border-gray-200 my-8"></div>

                    {/* Bottom Footer */}
                    <div className="flex flex-col md:flex-row justify-between items-center text-sm">
                        {/* Left: Rights Reserved */}
                        <p className="text-gray-400 mb-4 md:mb-0">&copy; {new Date().getFullYear()} All rights reserved.</p>

                        {/* Right: Social Icons */}
                        <div className="flex space-x-3">
                            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-9 h-9 flex items-center justify-center rounded-full bg-[#21BCBE] text-white hover:bg-[#29a7a9]"
                                    style={{ backgroundColor: '#21BCBE' }}
                                >
                                    <Icon className="text-white text-base" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
