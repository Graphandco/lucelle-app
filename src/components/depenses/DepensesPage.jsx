import DepensesList from "./DepensesList";
import DepensesArchive from "./DepensesArchives";
import { useState } from "react";

const DepensesPage = () => {
    const [isArchive, setIsArchive] = useState(true);

    return (
        <>
            <div className="flex items-center justify-end gap-2 py-2 mx-5 text-sm uppercase">
                <span>En cours</span>
                <input
                    type="checkbox"
                    className="toggle scale-[-1]"
                    checked={isArchive}
                    onChange={() => setIsArchive(!isArchive)}
                />
                <span>Archives</span>
            </div>
            {isArchive === true ? <DepensesList /> : <DepensesArchive />}
        </>
    );
};

export default DepensesPage;
