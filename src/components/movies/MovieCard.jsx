import React from "react";
import MovieRate from "./MovieRate";

const MovieCard = ({ movie }) => {
    console.log(movie);
    const { title, overview, release_date } = movie;

    const year = release_date.slice(0, 4);
    return (
        <div className="bg-slate-700 shadow-xl rounded-lg flex flex-col gap-2 pb-3">
            <figure>
                <img
                    src={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                    alt={title}
                    className="w-full aspect-[1/1.5] object-cover"
                />
            </figure>
            <div className="px-2 flex flex-col gap-2 h-full mt-2">
                <div className="badge badge-xs badge-slate-700 py-2 px-3 text-white ml-auto">
                    {year}
                </div>
                <h2 className="text-movietitletext font-bold uppercase leading-tight text-white text-center grow">
                    {title}
                </h2>
                {/* <p>{overview}</p> */}
                {/* <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div> */}
                <div className="py-1">
                    <MovieRate movie={movie} />
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
