
"use client"
import React, { useState } from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaPaperPlane } from 'react-icons/fa';


const HeroSection = () => {

    const [activeTab, setActiveTab] = useState('tab1');

    return (

        <section className='pt-48'>
            <div className='my-container'>
                <div className='my-row'>
                    <div className='my-col flex justify-between flex-wrap items-center'>
                        <div className='max-w-[800px] text-center mx-auto'>
                            <h2 className='text-[#240D4B] text-[30px]  md:text-[35px]  xl:text-[40pxpx] 2xl:text-[40px] font-extrabold mb-4'>
                                Hey, I’m Layla your personal trip planner
                            </h2>
                            <p className='text-[#240D4B] text-[18px] md:text-[18px] font-normal mb-4'>
                                Tell me what you want, and I’ll handle the rest: flights, hotels, itineraries, in seconds.                    </p>
                        </div>
                    </div>
                    <div className="w-full bg-white py-10">
                        {/* Tabs Header */}
                        <div className="flex justify-center space-x-8">
                            <button
                                onClick={() => setActiveTab('tab1')}
                                className={`pb-2 text-black text-base font-medium ${activeTab === 'tab1' ? 'border-b-2 border-black' : ''
                                    }`}
                            >
                                Ask Anything
                            </button>
                            <button
                                onClick={() => setActiveTab('tab2')}
                                className={`pb-2 text-black text-base font-medium ${activeTab === 'tab2' ? 'border-b-2 border-black' : ''
                                    }`}
                            >
                                Hotels
                            </button>
                        </div>

                        {/* Tab Content */}
                        <div className="mt-6 max-w-3xl mx-auto text-center text-gray-700">
                            {activeTab === 'tab1' &&

                                <div className="w-full bg-white flex flex-col justify-end">
                                    {/* Chat Input Wrapper (outer white background) */}
                                    <div className="w-full px-4 py-3 bg-white ">
                                        <div className="max-w-4xl mx-auto relative">
                                            {/* Textarea */}
                                            <textarea
                                                rows="3"
                                                placeholder="Ask..."
                                                className="w-full rounded-xl bg-gray-100 p-4 pr-12 text-sm text-gray-700 resize-none focus:outline-none "
                                            />

                                            {/* Send Icon Button (bottom-right) */}
                                            <button
                                                type="button"
                                                className="absolute bottom-4 right-4 bg-[#21BCBE] hover:bg-[#27a1a3] text-white p-2 rounded-full shadow"
                                            >
                                                <FaPaperPlane className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            }
                            {activeTab === 'tab2' && <p>hotel</p>}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default HeroSection