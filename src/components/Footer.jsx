import { FaHome, FaShoppingCart, FaEuroSign } from "react-icons/fa";
import { BsCardChecklist } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="fixed bottom-0 w-full bg-[#1B2335]">
            <nav className="w-full grid grid-flow-col footer-nav">
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                    <div className="flex items-center justify-center gap-2">
                        <FaHome className="" />
                        <span className="uppercase text-2xs">Accueil</span>
                    </div>
                </NavLink>
                <NavLink to="/courses">
                    <div className="flex items-center justify-center gap-2">
                        <FaShoppingCart className="" />
                        <span className="uppercase text-2xs">Courses</span>
                    </div>
                </NavLink>
                <NavLink to="/depenses">
                    <div className="flex items-center justify-center gap-2">
                        <FaEuroSign className="" />
                        <span className="uppercase text-2xs">Dépenses</span>
                    </div>
                </NavLink>
                <NavLink to="/notes">
                    <div className="flex items-center justify-center gap-2">
                        <BsCardChecklist className="" />
                        <span className="uppercase text-2xs">Notes</span>
                    </div>
                </NavLink>
            </nav>
        </footer>
    );
};

export default Footer;
