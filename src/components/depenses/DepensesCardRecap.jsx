import { DepensesItems } from "../../context/DepensesContext";

const DepensesCardRecap = () => {
    const { difference } = DepensesItems();
    return (
        <>
            <div className="card w-fit bg-slate-700 shadow-xl">
                <div className="card-body gap-1">
                    <h2 className="card-title text-lg">
                        {difference > 0 ? "Laurianne doit" : "Régis doit"}
                    </h2>
                    <div className="font-extrabold text-bigtext text-white">
                        {difference} €
                    </div>
                    <div className="text-xs">
                        {difference > 0 ? "à Régis" : "à Laurianne"}
                    </div>
                    {/* <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div> */}
                </div>
            </div>

            {/* <div className="stats shadow w-fit ml-auto mr-5 mb-20 mt-5">
                <div className="stat bg-slate-700">
                    <div className="stat-title">
                        {difference > 0 ? "Laurianne doit" : "Régis doit"}
                    </div>
                    <div className="stat-value">{difference} €</div>
                    <div className="stat-desc">
                        {difference > 0 ? "à Régis" : "à Laurianne"}
                    </div>
                </div>
            </div> */}
        </>
    );
};

export default DepensesCardRecap;
