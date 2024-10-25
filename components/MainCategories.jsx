import Link from "next/link";

const MainCategories = async () => {
    // Fetch data and add error handling
    let types = [];
    try {
        let response = await fetch('http://localhost:3000/api/getMainTypes');
        if (!response.ok) {
            throw new Error('Failed to fetch types');
        }
        types = await response.json();
    } catch (error) {
        console.error("Error fetching types:", error);
    }

    return (
        <section className="py-12">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold">Browse The Range</h2>
                <p className="text-gray-500 mt-2 lg:font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
                {types?.data.map((category) => (
                    <Link
                        href={`/shop/${category?._id}`}
                        key={category?._id}
                        className="group relative rounded-lg overflow-hidden shadow-lg cursor-pointer"
                    >
                        <img
                            src={category?.imgSrc}
                            alt={category?.title}
                            className="w-full h-72 object-cover transition-transform duration-300 transform group-hover:scale-105"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-75 p-4 text-center">
                            <h3
                                className="text-lg font-semibold"
                            >
                                {category?.title}
                            </h3>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default MainCategories;