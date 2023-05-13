import { DepensesItems } from "../../context/DepensesContext";
import { UserAuth } from "../../context/AuthContext";
import { FaMinus, FaPlus } from "react-icons/fa";
import AddDepense from "./AddDepense";
import DepensesTab from "./DepensesTab";
import DepensesCardRecap from "./DepensesCardRecap";
import { useState } from "react";

const DepensesList = () => {
    const { depenses, difference } = DepensesItems();
    const { user, googleSignIn } = UserAuth();
    const [isAddActive, setIsAddActive] = useState(false);

    depenses.sort((a, b) =>
        a.createdAt.seconds > b.createdAt.seconds ? 1 : -1
    );

    const depensesEnCours = depenses.filter((depense) => {
        return depense.finished === false ? depense : "";
    });

    // const payementsRegis = depensesEnCours.filter((depense) => {
    //     return depense.payeur.includes("Régis") ? depense : "";
    // });
    // const payementsLaurianne = depensesEnCours.filter((depense) => {
    //     return depense.payeur.includes("Laurianne") ? depense : "";
    // });

    // const totalRegis = payementsRegis.reduce((acc, val) => {
    //     return acc + val.prix;
    // }, 0);

    // const totalLaurianne = payementsLaurianne.reduce((acc, val) => {
    //     return acc + val.prix;
    // }, 0);

    // const differenceTotal = totalRegis - totalLaurianne;
    // const difference = differenceTotal.toFixed(2);

    // const removeFoodToBuy = async () => {
    //     if (window.confirm(`Voulez-vous vraiment vider la liste ?`)) {
    //         foodToBuy.forEach((food) => {
    //             console.log(food);
    //             updateDoc(doc(db, "shopping", food.id), {
    //                 incartforusers: food.incartforusers?.filter(
    //                     (item) => item !== user.uid
    //                 ),
    //                 tobuyforusers: food.tobuyforusers?.filter(
    //                     (item) => item !== user.uid
    //                 ),
    //             });
    //         });
    //     }
    // };

    return (
        <>
            <DepensesTab depenses={depensesEnCours} action="setFinished" />

            {/* <div className="px-2 flex justify-end">
                <DepensesCardRecap />
            </div> */}
            <div className="flex justify-end items-center gap-2 my-5 bg-slate-700 py-3 px-5">
                <img
                    className="w-8 rounded-[50%]"
                    src={`${difference > 0 ? "/laurianne.jpg" : "regis.jpg"}`}
                />
                <span className="text-sm">doit</span>
                <div className="font-bold text-xl text-white">
                    {difference < 0 ? difference * -1 : difference} €
                </div>
                <span className="text-sm">à</span>
                <img
                    className="w-8 rounded-[50%]"
                    src={`${difference < 0 ? "/laurianne.jpg" : "regis.jpg"}`}
                />
                {/* {difference > 0 ? "Laurianne doit" : "Régis doit"} */}
            </div>
            <button
                className="btn btn-primary btn-circle mx-auto mb-5 text-xl"
                onClick={() => setIsAddActive(!isAddActive)}
            >
                {isAddActive ? <FaMinus /> : <FaPlus />}
            </button>
            {isAddActive && <AddDepense />}

            {/* <div className="total flex justify-end m-5">
                {difference === 0 && (
                    <div className="py-5 px-10 border border-primary rounded-xl">
                        Equal
                    </div>
                )}

                {difference > 0 && (
                    <div className="py-5 px-10 border-2 border-primary rounded-xl">
                        <span>Laurianne</span> doit{" "}
                        <strong className="text-3xl px-2 text-primary translate-y-[5px] inline-block">
                            {difference} €
                        </strong>{" "}
                        à Régis
                    </div>
                )}
                {difference < 0 && (
                    <div className="py-5 px-10 border border-primary rounded-xl">
                        <span>Régis</span> doit{" "}
                        <strong className="text-3xl px-2 text-primary translate-y-[5px] inline-block">
                            {difference * -1} €
                        </strong>{" "}
                        à Laurianne
                    </div>
                )}
            </div> */}
        </>
    );
};

export default DepensesList;
