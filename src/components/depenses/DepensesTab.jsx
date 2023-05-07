import { DepensesItems } from "../../context/DepensesContext";
// import { UserAuth } from "../../context/AuthContext";
import { FaCheck, FaTrash } from "react-icons/fa";
import { db } from "../../../firebase";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { image } from "@cloudinary/url-gen/qualifiers/source";

const DepensesTab = ({ depenses, action }) => {
    // const { user, googleSignIn } = UserAuth();

    // const totalRegis = Object.values(payementsRegis).reduce((a, b) => a + b, 0);

    // depenses.sort((a, b) =>
    //     a.createdAt.seconds > b.createdAt.seconds ? 1 : -1
    // );

    const handleFinished = async (id) => {
        if (action === "setFinished") {
            await updateDoc(doc(db, "depenses", id), {
                finished: true,
            });
        } else {
            await updateDoc(doc(db, "depenses", id), {
                finished: false,
            });
        }
    };

    const handleDelete = async (id, name) => {
        if (
            window.confirm(
                `Voulez-vous vraiment supprimer la dépense ${name} ?`
            )
        ) {
            await deleteDoc(doc(db, "depenses", id));
        }
    };

    return (
        <>
            <div className="grid grid-cols-5 my-3 liste-depenses">
                <div className=" ">
                    <div className="uppercase text-xs font-semibold py-3 px-1 bg-slate-600 pl-3">
                        Date
                    </div>
                    {depenses.map((depense, index) => (
                        <div
                            className="odd:bg-slate-700 py-2 px-1 h-10 flex items-center text-2xs pl-3"
                            key={index}
                        >
                            {new Date(
                                depense.createdAt.seconds * 1000
                            ).toLocaleDateString("fr")}
                        </div>
                    ))}
                </div>
                <div className="">
                    <div className="uppercase text-xs font-semibold py-3 px-2 bg-slate-600">
                        Nom
                    </div>
                    {depenses.map((depense, index) => (
                        <div
                            className="odd:bg-slate-700 py-2 px-2 h-10 flex items-center text-xs "
                            key={index}
                        >
                            {depense.name}
                        </div>
                    ))}
                </div>
                <div className="">
                    <div className="uppercase text-xs font-semibold py-3 px-1 bg-slate-600">
                        Montant
                    </div>
                    {depenses.map((depense, index) => (
                        <div
                            className="odd:bg-slate-700 py-2 px-1 h-10 flex items-center text-xs "
                            key={index}
                        >
                            {depense.prix} €
                        </div>
                    ))}
                </div>
                <div className=" ">
                    <div className="uppercase text-xs font-semibold py-3 px-1 bg-slate-600">
                        Payeur
                    </div>
                    {depenses.map((depense, index) => (
                        <div
                            className="odd:bg-slate-700 py-2 px-1 h-10 flex items-center text-xs "
                            key={index}
                        >
                            {depense.payeur === "Laurianne" && (
                                <img
                                    className="w-8 rounded-[50%]"
                                    src="/laurianne.jpg"
                                />
                            )}
                            {depense.payeur === "Régis" && (
                                <img
                                    className="w-8 rounded-[50%]"
                                    src="/regis.jpg"
                                />
                            )}
                            {depense.payeur === "Both" && (
                                <img
                                    className="w-8 rounded-[50%]"
                                    src="/badger.png"
                                />
                            )}
                        </div>
                    ))}
                </div>
                <div className=" ">
                    <div className="uppercase text-xs font-semibold py-3 px-1 bg-slate-600">
                        Traiter
                    </div>
                    {depenses.map((depense, index) => (
                        <div
                            className="odd:bg-slate-700 py-2 px-1 h-10 flex items-center text-xs"
                            key={index}
                        >
                            <FaCheck
                                className={` ${
                                    depense.finished === true
                                        ? "text-lime-600 cursor-pointer hover:text-white"
                                        : " cursor-pointer hover:text-white"
                                }`}
                                onClick={() => handleFinished(depense.id)}
                            />
                            {action === "delete" && (
                                <FaTrash
                                    className="ml-4 cursor-pointer hover:text-white"
                                    onClick={() =>
                                        handleDelete(depense.id, depense.name)
                                    }
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default DepensesTab;
