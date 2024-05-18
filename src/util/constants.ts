import { Genres, Movie } from "../models";

const matchGenreIdsWithNames = (movie: Movie, genres: Genres[]):string[] => {
    return movie.genre_ids.map(genreId => {
        const genre = genres.find(g => g.id === genreId);
        return genre ? genre.name : "";
    }).filter(name => name !== "");
}