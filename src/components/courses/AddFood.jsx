import React, { useState } from "react";
import { FoodItems } from "../../context/FoodsContext";
import { db } from "../../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { FaPlus, FaMinus } from "react-icons/fa";

const AddFood = () => {
    const { foods } = FoodItems();
    const [name, setName] = useState("");
    const [category, setCategory] = useState("Divers");
    const [image, setImage] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const addFood = async (e) => {
        e.preventDefault(e);
        await addDoc(collection(db, "shopping"), {
            name: name.toLowerCase().trim(),
            category,
            image,
            incartforusers: [],
            tobuyforusers: [],
        });
        setName("");
        setCategory("");
        setImage("");
        setIsModalOpen(false);
        // setTimeout(() => {
        //     navigate("/list");
        // }, "1000");
    };

    let allCatList = foods.map((item) => item.category);
    const catList = [...new Set(allCatList)];
    return (
        <div>
            {/* The button to open modal */}

            <button
                className="btn btn-primary btn-circle text-xl"
                onClick={() => setIsModalOpen(!isModalOpen)}
            >
                {isModalOpen ? <FaMinus /> : <FaPlus />}
            </button>

            {isModalOpen && (
                <div className="fixed inset-0 w-full h-screen grid place-items-center">
                    <div
                        className="absolute inset-0 bg-black/50"
                        onClick={() => setIsModalOpen(!isModalOpen)}
                    ></div>
                    <div className="modal-wrapper bg-slate-700 mb-20 relative py-5 px-10 rounded-2xl shadow-xl">
                        <div className="text-lg text-white mb-5">
                            Ajouter un article
                        </div>
                        <div className="grid gap-5">
                            <input
                                type="text"
                                placeholder="Nom du produit"
                                className="input input-bordered"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />

                            <select
                                className="select select-bordered "
                                onChange={(e) => setCategory(e.target.value)}
                                value={category}
                            >
                                {catList &&
                                    catList.map((cat) => (
                                        <option key={cat}>{cat}</option>
                                    ))}
                            </select>

                            <input
                                type="text"
                                placeholder="Image du produit"
                                className="input input-bordered"
                                onChange={(e) => setImage(e.target.value)}
                                value={image}
                            />
                            <div className="flex p-2 gap-2">
                                <button
                                    onClick={addFood}
                                    className="btn btn-primary"
                                >
                                    Ajouter l'article
                                </button>
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="btn btn-outline"
                                >
                                    Annuler
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddFood;
