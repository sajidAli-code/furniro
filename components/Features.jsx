import { GoTrophy } from "react-icons/go";
import { MdOutlineSecurity } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";

const Features = () => {
    return (
        <div className="flex items-center justify-between bg-pinkShade py-8 px-12">
            {/* High Quality */}
            <div className="flex items-center gap-3">
                {/* Icon */}
                <span className=" text-4xl">
                    <GoTrophy />
                </span>
                {/* Text */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-800">High Quality</h3>
                    <p className="text-xs text-gray-500 font-medium">Crafted from top materials</p>
                </div>
            </div>

            {/* Warranty Protection */}
            <div className="flex items-center gap-3">
                {/* Icon */}
                <span className=" text-4xl">
                    <MdOutlineSecurity />
                </span>
                {/* Text */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-800">Warranty Protection</h3>
                    <p className="text-xs text-gray-500 font-medium">Over 2 years</p>
                </div>
            </div>

            {/* Free Shipping */}
            <div className="flex items-center gap-3">
                {/* Icon */}
                <span className=" text-4xl">
                    <FaShippingFast />
                </span>
                {/* Text */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-800">Free Shipping</h3>
                    <p className="text-xs text-gray-500 font-medium">Order over 150$</p>
                </div>
            </div>

            {/* 24/7 Support */}
            <div className="flex items-center gap-3">
                {/* Icon */}
                <span className=" text-4xl">
                    <FaClockRotateLeft />
                </span>
                {/* Text */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-800">24/7 Services</h3>
                    <p className="text-xs text-gray-500 font-medium">Dedicated service</p>
                </div>
            </div>
        </div>
    );
};

export default Features;