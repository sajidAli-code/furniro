import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white text-gray-700 py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0">
                    {/* Left Section - Logo & Address */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">Furniro.</h2>
                        <p className="mt-16 text-gray-600">
                            400 University Drive Suite 200 Coral Gables, <br /> FL 33134 USA
                        </p>
                    </div>

                    {/* Middle Section - Links */}
                    <div className="flex space-x-10">
                        {/* Links */}
                        <div>
                            <h3 className="text-lg text-gray-400 font-semibold mb-16">Links</h3>
                            <ul className="space-y-6 font-medium">
                                <li><a href="#" className="hover:underline">Home</a></li>
                                <li><a href="#" className="hover:underline">Shop</a></li>
                                <li><a href="#" className="hover:underline">About</a></li>
                                <li><a href="#" className="hover:underline">Contact</a></li>
                            </ul>
                        </div>

                        {/* Help */}
                        <div>
                            <h3 className="text-lg text-gray-400 font-semibold mb-16">Help</h3>
                            <ul className="space-y-6 font-medium">
                                <li><a href="#" className="hover:underline">Payment Options</a></li>
                                <li><a href="#" className="hover:underline">Returns</a></li>
                                <li><a href="#" className="hover:underline">Privacy Policies</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Section - Newsletter */}
                    <div>
                        <h3 className="text-lg text-gray-400 font-semibold mb-16">Newsletter</h3>
                        <form className="flex space-x-2">
                            <input
                                type="email"
                                placeholder="Enter Your Email Address"
                                className="w-full px-3 py-2 border-b-2 border-b-gray-700 focus:outline-none focus:border-gray-800"
                            />
                            <button
                                type="submit"
                                className=" px-1 py-2 text-gray-800 font-semibold border-b-2 border-b-gray-700 uppercase"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Section - Copyright */}
                <div className="mt-8 border-t pt-4 text-center text-gray-500 text-sm">
                    <p>2023 Funiro. All rights reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;