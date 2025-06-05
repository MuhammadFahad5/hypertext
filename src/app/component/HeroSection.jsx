
"use client"
import React, { useRef } from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaPaperPlane } from 'react-icons/fa';


const HeroSection = () => {



    return (

        <section className='pt-48'>
            <div>
                <div>
                    <div className="w-full bg-white flex flex-col justify-end">
                        {/* Chat Input Wrapper (outer white background) */}
                        <div className="w-full px-4 py-3 bg-white ">
                            <div className="max-w-4xl mx-auto relative">
                                {/* Textarea */}
                                <textarea
                                    rows="3"
                                    placeholder="Type your message..."
                                    className="w-full rounded-xl bg-gray-100 p-4 pr-12 text-sm text-gray-700 resize-none focus:outline-none focus:ring-2 focus:ring-green-300"
                                />

                                {/* Send Icon Button (bottom-right) */}
                                <button
                                    type="button"
                                    className="absolute bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white p-2 rounded-full shadow"
                                >
                                    <FaPaperPlane className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection