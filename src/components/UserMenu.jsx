import { UserAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { useState } from "react";
const UserMenu = () => {
    // const { user, logout, isUserAdmin, googleSignIn, zzzz } = UserAuth();
    const { user, logout, isUserAdmin, googleSignIn, signIn } = UserAuth();
    // const isAdmin = isUserAdmin();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState();
    const [error, setError] = useState();

    console.log(user);

    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error);
        }
    };
    const handleSignInWithEmail = async (e) => {
        e.preventDefault();
        setError("");
        try {
            console.log("1");
            await signIn(email, password);
            console.log("2");
            //   navigate("/home");
        } catch (err) {
            setError(err.message);
        }
    };

    const handleLogout = async () => {
        try {
            await logout();
            navigate("/");
            console.log("You are logged out");
        } catch (e) {
            console.log(e.message);
        }
    };

    // console.log(zzzz);

    return (
        <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                <div className="w-8 rounded-full">
                    {user?.photoURL ? (
                        <img src={user.photoURL} alt="" />
                    ) : (
                        <div className="w-full h-full grid place-items-center ">
                            <FaUserAlt className="text-gris" />
                        </div>
                    )}
                </div>
            </label>
            <ul
                tabIndex="0"
                className="mt-3 p-5 bg-slate-800 shadow menu menu-compact dropdown-content rounded-box w-52"
            >
                {user && (
                    <>
                        <li>
                            <span className="text-primary pointer-events-none">
                                {/* {user?.displayName} */}
                                {user?.email}
                            </span>
                        </li>
                        <li>
                            <span className="opacity-50" onClick={handleLogout}>
                                Se déconnecter
                            </span>
                        </li>
                    </>
                )}
                {!user && (
                    // <li>
                    //     <span onClick={handleGoogleSignIn}>Se connecter</span>
                    // </li>
                    <li className="flex flex-col gap-2">
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            type="text"
                            placeholder="Email"
                            className="input input-bordered input-sm w-full max-w-xs"
                        />
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            type="text"
                            placeholder="Mot de passe"
                            className="input input-bordered input-sm w-full max-w-xs"
                        />
                        <button
                            className="btn btn-secondary btn-block space-x-2"
                            onClick={handleSignInWithEmail}
                        >
                            <span>Se connecter</span>
                        </button>
                    </li>
                    // <li>
                    //     <Link to="/login">Se connecter</Link>
                    // </li>
                )}
                {/* <li>
                    <span className="justify-between">
                        Profile
                        <span className="badge">New</span>
                    </span>
                </li> */}
            </ul>
        </div>
    );
};

export default UserMenu;
