import { TiShoppingCart } from "react-icons/ti";
import { FaShoppingCart, FaEuroSign } from "react-icons/fa";
import { GiShop } from "react-icons/gi";
import { Link } from "react-router-dom";
import UserMenu from "./UserMenu";

const Header = () => {
    return (
        <header className="mb-10 sticky top-0 w-full z-10 pl-6 pr-3 flex items-center justify-end bg-white">
            <Link to="/" className="absolute left-5 top-2">
                <div className="flex gap-2 ">
                    <img
                        src="/badger.png"
                        alt="Logo"
                        className="aspect-square object-contain rounded-[50%] w-16 bg-white p-2"
                    />
                    <div className="ml-2 text-2xl font-extrabold uppercase text-slate-700 mt-1">
                        Lucelle'App
                    </div>
                </div>
            </Link>

            <div className="flex items-center gap-1">
                {/* <Link
                    to="/"
                    className="btn btn-ghost btn-circle avatar text-lg"
                >
                    <FaShoppingCart />
                </Link>
                <Link
                    to="/list"
                    className="btn btn-ghost btn-circle avatar text-lg"
                >
                    <GiShop />
                </Link> */}
                <UserMenu />
            </div>
        </header>
    );
};

export default Header;
