"use client"
import React, { useRef } from 'react'
import left from '../../../public/ourwebsite/left_arrow.svg'
import right from '../../../public/ourwebsite/right_arrow.svg'
import spain_trip from '../../../public/ourwebsite/spain_trip.png'
import Image from 'next/image'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const OurWebsite = () => {


    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };
 
    var settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        // initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    //   dots: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    //   initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };




    return (
        <section className='my:12 md:my-28'>
            <div className='my-container'>
                <div className='my-row'>
                    <div className='my-col'>
                        <div className=' mb-6 md:mb-8 flex justify-between items-center flex-wrap'>
                            <div className='flex gap-8 items-center flex-wrap'>
                                <h2 className='text-[#240D4B] font-bold text-[30px] md:text-[32px] '>Top Trips to Level Up Your Vacation Game </h2>
                                <div className='flex items-center gap-4'>
                                    <div onClick={previous} className='cursor-pointer'>
                                        <Image
                                            src={left}
                                            alt="website"
                                            className="w-[80%] bg-black rounded-full"

                                        />
                                    </div>
                                    <div onClick={next} className='cursor-pointer'>
                                        <Image
                                            src={right}
                                            alt="website"
                                            className="w-[80%] bg-black rounded-full border-2 border-[#89D991]"
                                        />
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className="slider-container">
                            <Slider
                                ref={slider => {
                                    sliderRef = slider;
                                }}
                                {...settings}
                            >
                                <div key={1} className='px-4 '>
                                    <div className='w-full relative'>
                                        <Image
                                            src={spain_trip}
                                            alt="website"
                                            className="w-full rounded-[20px]"
                                        />
                                        <div className="absolute top-0 left-0 right-0 w-full h-full bg-black opacity-40 rounded-[20px]"></div>
                                        <h3 className='absolute bottom-6 text-[#fff] px-5 font-medium text-[24px]'>Road trip through the south of spain</h3>

                                    </div>

                                </div>
                                <div key={2} className='px-4'>
                                     <div className='w-full relative'>
                                        <Image
                                            src={spain_trip}
                                            alt="website"
                                            className="w-full rounded-[20px]"
                                        />
                                        <div className="absolute top-0 left-0 right-0 w-full h-full bg-black opacity-40 rounded-[20px]"></div>
                                        <h3 className='absolute bottom-6 text-[#fff] px-5 font-medium text-[24px]'>Road trip through the south of spain</h3>

                                    </div>
                                </div>
                                <div key={3} className='px-4'>
                                     <div className='w-full relative'>
                                        <Image
                                            src={spain_trip}
                                            alt="website"
                                            className="w-full rounded-[20px]"
                                        />
                                        <div className="absolute top-0 left-0 right-0 w-full h-full bg-black opacity-40 rounded-[20px]"></div>
                                        <h3 className='absolute bottom-6 text-[#fff] px-5 font-medium text-[24px]'>Road trip through the south of spain</h3>

                                    </div>
                                </div>
                                <div key={4} className='px-4'>
                                     <div className='w-full relative'>
                                        <Image
                                            src={spain_trip}
                                            alt="website"
                                            className="w-full rounded-[20px]"
                                        />
                                        <div className="absolute top-0 left-0 right-0 w-full h-full bg-black opacity-40 rounded-[20px]"></div>
                                        <h3 className='absolute bottom-6 text-[#fff] px-5 font-medium text-[24px]'>Road trip through the south of spain</h3>

                                    </div>
                                </div>

                                <div key={5} className='px-4'>
                                    <div className='w-full relative'>
                                        <Image
                                            src={spain_trip}
                                            alt="website"
                                            className="w-full rounded-[20px]"
                                        />
                                        <div className="absolute top-0 left-0 right-0 w-full h-full bg-black opacity-40 rounded-[20px]"></div>
                                        <h3 className='absolute bottom-6 text-[#fff] px-5 font-medium text-[24px]'>Road trip through the south of spain</h3>

                                    </div>
                                </div>

                            </Slider>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default OurWebsite