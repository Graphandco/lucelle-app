import { DepensesItems } from "../../context/DepensesContext";
// import { UserAuth } from "../../context/AuthContext";
import { FaCheck, FaTrash } from "react-icons/fa";
import { db } from "../../../firebase";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";

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
            <div className="flex mt-5 liste-depenses">
                <div className="grow ">
                    <div className="uppercase text-xs font-semibold py-3 px-4 bg-slate-600">
                        Date
                    </div>
                    {depenses.map((depense, index) => (
                        <div
                            className="odd:bg-slate-700 py-2 px-4 h-10 flex items-center text-xs"
                            key={index}
                        >
                            {new Date(
                                depense.createdAt.seconds * 1000
                            ).toLocaleDateString("fr")}
                        </div>
                    ))}
                </div>
                <div className="grow">
                    <div className="uppercase text-xs font-semibold py-3 px-4 bg-slate-600">
                        Nom
                    </div>
                    {depenses.map((depense, index) => (
                        <div
                            className="odd:bg-slate-700 py-2 px-4 h-10 flex items-center text-xs "
                            key={index}
                        >
                            {depense.name}
                        </div>
                    ))}
                </div>
                <div className="grow">
                    <div className="uppercase text-xs font-semibold py-3 px-4 bg-slate-600">
                        Montant
                    </div>
                    {depenses.map((depense, index) => (
                        <div
                            className="odd:bg-slate-700 py-2 px-4 h-10 flex items-center text-xs "
                            key={index}
                        >
                            {depense.prix} €
                        </div>
                    ))}
                </div>
                <div className="grow ">
                    <div className="uppercase text-xs font-semibold py-3 px-4 bg-slate-600">
                        Payeur
                    </div>
                    {depenses.map((depense, index) => (
                        <div
                            className="odd:bg-slate-700 py-2 px-4 h-10 flex items-center text-xs "
                            key={index}
                        >
                            {depense.payeur}
                        </div>
                    ))}
                </div>
                <div className="grow ">
                    <div className="uppercase text-xs font-semibold py-3 px-4 bg-slate-600">
                        Traiter
                    </div>
                    {depenses.map((depense, index) => (
                        <div
                            className="odd:bg-slate-700 py-2 px-4 h-10 flex items-center text-xs"
                            key={index}
                        >
                            <FaCheck
                                className={` ${
                                    depense.finished === true
                                        ? "text-lime-600"
                                        : null
                                }`}
                                onClick={() => handleFinished(depense.id)}
                            />
                            {action === "delete" && (
                                <FaTrash
                                    className="ml-4"
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
