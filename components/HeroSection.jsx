import React from 'react';

const HeroSection = () => {
    return (
        <>
            <section className="relative bg-hero-img bg-cover bg-center h-screen">
                <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-20">
                        <div className="hidden lg:block"></div> {/* Empty div to push the card to the right on large screens */}
                        <div className="flex justify-center lg:justify-end">
                            <div className="card p-2 md:p-4 bg-pinkShade w-[30rem] h-[21rem]">
                                <div className="card-body">
                                    <h5 className=" text-sm md:text-base font-medium">New Arrival</h5>
                                    <h2 className="card-title text-2xl lg:text-4xl text-mainColor font-bold flex flex-col justify-start items-start">
                                        <span>Discover Our</span>
                                        <span>New Collection</span>
                                    </h2>
                                    <p className="text-sm md:text-base font-semibold">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id impedit reprehenderit in minus
                                    </p>
                                    <div className="card-actions justify-start">
                                        <button className="btn bg-mainColor text-white h-6 w-28 md:w-32 hover:bg-mainColorHover">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HeroSection;