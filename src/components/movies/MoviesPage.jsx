import { useState, useEffect } from "react";
import Axios from "axios";
import { MoviesItems } from "../../context/MoviesContext";
import MovieCard from "./MovieCard";

const MoviesPage = () => {
    const { myMovies } = MoviesItems();
    // const [moviesToShow, setMoviesToShow] = useState([]);
    // console.log(myMovies.moviesToShow);
    // useEffect(() => {
    //     setMoviesToShow(myMovies[0].moviesToShow);
    // }, []);
    // console.log(myMovies);

    // const moviesToShow = myMovies[0]?.moviesToShow;
    // console.log(moviesToShow);
    // const [myMovies, setMyMovies] = useState();
    // const [listToShow, setListToShow] = useState("filmsAVoirOld");
    // let listID;

    // switch (listToShow) {
    //     case "filmsAVoirNew":
    //         listID = "8251517";
    //         break;
    //     case "filmsAVoirOld":
    //         listID = "8251854";
    //         break;
    //     case "Papayas":
    //         console.log("Mangoes and papayas are $2.79 a pound.");
    //         // Expected output: "Mangoes and papayas are $2.79 a pound."
    //         break;
    //     default:
    //         listID = "8251517";
    // }

    // useEffect(() => {
    //     const handleMyMovies = async () => {
    //         try {
    //             const myMoviesList = await Axios.get(
    //                 `https://api.themoviedb.org/3/movie/upcoming?api_key=d40510d8e4acc0141800854b7dabae60&language=fr-FR&page=1`
    //                 // `https://api.themoviedb.org/3/list/${listID}?api_key=d40510d8e4acc0141800854b7dabae60&language=fr-FR`
    //             );
    //             setMyMovies(myMoviesList.data.items);
    //             console.log(myMovies);
    //         } catch (e) {
    //             console.log("Erreur lors de la récupération des films");
    //         }
    //     };
    //     handleMyMovies();
    // }, []);

    return (
        <>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-2 px-2">
                {/* {myMovies?.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))} */}
                {myMovies.moviesToShowNew?.map((movieToShow) => (
                    <MovieCard key={movieToShow} movieToShow={movieToShow} />
                ))}
            </div>
        </>
    );
};

export default MoviesPage;
