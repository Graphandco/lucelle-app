import React from "react";

import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { BsStar } from "react-icons/bs";

const MovieRate = ({ movie }) => {
    const rateToStars = (note) => {
        if (note === 0) {
            return (
                <>
                    <BsStar />
                    <BsStar />
                    <BsStar />
                    <BsStar />
                    <BsStar />
                </>
            );
        }
        if (note >= 0 && note < 1) {
            return (
                <>
                    <BsStarHalf />
                    <BsStar />
                    <BsStar />
                    <BsStar />
                    <BsStar />
                </>
            );
        }
        if (note >= 1 && note < 2) {
            return (
                <>
                    <BsStarFill />
                    <BsStar />
                    <BsStar />
                    <BsStar />
                    <BsStar />
                </>
            );
        }
        if (note >= 2 && note < 3) {
            return (
                <>
                    <BsStarFill />
                    <BsStarHalf />
                    <BsStar />
                    <BsStar />
                    <BsStar />
                </>
            );
        }
        if (note >= 3 && note < 4) {
            return (
                <>
                    <BsStarFill />
                    <BsStarFill />
                    <BsStar />
                    <BsStar />
                    <BsStar />
                </>
            );
        }
        if (note >= 4 && note < 5) {
            return (
                <>
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarHalf />
                    <BsStar />
                    <BsStar />
                </>
            );
        }
        if (note >= 5 && note < 6) {
            return (
                <>
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStar />
                    <BsStar />
                </>
            );
        }
        if (note >= 6 && note < 7) {
            return (
                <>
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarHalf />
                    <BsStar />
                </>
            );
        }
        if (note >= 7 && note < 8) {
            return (
                <>
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStar />
                </>
            );
        }
        if (note >= 8 && note < 9) {
            return (
                <>
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarHalf />
                </>
            );
        }
        if (note >= 9 && note <= 10) {
            return (
                <>
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                </>
            );
        }
    };

    return (
        <>
            {movie.vote_count > 0 && (
                <div className="flex items-center justify-center gap-2 px-2">
                    <span className="flex gap-0.5 text-sm">
                        {rateToStars(movie.vote_average)}
                    </span>
                    <span className="text-2xs">({movie.vote_count})</span>
                </div>
            )}
        </>
    );
};

export default MovieRate;
