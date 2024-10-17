import React from 'react';

const MainCategories = () => {
    const categories = [
        {
            title: 'Dining',
            imageSrc: '/images/diningTable.jpg', // Replace with actual image path
        },
        {
            title: 'Living',
            imageSrc: '/images/livingRoom.jpg', // Replace with actual image path
        },
        {
            title: 'Bedroom',
            imageSrc: '/images/bedRoom.jpg', // Replace with actual image path
        },
    ];

    return (
        <section className="py-12">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold">Browse The Range</h2>
                <p className="text-gray-500 mt-2 lg:font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className="group relative rounded-lg overflow-hidden shadow-lg cursor-pointer"
                    >
                        <img
                            src={category.imageSrc}
                            alt={category.title}
                            className="w-full h-72 object-cover transition-transform duration-300 transform group-hover:scale-105"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-75 p-4 text-center">
                            <h3
                                className="text-lg font-semibold"
                            >
                                {category.title}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MainCategories;