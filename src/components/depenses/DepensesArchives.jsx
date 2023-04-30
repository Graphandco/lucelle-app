import { DepensesItems } from "../../context/DepensesContext";
import { UserAuth } from "../../context/AuthContext";
import { FaCheck } from "react-icons/fa";
import AddDepense from "./AddDepense";
import DepensesTab from "./DepensesTab";

const DepensesArchive = () => {
    const { depenses } = DepensesItems();
    const { user, googleSignIn } = UserAuth();

    depenses.sort((a, b) =>
        a.createdAt.seconds > b.createdAt.seconds ? -1 : 1
    );

    return (
        <>
            <DepensesTab depenses={depenses} action="delete" />
        </>
    );
};

export default DepensesArchive;
