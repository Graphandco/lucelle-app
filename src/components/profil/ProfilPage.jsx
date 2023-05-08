import { updateProfile } from "firebase/auth";
import { UserAuth } from "../../context/AuthContext";
import { FaPencilAlt } from "react-icons/fa";
import { useState } from "react";

import { getStorage, ref } from "firebase/storage";
import Upload from "./Upload";

const ProfilPage = () => {
    // Create a root reference
    const storage = getStorage();

    const { user, logout, isUserAdmin, googleSignIn, signIn } = UserAuth();
    const { displayName, email, photoURL } = user;
    const [isEdit, setIsEdit] = useState(false);
    const [name, setName] = useState(displayName);
    const [avatarURL, setAvatarURL] = useState(photoURL);

    // console.log(user);
    // console.log(user);
    const updateUser = () => {
        updateProfile(user, {
            displayName: name,
            // photoURL: "https://www.graphandco.com/img/logo.svg",
            photoURL: avatarURL,
        })
            .then(() => {
                setName("");
                setIsEdit(false);
                console.log(avatarURL);
            })
            .catch((error) => {
                // An error occurred
                // ...
            });
    };
    return (
        <div className="px-5 pb-5">
            <div className="title-xl bigtext">Profil</div>

            <div className="card w-96 max-w-full bg-slate-700 shadow-xl">
                <div className="avatar mt-5 ml-5">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={photoURL} />
                    </div>
                </div>
                <div className="card-body">
                    <h2 className="card-title text-white">{displayName}</h2>
                    <p>Email: {email}</p>
                    <div className="card-actions justify-end">
                        <button
                            className="btn btn-primary btn-sm"
                            onClick={() => setIsEdit(!isEdit)}
                        >
                            <FaPencilAlt />
                        </button>
                    </div>
                    {isEdit && (
                        <div>
                            <input
                                type="text"
                                value={name}
                                placeholder={displayName}
                                className="input input-bordered w-full max-w-xs mb-2"
                                onChange={(e) => setName(e.target.value)}
                            />
                            <Upload setAvatarURL={setAvatarURL} />
                            <button
                                className="btn btn-primary btn-block space-x-2"
                                onClick={updateUser}
                            >
                                <span>Mettre à jour</span>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfilPage;
