import { HiOutlineAdjustments } from "react-icons/hi";
import { IoGrid } from "react-icons/io5";

const FilterBar = ({ handleLimit, page, limit, total, scrollRef }) => {
    // Calculate the current showing range
    const start = (page - 1) * limit + 1;
    const end = Math.min(page * limit, total); // Ensure it doesn't go over the total number of products

    return (
        <div
            className="flex items-center justify-between px-4 py-4 bg-pinkShade"
            ref={scrollRef}
        >
            {/* Left side (Filter and View Options) */}
            <div className="flex items-center gap-2">
                {/* Filter Button */}
                <button className="flex items-center gap-1 text-sm font-semibold text-gray-800">
                    <span className=" text-lg">
                        <HiOutlineAdjustments />
                    </span>
                    Filter
                </button>

                {/* Grid/List View Toggle */}
                <div className="flex items-center gap-2 border-r border-r-gray-800 px-4">
                    {/* Grid Icon */}
                    <button className="text-gray-800">
                        <IoGrid />
                    </button>
                </div>

                {/* Showing results text */}
                <p className="text-sm font-semibold text-gray-800">
                    Showing {start}-{end} of {total} results
                </p>
            </div>

            {/* Right side (Show and Sort by) */}
            <div className="flex items-center gap-4">
                {/* Show dropdown */}
                <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-gray-800">Show</span>

                    <select
                        className="px-2 py-2 border border-gray-300 text-sm font-semibold text-gray-600"
                        onChange={(e) => handleLimit(Number(e.target.value))} // Convert to number
                    >
                        <option value={8}>8</option>
                        <option value={16}>16</option>
                        <option value={32}>32</option>
                    </select>
                </div>

                {/* Sort by dropdown */}
                <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-gray-800">Sort by</span>
                    <select className="px-2 py-2 border border-gray-300 text-sm font-semibold text-gray-600">
                        <option>Default</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                        <option>Newest</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default FilterBar;