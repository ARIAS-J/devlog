import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi"
import { Link } from "react-router-dom";
import { image } from "../../Constants";

const Navbar = () => {
    const [active, setActive] = useState(false);

    const showMenu = () => {
        setActive(!active)
    }

    return (
        <nav className="w-full sm:mt-8 mt-16 mb-16">
            <div className="flex items-center space-x-32 justify-between">
                <div className="flex lg:space-x-5 sm:space-x-2 items-center">
                    <img src={image.logo} className="lg:w-10 sm:w-5 md:w-10" alt="" />
                    <h1 className="font-bold text-gray-200 sm:text-xs md:text-lg lg:text-2xl ">
                        HEX DEVLOG
                    </h1>
                </div>



                <div className="lg:flex lg:space-x-20 sm:hidden">

                    {/* <div className="">
                        <GiHamburgerMenu className="text-gray-400 text-2xl" onClick={showMenu} />
                    </div> */}

                    <Link to="/">
                        <p className="font-semibold text-gray-400 hover:text-gray-200 uppercase ease-in duration-300">
                            Home
                        </p>
                    </Link>
                    <Link to="/">
                        <p className="font-semibold text-gray-400 hover:text-gray-200 uppercase ease-in duration-300">
                            Author
                        </p>
                    </Link>
                    <Link to="/developments">
                        <p className="font-semibold text-gray-400 hover:text-gray-200 uppercase ease-in duration-300">
                            Developments
                        </p>
                    </Link>
                </div>


            </div>
        </nav>
    );


};

export default Navbar;
