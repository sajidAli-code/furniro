'use client';

import Image from 'next/image';
import { useState } from 'react';
import { MdDelete } from "react-icons/md";

const Cart = () => {
    // State to handle the quantity
    const [quantity, setQuantity] = useState(1);

    // Handle quantity change
    const handleQuantityChange = (e) => {
        setQuantity(Number(e.target.value));
    };

    // Price and subtotal logic
    const price = 250000;
    const subtotal = price * quantity;

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Cart Items Section */}
                <div className="col-span-2">
                    <div className="overflow-x-auto">
                        <table className="table w-full text-left">
                            <thead>
                                <tr>
                                    <th></th> {/* Empty header for the image */}
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Subtotal</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <Image
                                                    src="/images/diningTable.jpg"
                                                    alt="Asgaard sofa"
                                                    width={80}
                                                    height={80}
                                                    className="rounded-lg object-cover"
                                                />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="font-bold">Asgaard sofa</div>
                                    </td>
                                    <td>Rs. {price.toLocaleString()}.00</td>
                                    <td>
                                        <input
                                            type="number"
                                            min="1"
                                            value={quantity}
                                            onChange={handleQuantityChange}
                                            className="border rounded-lg w-12 text-center"
                                        />
                                    </td>
                                    <td>Rs. {subtotal.toLocaleString()}.00</td>
                                    <td>
                                        <button className="btn btn-ghost text-lg">
                                            <MdDelete />
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Cart Totals Section */}
                <div className="bg-pinkShade w-full p-8 rounded-lg">
                    <h2 className="text-2xl text-center font-semibold mb-6">Cart Totals</h2>
                    <div className="flex justify-between mb-4">
                        <span className="text-gray-900 font-semibold">Subtotal</span>
                        <span className="text-gray-600">Rs. {subtotal.toLocaleString()}.00</span>
                    </div>
                    <div className="flex justify-between mb-6">
                        <span className="text-xl font-bold">Total</span>
                        <span className="text-xl font-bold text-yellow-600">Rs. {subtotal.toLocaleString()}.00</span>
                    </div>
                    <button className="w-full py-3 bg-transparent border border-black rounded-lg text-black hover:bg-black hover:text-white transition-all">
                        Check Out
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;