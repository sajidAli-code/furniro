'use client';

import { useState } from 'react';
import Image from 'next/image';

const ProductDetails = () => {
    // State to manage active tab
    const [activeTab, setActiveTab] = useState('description');

    // Dummy content for tabs
    const tabsContent = {
        description: (
            <p>
                Embodying the raw, wayward spirit of rock ’n’ roll, the Kilburn portable active stereo speaker
                takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on
                the road. Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage-styled
                engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a
                compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and
                extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you
                to fine-tune the controls to your personal preferences while the guitar-influenced leather strap
                enables easy and stylish travel.
            </p>
        ),
        reviews: (
            <div>
                <p><strong>Review 1:</strong> Excellent sound quality and build. Worth every penny!</p>
                <p><strong>Review 2:</strong> Great product, but I wish the battery life was a bit longer.</p>
                <p><strong>Review 3:</strong> Amazing speaker! The sound is crystal clear.</p>
                <p><strong>Review 4:</strong> Stylish design with good portability. Love it!</p>
                <p><strong>Review 5:</strong> The bass could be better, but overall, a solid product.</p>
            </div>
        )
    };

    return (
        <div className="container mx-auto py-8">
            {/* Tab Navigation */}
            <div className="flex items-center justify-center space-x-8">
                <button
                    className={`pb-2 text-xl  font-medium text-gray-400 ${activeTab === 'description' ? ' text-gray-900 font-bold' : ''}`}
                    onClick={() => setActiveTab('description')}
                >
                    Description
                </button>
                <button
                    className={`pb-2 text-xl font-medium text-gray-400 ${activeTab === 'reviews' ? ' text-gray-900 font-bold' : ''}`}
                    onClick={() => setActiveTab('reviews')}
                >
                    Reviews [5]
                </button>
            </div>

            {/* Tab Content */}
            <div className="mt-8 text-gray-400 text-[16px] text-justify px-4 lg:px-20">
                {tabsContent[activeTab]}
            </div>

            {/* Image Section */}
            <div className="mt-12 px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="rounded-lg overflow-hidden">
                        <Image
                            src="/images/bedRoom.jpg" // Replace with your image path
                            alt="Sofa Image 1"
                            width={800}
                            height={500}
                            className="object-cover rounded-lg"
                        />
                    </div>
                    <div className="rounded-lg overflow-hidden">
                        <Image
                            src="/images/bedRoom.jpg" // Replace with your image path
                            alt="Sofa Image 2"
                            width={800}
                            height={500}
                            className="object-cover rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;