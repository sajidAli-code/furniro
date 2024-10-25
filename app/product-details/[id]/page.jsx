import AddressBar from '@/components/AddressBar';
import ProductDetailContainer from '@/components/ProductDetailContainer';
import ProductDetails from '@/components/ProductDetails';
import ProductGrid from '@/components/ProductGrid';
import React from 'react';

const Page = () => {
    return (
        <>
            <AddressBar />
            <ProductDetailContainer />
            <hr className="w-full border-t border-gray-300 my-4" />
            <ProductDetails />
            <hr className="w-full border-t border-gray-300 my-4" />
            <ProductGrid
                limit={4}
                title={"Related Products"}
            />
            <hr className="w-full border-t border-gray-300 my-4" />
        </>
    );
};

export default Page;
