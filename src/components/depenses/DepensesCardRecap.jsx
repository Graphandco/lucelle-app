import { DepensesItems } from "../../context/DepensesContext";

const DepensesCardRecap = () => {
    const { difference } = DepensesItems();
    return (
        <div className="stat bg-slate-700">
            <div className="stat-title">
                {difference > 0 ? "Laurianne doit" : "Régis doit"}
            </div>
            <div className="stat-value">{difference} €</div>
            <div className="stat-desc">
                {difference > 0 ? "à Régis" : "à Laurianne"}
            </div>
        </div>
    );
};

export default DepensesCardRecap;
