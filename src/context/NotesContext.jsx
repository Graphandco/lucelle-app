/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../../firebase";
import { query, collection, onSnapshot, orderBy } from "firebase/firestore";

const NotesContext = createContext();

export const NotesContextProvider = ({ children }) => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const q = query(
            // orderBy("createdAt", "desc")
            collection(db, "notes")
            // orderBy("name", "asc")
        );
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let notesArr = [];
            querySnapshot.forEach((doc) => {
                notesArr.push({ ...doc.data(), id: doc.id });
            });
            setNotes(notesArr);
            // console.log(foodsArr);
            /**/
        });
        return () => unsubscribe();
    }, []);

    // console.log(notes);

    return (
        <NotesContext.Provider value={{ notes }}>
            {children}
        </NotesContext.Provider>
    );
};

export const NotesItems = () => {
    return useContext(NotesContext);
};
