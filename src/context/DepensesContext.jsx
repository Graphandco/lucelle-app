/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

import { db } from "../../firebase";
import { query, collection, onSnapshot, orderBy } from "firebase/firestore";

const DepensesContext = createContext();

export const DepensesContextProvider = ({ children }) => {
    const [depenses, setDepenses] = useState([]);
    const [difference, setDifference] = useState("0");

    useEffect(() => {
        const q = query(
            // orderBy("createdAt", "desc"),
            collection(db, "depenses")
            // orderBy("name", "asc")
        );
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let depensesArr = [];
            querySnapshot.forEach((doc) => {
                depensesArr.push({ ...doc.data(), id: doc.id });
            });
            setDepenses(depensesArr);
            // console.log(depensesArr);

            const depensesEnCours = depensesArr.filter((depense) => {
                return depense.finished === false ? depense : "";
            });
            // console.log(depensesEnCours);

            const payementsRegis = depensesEnCours.filter((depense) => {
                return depense.payeur.includes("Régis") ? depense : "";
            });
            const payementsLaurianne = depensesEnCours.filter((depense) => {
                return depense.payeur.includes("Laurianne") ? depense : "";
            });

            const totalRegis = payementsRegis.reduce((acc, val) => {
                return acc + val.prix;
            }, 0);

            const totalLaurianne = payementsLaurianne.reduce((acc, val) => {
                return acc + val.prix;
            }, 0);

            const differenceTotal = totalRegis - totalLaurianne;
            const differenceArrondie = differenceTotal.toFixed(2);
            setDifference(differenceArrondie);
        });

        return () => unsubscribe();
    }, []);

    return (
        <DepensesContext.Provider value={{ depenses, setDepenses, difference }}>
            {children}
        </DepensesContext.Provider>
    );
};

export const DepensesItems = () => {
    return useContext(DepensesContext);
};
