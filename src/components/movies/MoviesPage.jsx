import { useState, useEffect } from "react";
import { MoviesItems } from "../../context/MoviesContext";
import MovieCard from "./MovieCard";

const MoviesPage = () => {
    const { movies } = MoviesItems();
    const [myMovies, setMymovies] = useState();

    useEffect(() => {
        const handleMyMovies = async () => {
            try {
                const MyMoviesList = await Axios.get(
                    `https://api.themoviedb.org/3/movie/upcoming?api_key=d40510d8e4acc0141800854b7dabae60&language=fr-FR&page=1`
                    // `https://api.themoviedb.org/3/list/8251517?api_key=d40510d8e4acc0141800854b7dabae60&language=fr-FR`
                );
                setMymovies(MyMoviesList.data.results);
            } catch (e) {
                console.log("Erreur lors de la récupération des films");
            }
        };
        handleMyMovies();
    }, []);

    console.log(myMovies);
    return (
        <>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 px-2">
                {movies?.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </>
    );
};

export default MoviesPage;
