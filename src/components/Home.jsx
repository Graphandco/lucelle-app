import DepensesCardRecap from "./depenses/DepensesCardRecap";
import { FoodItems } from "../context/FoodsContext";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import CountdownTimer from "./countdown/CountdownTimer";

const Home = () => {
    const { foodToBuy } = FoodItems();
    const NOW_IN_MS = new Date().getTime();
    const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
    const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

    return (
        <div className="flex flex-wrap gap-2">
            {/* <CountdownTimer targetDate={dateTimeAfterThreeDays} /> */}

            <div className="bg-slate-700 rounded-box col-span-3 row-span-3 mx-2 flex w-72 flex-shrink-0 flex-col justify-center gap-4 p-4 shadow-xl xl:mx-0 xl:w-full ">
                <div className="px-6 pt-6">
                    <div className="flex gap-1">
                        <span className="text-xl font-extrabold ">
                            Liste des courses
                        </span>
                        <div className="badge badge-primary font-bold">
                            {foodToBuy.length}
                        </div>
                    </div>
                    <div className="text-base-content/70 my-4 text-xs">
                        Voici les articles à acheter lors des prochaines courses
                        !
                    </div>
                    {foodToBuy.map((food, index) => (
                        <ul
                            className="w-full flex-1 list-disc pl-3"
                            key={index}
                        >
                            <li className="label-text capitalize font-semibold">
                                {food.name}
                            </li>
                        </ul>
                    ))}
                </div>

                <Link to="/courses">
                    <button className="btn btn-secondary btn-block space-x-2">
                        <FaEdit />

                        <span>Gérer la liste</span>
                    </button>
                </Link>
            </div>

            {/* <div className="m-2">
                {foodToBuy.map((food, index) => (
                    <div key={index}>{food.name}</div>
                ))}
            </div> */}
            <div className="self-end">
                <DepensesCardRecap />
            </div>
        </div>
    );
};

export default Home;
