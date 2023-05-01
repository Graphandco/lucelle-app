import { MoviesItems } from "../../context/MoviesContext";
import MovieCard from "./MovieCard";

const MoviesPage = () => {
    const { movies } = MoviesItems();
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 px-2">
            {movies?.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
};

export default MoviesPage;
