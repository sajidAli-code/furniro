'use client';

import { useState, useEffect, useRef } from "react";
import Pagination from "./Pagination";
import ProductCard from "./ProductCard";
import FilterBar from "./FilterBar";

const ProductInShop = () => {
    const barRef = useRef(); // Reference for the top element (FilterBar)
    const [products, setProducts] = useState([]);
    const [limit, setLimit] = useState(8);
    const [pagination, setPagination] = useState({
        total: 0,
        page: 1,
        totalPages: 1,
    });

    // Fetch products based on the current page and limit
    const fetchProducts = async (page = 1) => {
        try {
            const response = await fetch(`http://localhost:3000/api/getProducts?limit=${limit}&page=${page}`);
            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }
            const data = await response.json();
            setProducts(data.data);
            setPagination({
                total: data.pagination.total,
                page: data.pagination.page,
                totalPages: data.pagination.totalPages
            });
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    // Use effect to fetch products when the component mounts or when page or limit changes
    useEffect(() => {
        fetchProducts(pagination.page);
    }, [pagination.page, limit]);

    // Handle page change and scroll to FilterBar
    const handlePageChange = (page) => {
        if (page >= 1 && page <= pagination.totalPages) {
            if (barRef.current) {
                window.scrollTo({
                    top: barRef.current.offsetTop, // Scroll to the FilterBar
                    behavior: "smooth",
                });
            }
            setPagination((prev) => ({
                ...prev,
                page,
            }));
        }
    };

    // Handle limit change and scroll to FilterBar
    const handleLimitChange = (newLimit) => {
        setLimit(newLimit); // Update the limit
        setPagination((prev) => ({
            ...prev,
            page: 1, // Reset to the first page
        }));
        if (barRef.current) {
            window.scrollTo({
                top: barRef.current.offsetTop, // Scroll to the FilterBar
                behavior: "smooth",
            });
        }
    };

    return (
        <>
            {/* Ref applied to FilterBar */}
            <div ref={barRef}>
                <FilterBar
                    handleLimit={handleLimitChange}
                    page={pagination.page}
                    limit={limit}
                    total={pagination.total}
                    scrollRef={barRef}
                />
            </div>

            <section className="py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
                    {products.map((product) => (
                        <ProductCard key={product.name} product={product} />
                    ))}
                </div>
                <div className="flex items-center justify-center mt-8">
                    <Pagination
                        currentPage={pagination.page}
                        totalPages={pagination.totalPages}
                        onPageChange={handlePageChange}
                    />
                </div>
            </section>
        </>
    );
};

export default ProductInShop;