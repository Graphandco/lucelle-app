import { FaHome, FaShoppingCart, FaEuroSign } from "react-icons/fa";
import { BsCardChecklist } from "react-icons/bs";
import { BiMoviePlay } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="fixed z-10 bottom-0 w-full bg-[#1B2335]">
            <nav className="w-full grid grid-flow-col footer-nav">
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                    <div className="flex items-center justify-center gap-2 py-1">
                        <FaHome className="" />
                        {/* <span className="uppercase text-2xs">Accueil</span> */}
                    </div>
                </NavLink>
                <NavLink to="/courses">
                    <div className="flex items-center justify-center gap-2 py-1">
                        <FaShoppingCart className="" />
                        {/* <span className="uppercase text-2xs">Courses</span> */}
                    </div>
                </NavLink>
                <NavLink to="/depenses">
                    <div className="flex items-center justify-center gap-2 py-1">
                        <FaEuroSign className="" />
                        {/* <span className="uppercase text-2xs">Dépenses</span> */}
                    </div>
                </NavLink>
                <NavLink to="/notes">
                    <div className="flex items-center justify-center gap-2 py-1">
                        <BsCardChecklist className="" />
                        {/* <span className="uppercase text-2xs">Notes</span> */}
                    </div>
                </NavLink>
                {/* <NavLink to="/movies">
                    <div className="flex items-center justify-center gap-2 py-1">
                        <BiMoviePlay className="" />
                    </div>
                </NavLink> */}
            </nav>
        </footer>
    );
};

export default Footer;
