import { MdOutlineNavigateNext } from "react-icons/md";

const AddressBar = () => {
    return (
        <>
            <div
                className="flex items-center justify-between px-2 md:px-4 lg:px-8 py-8 bg-pinkShade"
            >
                {/* Left side (Filter and View Options) */}
                <div
                    className="flex items-center gap-4 text-sm font-semibold text-gray-500"
                >
                    <span>Home</span>
                    <span
                        className=" text-gray-900 text-xl"
                    >
                        <MdOutlineNavigateNext />
                    </span>
                    <span>Shop</span>
                    <span
                        className=" text-gray-900 text-xl"
                    >
                        <MdOutlineNavigateNext />
                    </span>
                    <span className=" text-gray-900 font-semibold border-l-2 border-gray-800 px-4">Asgarad Sofa</span>
                </div>
            </div>
        </>
    )
}

export default AddressBar