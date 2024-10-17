import ProductCard from "./ProductCard";

const ProductGrid = () => {
    const products = [
        {
            name: 'Syltherine',
            description: 'Stylish cafe chair',
            price: 'Rp 2.500.000',
            oldPrice: 'Rp 3.500.000',
            discount: '-30%',
            imageSrc: '/path-to-syltherine-image.jpg', // Replace with actual image path
            isNew: false,
        },
        {
            name: 'Leviosa',
            description: 'Stylish chair',
            price: 'Rp 2.500.000',
            imageSrc: '/path-to-leviosa-image.jpg', // Replace with actual image path
            isNew: false,
        },
        {
            name: 'Lolito',
            description: 'Luxury big sofa',
            price: 'Rp 7.000.000',
            oldPrice: 'Rp 14.000.000',
            discount: '-50%',
            imageSrc: '/path-to-lolito-image.jpg', // Replace with actual image path
            isNew: false,
        },
        {
            name: 'Respira',
            description: 'Outdoor bar table and stool',
            price: 'Rp 500.000',
            imageSrc: '/path-to-respira-image.jpg', // Replace with actual image path
            isNew: true,
        },
        {
            name: 'Grifo',
            description: 'Night lamp',
            price: 'Rp 1.500.000',
            imageSrc: '/path-to-grifo-image.jpg', // Replace with actual image path
            isNew: false,
        },
        {
            name: 'Muggo',
            description: 'Small mug',
            price: 'Rp 150.000',
            imageSrc: '/path-to-muggo-image.jpg', // Replace with actual image path
            isNew: false,
        },
        {
            name: 'Pingky',
            description: 'Cute bed set',
            price: 'Rp 7.000.000',
            oldPrice: 'Rp 14.000.000',
            discount: '-50%',
            imageSrc: '/path-to-pingky-image.jpg', // Replace with actual image path
            isNew: true,
        },
        {
            name: 'Potty',
            description: 'Minimalist flower pot',
            price: 'Rp 500.000',
            imageSrc: '/path-to-potty-image.jpg', // Replace with actual image path
            isNew: true,
        },
    ];

    return (
        <section className="py-12">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold">Our Products</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
                {products.map((product, index) => (
                    <ProductCard
                        product={product}
                        index={index}
                    />
                ))}
            </div>
            <div className="text-center mt-8">
                <button className=" border border-mainColor text-mainColor font-bold py-2 px-6 rounded hover:bg-mainColor hover:text-white transition">
                    Show More
                </button>
            </div>
        </section>
    );
};

export default ProductGrid;