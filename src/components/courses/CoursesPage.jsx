import { FoodItems } from "../../context/FoodsContext";
import ShoppingItem from "./ShoppingItem";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase";
import { Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { useState } from "react";
import AllFoods from "./AllFoods";
import FoodList from "./FoodList";

const CoursesPage = () => {
    const { foods } = FoodItems();
    const { user, googleSignIn } = UserAuth();

    const [isInventaire, setIsInventaire] = useState(false);

    let foodToBuy = foods.filter(function (food) {
        return food.tobuyforusers?.includes(user?.uid) ? food : "";
    });
    foodToBuy.sort(function (a, b) {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    });
    let foodInCart = foodToBuy.filter(function (food) {
        return food.incartforusers?.includes(user?.uid) ? food : "";
    });
    let foodNotInCart = foodToBuy.filter(function (food) {
        return food.incartforusers?.includes(user?.uid) ? "" : food;
    });

    let allCatList = foodInCart.map((item) => item.category);
    const catList = [...new Set(allCatList)].sort();

    const removeFoodToBuy = async () => {
        if (window.confirm(`Voulez-vous vraiment vider la liste ?`)) {
            foodNotInCart.forEach((food) => {
                console.log(food);
                updateDoc(doc(db, "shopping", food.id), {
                    incartforusers: food.incartforusers?.filter(
                        (item) => item !== user.uid
                    ),
                    tobuyforusers: food.tobuyforusers?.filter(
                        (item) => item !== user.uid
                    ),
                });
            });
        }
    };

    return (
        <>
            <div className="title-xl bigtext">
                <span>Courses</span>
            </div>
            <div className="tabs flex justify-center mb-3 p-2 sticky top-[45px] bg-[#0F162A] z-10">
                <a
                    className={`tab tab-bordered ${
                        !isInventaire ? "tab-active" : ""
                    }`}
                    onClick={() => setIsInventaire(false)}
                >
                    Liste
                </a>
                <a
                    className={`tab tab-bordered ${
                        isInventaire ? "tab-active" : ""
                    }`}
                    onClick={() => setIsInventaire(true)}
                >
                    Inventaire
                </a>
            </div>

            <div className="pb-20">
                {!isInventaire && (
                    <FoodList
                        catList={catList}
                        foodInCart={foodInCart}
                        foodNotInCart={foodNotInCart}
                        foodToBuy={foodToBuy}
                        removeFoodToBuy={removeFoodToBuy}
                        setIsInventaire={setIsInventaire}
                    />
                )}

                {isInventaire && <AllFoods />}
            </div>
        </>
    );
};

export default CoursesPage;
