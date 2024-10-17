
import { MdOutlineShare } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";

const ProductCard = ({ product, index }) => {
    return (
        <>
            <div key={index} className="relative group border rounded-lg overflow-hidden shadow-lg">
                <img
                    src={product.imageSrc}
                    alt={product.name}
                    className="w-full h-60 object-cover transition-transform duration-300 transform group-hover:scale-105"
                />
                {product.discount && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white text-sm px-2 py-1 rounded">
                        {product.discount}
                    </span>
                )}
                {product.isNew && (
                    <span className="absolute top-2 right-2 bg-green-500 text-white text-sm px-2 py-1 rounded">
                        New
                    </span>
                )}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center transition-opacity duration-300">
                    <button
                        className="bg-white text-mainColor font-bold py-2 px-4 mb-2"
                    >
                        Add to cart
                    </button>
                    <div className="text-white flex flex-row space-x-4 font-semibold">
                        <button className=" flex flex-row items-center gap-1">
                            <span><MdOutlineShare /></span>
                            <span>Share</span>
                        </button>
                        <button className=" flex flex-row items-center gap-1">
                            <span><FaRegHeart /></span>
                            <span>Like</span>
                        </button>
                    </div>
                </div>
                <div className="p-4">
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p className="text-gray-500">{product.description}</p>
                    <div className="mt-2">
                        <span className="text-black font-bold">{product.price}</span>
                        {product.oldPrice && (
                            <span className="text-gray-500 line-through ml-2">{product.oldPrice}</span>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard