import React, { useState } from "react";
import { db } from "../../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
// import { query, collection, onSnapshot, orderBy } from "firebase/firestore";

const AddDepense = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [payeur, setPayeur] = useState();

    const addDepense = async (e) => {
        e.preventDefault(e);
        await addDoc(collection(db, "depenses"), {
            name,
            prix: Number(price),
            payeur,
            finished: false,
            // timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            date: new Date(),
            createdAt: new Date(),
        });
        setName("");
        setPrice("");
        setPayeur("Qui a payé ?");
    };
    return (
        <div className="add-depense">
            <div className="p-2 flex flex-wrap gap-2">
                <input
                    type="text"
                    placeholder="Nom"
                    className="input input-bordered max-w-xs w-32"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <input
                    type="text"
                    placeholder="Montant"
                    className="input input-bordered max-w-xs w-32"
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                />
                <select
                    className="select select-bordered max-w-xs"
                    onChange={(e) => setPayeur(e.target.value)}
                    value={payeur}
                >
                    <option>Qui a payé ?</option>
                    <option>Régis</option>
                    <option>Laurianne</option>
                </select>
                <button
                    onClick={addDepense}
                    className="btn btn-xl btn-primary text-xl"
                >
                    +
                </button>
            </div>
        </div>
    );
};

export default AddDepense;
