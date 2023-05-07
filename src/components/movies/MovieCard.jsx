import { useState, useEffect } from "react";
import Axios from "axios";
import React from "react";
import MovieRate from "./MovieRate";

const MovieCard = ({ movieToShow }) => {
    // console.log(movieToShow);
    // const { title, overview, release_date } = movie;
    const [movie, setMovie] = useState();

    useEffect(() => {
        const handleMyMovies = async () => {
            try {
                const myMovie = await Axios.get(
                    `https://api.themoviedb.org/3/movie/${movieToShow}?api_key=d40510d8e4acc0141800854b7dabae60&language=fr--FR`
                );
                setMovie(() => myMovie.data);
                console.log(myMovie.data);
            } catch (e) {
                console.log("Erreur lors de la récupération des films");
            }
        };
        handleMyMovies();
    }, []);

    // const year = movie.release_date.slice(0, 4);
    return null;
    // <div className="bg-slate-700 shadow-xl rounded-lg flex flex-col gap-2 pb-3">
    //     <figure>
    //         <img
    //             src={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`}
    //             alt={movie.original_title}
    //             className="w-full aspect-[1/1.5] object-cover"
    //         />
    //     </figure>
    //     <div className="px-2 flex flex-col gap-2 h-full mt-2">
    //         <div className="badge badge-xs badge-slate-700 py-2 px-3 text-white ml-auto">
    //             {/* {year} */}
    //         </div>
    //         <h2 className="grid items-center text-movietitletext font-bold uppercase leading-tight text-white text-center grow">
    //             {movie.original_title}
    //         </h2>

    //         <div className="py-1">
    //             <MovieRate movie={movie} />
    //         </div>
    //     </div>
    // </div>
};

export default MovieCard;
