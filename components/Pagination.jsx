const Pagination = () => {
    return (
        <div className="join gap-4">
            <button className="btn join-item hover:bg-mainColorHover hover:text-white">Previous</button>
            <button className="btn join-item bg-mainColor text-white hover:bg-mainColorHover hover:text-white">1</button>
            <button className="btn join-item hover:bg-mainColorHover hover:text-white">2</button>
            <button className="btn join-item hover:bg-mainColorHover hover:text-white">3</button>
            <button className="btn join-item hover:bg-mainColorHover hover:text-white">Next</button>
        </div>
    );
};

export default Pagination;
