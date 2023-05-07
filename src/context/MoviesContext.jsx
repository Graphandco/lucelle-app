/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import Axios from "axios";
import { db } from "../../firebase";
import { query, collection, onSnapshot, orderBy } from "firebase/firestore";

const MoviesContext = createContext();

export const MoviesContextProvider = ({ children }) => {
    const [movies, setMovies] = useState();
    const [myMovies, setMyMovies] = useState([]);

    useEffect(() => {
        const q = query(
            // orderBy("createdAt", "desc")
            collection(db, "movies")
            // orderBy("name", "asc")
        );
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let moviesArr = [];
            querySnapshot.forEach((doc) => {
                moviesArr.push({ ...doc.data(), id: doc.id });
            });
            setMyMovies(moviesArr[0]);
            // console.log(foodsArr);
            /**/
        });
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        const handleUpcoming = async () => {
            try {
                const upComingMoviesList = await Axios.get(
                    `https://api.themoviedb.org/3/movie/upcoming?api_key=d40510d8e4acc0141800854b7dabae60&language=fr-FR&page=1`
                );
                setMovies(upComingMoviesList.data.results);
            } catch (e) {
                console.log("Erreur lors de la récupération des films");
            }
        };
        handleUpcoming();
    }, []);

    // console.log(notes);

    return (
        <MoviesContext.Provider value={{ movies, myMovies }}>
            {children}
        </MoviesContext.Provider>
    );
};

export const MoviesItems = () => {
    return useContext(MoviesContext);
};
