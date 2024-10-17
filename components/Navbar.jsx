import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaUser, FaSearch, FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className=" px-6 bg-white shadow-lg navbar flex items-center justify-between">
            {/* Left side (navbar-start) */}
            <div className="navbar-start w-auto">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <Link href={'/'}>Home</Link>
                        </li>
                        <li>
                            <Link href="/shop">Shop</Link>
                        </li>
                        <li><a>About</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
                <Link className="flex flex-row items-center space-x-1" href={"/"}>
                    <Image height={32} width={50} src={"/images/logo.png"} alt='logo' />
                    <span className='hidden lg:block text-3xl font-bold text-gray-950'>Furniro</span>
                </Link>
            </div>

            {/* Center (navbar-center) */}
            <div className="navbar-center lg:flex-grow hidden lg:flex lg:justify-center">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link href={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link href="/shop">Shop</Link>
                    </li>
                    <li><a>About</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </div>

            {/* Right side (navbar-end) */}
            <div className="navbar-end w-auto flex items-center space-x-4">
                <a className='cursor-pointer'>
                    <FaSearch />
                </a>
                <a className='cursor-pointer'>
                    <FaUser />
                </a>
                <a className='cursor-pointer'>
                    <FaShoppingCart />
                </a>
            </div>
        </div>
    );
};

export default Navbar;