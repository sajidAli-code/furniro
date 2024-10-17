import { HiOutlineAdjustments } from "react-icons/hi";
import { IoGrid } from "react-icons/io5";

const FilterBar = () => {
    return (
        <div className="flex items-center justify-between px-4 py-4 bg-pinkShade">
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
                    Showing 1-16 of 32 results
                </p>
            </div>

            {/* Right side (Show and Sort by) */}
            <div className="flex items-center gap-4">
                {/* Show dropdown */}
                <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-gray-800">Show</span>
                    <select className="px-2 py-2 border border-gray-300 text-sm font-semibold text-gray-600">
                        <option>16</option>
                        <option>32</option>
                        <option>48</option>
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