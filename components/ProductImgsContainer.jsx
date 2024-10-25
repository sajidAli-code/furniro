'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { MdOutlineNavigateNext, MdNavigateBefore } from "react-icons/md";

const ProductImgsConatainer = () => {
    const [smallImages, setSmallImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    // Your Unsplash API key
    const UNSPLASH_ACCESS_KEY = 'E9tY_D4AxjWgWS8BQTkO6bMflhvbmGV3-GDnPT9hKqA';

    useEffect(() => {
        // Fetch random images using Unsplash API
        const fetchImages = async () => {
            try {
                const res = await axios.get(`https://api.unsplash.com/photos/random`, {
                    params: {
                        query: 'furniture',
                        count: 5, // Fetch 5 random images
                    },
                    headers: {
                        Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
                    },
                });

                // Set images from API response
                const images = res.data;
                setSmallImages(images.slice(0, 4)); // First 4 images for thumbnails
                setSelectedImage(images[0].urls.regular); // Default large image is the first one
                setCurrentIndex(0);
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };

        fetchImages();
    }, []);

    const handleNextImage = () => {
        const nextIndex = (currentIndex + 1) % smallImages.length; // Loop around when reaching the end
        setCurrentIndex(nextIndex);
        setSelectedImage(smallImages[nextIndex].urls.regular);
    };

    const handlePrevImage = () => {
        const prevIndex = (currentIndex - 1 + smallImages.length) % smallImages.length; // Loop around when reaching the start
        setCurrentIndex(prevIndex);
        setSelectedImage(smallImages[prevIndex].urls.regular);
    };

    return (
        <div className="flex flex-col-reverse lg:flex-row gap-4 px-4 py-8">
            {/* Left Side - Thumbnail Images */}
            <div className="hidden md:hidden lg:flex flex-row lg:flex-col gap-4">
                {smallImages.map((img, idx) => (
                    <div
                        key={idx}
                        className={`h-20 w-20 rounded-lg overflow-hidden cursor-pointer ${selectedImage === img.urls.regular ? 'ring-2 ring-pink-500' : ''
                            }`}
                        onClick={() => setSelectedImage(img.urls.regular)} // Set selected image on click
                    >
                        <Image
                            src={img.urls.thumb}
                            alt={`furniture-${idx}`}
                            width={80}
                            height={80}
                            className="object-cover rounded-l"
                        />
                    </div>
                ))}
            </div>

            {/* Right Side - Large Image */}
            <div className=" relative w-[90vw] lg:w-96 h-96 rounded-lg overflow-hidden">
                {selectedImage && (
                    <Image
                        src={selectedImage}
                        alt="large furniture"
                        width={300}
                        height={300}
                        className="object-cover rounded-lg h-full w-full" // Ensure the large image takes up full space
                    />
                )}
                {/* Next Button */}
                <button
                    onClick={handleNextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-60 hover:bg-opacity-90 text-gray-600 px-2 py-1 rounded-full sm:block lg:hidden"
                >
                    <MdOutlineNavigateNext />
                </button>

                {/* Previous Button */}
                <button
                    onClick={handlePrevImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-60 hover:bg-opacity-90 text-gray-600 px-2 py-1 rounded-full sm:block lg:hidden"
                >
                    <MdNavigateBefore  />
                </button>
            </div>
        </div>
    );
};

export default ProductImgsConatainer;