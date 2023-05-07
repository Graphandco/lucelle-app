import DepensesList from "./DepensesList";
import DepensesArchive from "./DepensesArchives";
import { useState } from "react";

const DepensesPage = () => {
    const [isArchive, setIsArchive] = useState(false);

    return (
        <>
            <div className="title-xl bigtext">Dépenses</div>
            <div className="tabs flex justify-center mb-3 mx-2">
                <a
                    className={`tab tab-bordered ${
                        !isArchive ? "tab-active" : ""
                    }`}
                    onClick={() => setIsArchive(false)}
                >
                    En cours
                </a>
                <a
                    className={`tab tab-bordered ${
                        isArchive ? "tab-active" : ""
                    }`}
                    onClick={() => setIsArchive(true)}
                >
                    Archives
                </a>
            </div>
            {/* <div className="flex items-center justify-end gap-2 py-2 mx-5 text-sm uppercase">
                <span>En cours</span>
                <input
                    type="checkbox"
                    className="toggle scale-[-1]"
                    checked={isArchive}
                    onChange={() => setIsArchive(!isArchive)}
                />
                <span>Archives</span>
            </div> */}
            {isArchive === true ? <DepensesArchive /> : <DepensesList />}
        </>
    );
};

export default DepensesPage;
