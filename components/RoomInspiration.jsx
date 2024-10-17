// 'use client';

// import Slider from 'react-slick';
// import Image from 'next/image';
// import { useState } from 'react';

// const RoomInspiration = () => {
//     const [activeIndex, setActiveIndex] = useState(0);
//     const images = [
//         "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp",
//         "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp",
//         "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp",
//         "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp",
//         "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp",
//         "https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp",
//         "https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
//     ];

//     // Function to reorder the images array based on active index
//     const reorderedImages = [
//         ...images.slice(activeIndex),
//         ...images.slice(0, activeIndex),
//     ];

//     const handlePrev = () => {
//         setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
//     };

//     const handleNext = () => {
//         setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
//     };

//     return (
//         <div className=" h-screen flex flex-col md:flex-row items-center justify-between bg-pinkShade p-10 space-y-8 md:space-y-0 md:space-x-8">
//             {/* Left Section */}
//             <div className="flex flex-col max-w-lg space-y-4 ml-8">
//                 <h2 className="text-5xl font-bold leading-tight">
//                     50+ Beautiful rooms inspiration
//                 </h2>
//                 <p className="text-gray-600 font-medium text-base w-[26rem]">
//                     Our designer already made a lot of beautiful prototypes of rooms
//                     that inspire you.
//                 </p>
//                 <button
//                     className="bg-mainColor text-white font-semibold w-44 py-3 px-6 rounded-md hover:bg-mainColorHover transition"
//                 >
//                     Explore More
//                 </button>
//             </div>

//             {/* Right Section - Carousel */}
//             <div className=" relative w-full md:w-2/3">
//                 <div className="carousel carousel-center rounded-box max-w-4xl space-x-4 p-4 relative">
//                     {reorderedImages.map((image, index) => (
//                         <div
//                             key={index}
//                             className={`carousel-item transform transition-all duration-700 ease-in-out 
//                             ${index === 0 ? 'scale-105 translate-x-0 opacity-100 z-10' : 'scale-95 translate-x-6 opacity-50 z-0'} 
//                                 relative`}
//                         >
//                             <img
//                                 src={image}
//                                 alt={`Image ${index + 1}`}
//                                 className={`rounded-box transition-all duration-700 ease-in-out ${index === 0 ? 'h-96' : 'h-80'}`}
//                             />
//                         </div>
//                     ))}
//                 </div>

//                 {/* Navigation buttons */}
//                 <div
//                     className=" absolute right-0 bottom-5 mr-4 flex justify-center space-x-4 mt-4 "
//                 >
//                     <button
//                         className="group not-prose inline-flex items-center gap-1 pl-2 pr-0.5 py-1 rounded-md font-bold transition-colors duration-300 ease-in-out"
//                         onClick={handlePrev}
//                     >
//                         <svg
//                             viewBox="0 0 24 24"
//                             className="size-5 stroke-[3px] fill-none stroke-current opacity-50 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
//                         >
//                             <line
//                                 x1="19"
//                                 y1="12"
//                                 x2="5"
//                                 y2="12"
//                                 className="scale-x-0 translate-x-[10px] group-hover:translate-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"
//                             />
//                             <polyline
//                                 points="12 5 5 12 12 19"
//                                 className="translate-x-2 group-hover:translate-x-0 transition-transform duration-300 ease-in-out"
//                             />
//                         </svg>
//                     </button>

//                     <button
//                         className="group not-prose inline-flex items-center gap-1 pl-2 pr-0.5 py-1 rounded-md font-bold transition-colors duration-300 ease-in-out"
//                         onClick={handleNext}
//                     >
//                         <svg
//                             viewBox="0 0 24 24"
//                             className="size-5 stroke-[3px] fill-none stroke-current opacity-50 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
//                         >
//                             <line
//                                 x1="5"
//                                 y1="12"
//                                 x2="19"
//                                 y2="12"
//                                 className="scale-x-0 translate-x-[10px] group-hover:translate-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"
//                             />
//                             <polyline
//                                 points="12 5 19 12 12 19"
//                                 className="-translate-x-2 group-hover:translate-x-0 transition-transform duration-300 ease-in-out"
//                             />
//                         </svg>
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default RoomInspiration;

'use client';

import { useState } from 'react';

