const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const handlePrev = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    const handlePageClick = (page) => {
        onPageChange(page);
    };

    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    return (
        <div className="join gap-4">
            <button
                onClick={handlePrev}
                disabled={currentPage === 1}
                className="btn join-item hover:bg-mainColorHover hover:text-white disabled:opacity-50"
            >
                Previous
            </button>
            {pages.map((page) => (
                <button
                    key={page}
                    onClick={() => handlePageClick(page)}
                    className={`btn join-item ${currentPage === page ? 'bg-mainColor text-white' : 'hover:bg-mainColorHover hover:text-white'} `}
                >
                    {page}
                </button>
            ))}
            <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className="btn join-item hover:bg-mainColorHover hover:text-white disabled:opacity-50"
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;