'use client';

import { useState } from 'react';
import ProductImgsContainer from "./ProductImgsContainer"
import { FaStar } from "react-icons/fa";
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

const ProductDetailContainer = () => {
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState('L');
    const [selectedColor, setSelectedColor] = useState('purple'); // Set default color

    const handleQuantityChange = (type) => {
        if (type === 'increase') {
            setQuantity(quantity + 1);
        } else if (type === 'decrease' && quantity > 1) {
            setQuantity(quantity - 1);
        }
    }
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 grid-auto-rows-auto">
                <div className="col-start-1 row-start-1 px-0 lg:px-8">
                    <ProductImgsContainer />
                </div>
                <div className="col-start-2 row-start-2 lg:row-start-1 p-4 lg:p-6">
                    {/* Product Title */}
                    <h1 className="text-4xl font-normal text-gray-950 mb-2">Asgaard sofa</h1>

                    {/* Price */}
                    <p className="text-2xl text-gray-400 mb-2">Rs. 250,000.00</p>

                    {/* Rating and Reviews */}
                    <div className="flex items-center mb-4">
                        <div className="flex text-yellow-500">
                            {[...Array(5)].map((_, index) => (
                                <FaStar key={index} />
                            ))}
                        </div>
                        <p className="ml-2 text-gray-400 border-l-2 border-gray-400 pl-2">5 Customer Review</p>
                    </div>

                    {/* Product Description */}
                    <p className="text-gray-700 mb-6">
                        Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
                    </p>

                    {/* Size Selection */}
                    <div className="mb-4">
                        <p className="text-gray-400 font-medium mb-2">Size</p>
                        <div className="flex gap-2">
                            {['L', 'XL', 'XS'].map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`px-3 py-1 rounded border ${selectedSize === size ? 'bg-mainColor text-white font-medium' : ''
                                        }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Color Selection */}
                    <div className="mb-4">
                        <p className="text-gray-400 font-medium mb-2">Color</p>
                        <div className="flex gap-4">
                            {['purple', 'black', 'gold'].map((color) => (
                                <button
                                    key={color}
                                    onClick={() => setSelectedColor(color)}
                                    className={`h-8 w-8 rounded-full border-2 ${selectedColor === color ? 'ring-2 ring-gray-400' : ''
                                        }`}
                                    style={{ backgroundColor: color }}
                                ></button>
                            ))}
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-4">
                        {/* Quantity Selection */}
                        <div className="flex items-center gap-8 border border-gray-400 px-4 py-3 rounded">
                            <button
                                onClick={() => handleQuantityChange('decrease')}
                                className=" flex justify-center items-center text-xl"
                            >
                                -
                            </button>
                            <span className="text-xl">{quantity}</span>
                            <button
                                onClick={() => handleQuantityChange('increase')}
                                className=" flex justify-center items-center text-xl"
                            >
                                +
                            </button>
                        </div>
                        <button className="flex-1 py-4 bg-black text-white rounded hover:bg-gray-800">
                            Add To Cart
                        </button>
                    </div>
                </div>
                <div className=" col-start-2 row-start-3 lg:row-start-2 border-t-2 border-gray-200 px-4 py-4">
                    <div className='w-full lg:w-1/2 flex flex-col gap-4 font-medium text-gray-400 text-sm'>
                        {/* Tags Section */}
                        <div className="flex justify-between items-center mb-2">
                            <span className="w-1/4 text-gray-500">Tags</span>
                            <span className="w-1/12 text-center">:</span>
                            <span className="text-gray-700 flex-1">Sofa, Chair, Home, Shop</span>
                        </div>

                        {/* Share Section */}
                        <div className="flex justify-between items-center mb-2">
                            <span className="w-1/4 text-gray-500">Share</span>
                            <span className="w-1/12 text-center">:</span>
                            <div className="flex gap-2 flex-1">
                                {/* Social Media Icons */}
                                <FaFacebook className="text-black" />
                                <FaLinkedin className="text-black" />
                                <FaTwitter className="text-black" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProductDetailContainer