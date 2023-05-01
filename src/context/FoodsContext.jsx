/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { UserAuth } from "./AuthContext";
import { db } from "../../firebase";
import { query, collection, onSnapshot, orderBy } from "firebase/firestore";

const FoodsContext = createContext();

export const FoodsContextProvider = ({ children }) => {
    const [foods, setFoods] = useState([]);
    const [foodToBuy, setFoodToBuy] = useState([]);
    const { user } = UserAuth();

    useEffect(() => {
        const q = query(
            // orderBy("createdAt", "desc")
            collection(db, "shopping"),
            orderBy("name", "asc")
        );
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let foodsArr = [];
            querySnapshot.forEach((doc) => {
                foodsArr.push({ ...doc.data(), id: doc.id });
            });
            setFoods(foodsArr);
            // console.log(foodsArr);
            /**/
        });
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        let foodsToBuy = foods.filter(function (food) {
            return food.tobuyforusers?.includes(user?.uid) ? food : "";
        });
        // console.log(user);
        foodsToBuy.sort(function (a, b) {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        });
        setFoodToBuy(foodsToBuy);
    }, [foods]);

    return (
        <FoodsContext.Provider value={{ foods, setFoods, foodToBuy }}>
            {children}
        </FoodsContext.Provider>
    );
};

export const FoodItems = () => {
    return useContext(FoodsContext);
};