const RoomInspiration = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const images = [
        "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp",
        "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp",
        "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp",
        "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp",
        "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp",
        "https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp",
        "https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
    ];

    // Reordering the images based on active index
    const reorderedImages = [
        ...images.slice(activeIndex),
        ...images.slice(0, activeIndex),
    ];

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="h-screen flex flex-col items-center justify-between bg-pinkShade p-5 sm:p-10 md:p-10 space-y-6 md:space-y-8 lg:flex-row lg:space-x-8 lg:space-y-0">
            {/* Left Section */}
            <div className="flex flex-col max-w-lg space-y-4 ml-4 sm:ml-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                    50+ Beautiful rooms inspiration
                </h2>
                <p className="text-gray-600 font-medium text-sm sm:text-base md:text-lg lg:w-[26rem]">
                    Our designer already made a lot of beautiful prototypes of rooms
                    that inspire you.
                </p>
                <button
                    className="bg-mainColor text-white font-semibold w-36 sm:w-44 py-2 sm:py-3 px-4 sm:px-6 rounded-md hover:bg-mainColorHover transition"
                >
                    Explore More
                </button>
            </div>

            {/* Right Section - Carousel */}
            <div className="relative w-full sm:w-5/6 md:w-2/3">
                {/* For small screens, show only one image with simple next/prev buttons */}
                <div className="relative block lg:hidden">
                    <img
                        src={images[activeIndex]}
                        alt={`Image ${activeIndex + 1}`}
                        className="rounded-box h-64 sm:h-72 md:h-80 w-full object-cover"
                    />
                    <button
                        onClick={handlePrev}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <polyline points="15 18 9 12 15 6" />
                        </svg>
                    </button>

                    <button
                        onClick={handleNext}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <polyline points="9 18 15 12 9 6" />
                        </svg>
                    </button>
                </div>

                {/* For larger screens, show full carousel */}
                <div className="hidden lg:block">
                    <div className="carousel carousel-center rounded-box max-w-xs sm:max-w-xl lg:max-w-4xl space-x-4 p-4 relative">
                        {reorderedImages.map((image, index) => (
                            <div
                                key={index}
                                className={`carousel-item transform transition-all duration-700 ease-in-out 
                                ${index === 0 ? 'scale-105 translate-x-0 opacity-100 z-10' : 'scale-95 translate-x-6 opacity-50 z-0'} 
                                relative`}
                            >
                                <img
                                    src={image}
                                    alt={`Image ${index + 1}`}
                                    className={`rounded-box transition-all duration-700 ease-in-out 
                                    ${index === 0 ? 'h-72 sm:h-80 md:h-96' : 'h-64 sm:h-72 md:h-80'}`}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Navigation buttons for larger screens */}
                    <div className="absolute right-0 bottom-5 mr-2 sm:mr-4 flex justify-center space-x-2 sm:space-x-4 mt-4">
                        <button
                            className="group not-prose inline-flex items-center gap-1 pl-2 pr-0.5 py-1 rounded-md font-bold transition-colors duration-300 ease-in-out"
                            onClick={handlePrev}
                        >
                            <svg
                                viewBox="0 0 24 24"
                                className="w-4 sm:w-5 stroke-[3px] fill-none stroke-current opacity-50 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
                            >
                                <line
                                    x1="19"
                                    y1="12"
                                    x2="5"
                                    y2="12"
                                    className="scale-x-0 translate-x-[10px] group-hover:translate-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"
                                />
                                <polyline
                                    points="12 5 5 12 12 19"
                                    className="translate-x-2 group-hover:translate-x-0 transition-transform duration-300 ease-in-out"
                                />
                            </svg>
                        </button>

                        <button
                            className="group not-prose inline-flex items-center gap-1 pl-2 pr-0.5 py-1 rounded-md font-bold transition-colors duration-300 ease-in-out"
                            onClick={handleNext}
                        >
                            <svg
                                viewBox="0 0 24 24"
                                className="w-4 sm:w-5 stroke-[3px] fill-none stroke-current opacity-50 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
                            >
                                <line
                                    x1="5"
                                    y1="12"
                                    x2="19"
                                    y2="12"
                                    className="scale-x-0 translate-x-[10px] group-hover:translate-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"
                                />
                                <polyline
                                    points="12 5 19 12 12 19"
                                    className="-translate-x-2 group-hover:translate-x-0 transition-transform duration-300 ease-in-out"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomInspiration;