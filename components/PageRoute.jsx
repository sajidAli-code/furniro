import { MdOutlineNavigateNext } from "react-icons/md";

const PageRoute = ({activePage}) => {
    return (
        <>
            <div className="relative flex flex-col items-center justify-center gap-2 min-h-72 bg-page-route-img bg-cover bg-center text-center">
                {/* Blurred background overlay */}
                <div className="absolute inset-0 bg-page-route-img bg-cover bg-center filter blur-sm"></div>

                {/* Content */}
                <div className="relative z-10">
                    <h1 className="text-4xl font-semibold">{activePage}</h1>
                    <div className="text-base font-medium mt-3 flex flex-row items-center gap-2">
                        <span className="text-gray-800">Home</span>
                        <span className=" text-lg"><MdOutlineNavigateNext /></span>
                        <span className="text-gray-700">{activePage}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageRoute;