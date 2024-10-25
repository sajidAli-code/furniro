import Link from "next/link";
import ProductCard from "./ProductCard";

const ProductGrid = async ({limit, title}) => {
    // Fetch data and add error handling
    let products = [];
    try {
        let response = await fetch(`http://localhost:3000/api/getProducts?limit=${limit}`);
        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }
        products = await response.json();
    } catch (error) {
        console.error("Error fetching products:", error);
    }

    return (
        <section className="py-12">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold">{title}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
                {products?.data.map((product) => (
                    <ProductCard
                        product={product}
                    />
                ))}
            </div>
            <div className="text-center mt-8">
                <Link
                    href={'/shop'}
                    className=" border border-mainColor text-mainColor font-bold py-2 px-6 rounded hover:bg-mainColor hover:text-white transition"
                >
                    Show More
                </Link>
            </div>
        </section>
    );
};

export default ProductGrid;