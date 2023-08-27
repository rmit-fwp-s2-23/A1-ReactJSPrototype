import React, { useState } from 'react';
import "./movie-Container.css"

function MovieProps({movies}) {
    return (
        <>
            {movies.map(movie => (
                <div className="movieContainer">
                    <div className="movieProp" key={movie.Title}>
                        <img src={movie.Poster} alt={movie.Title} />
                        <div className="movieDetail">
                            <h2>{movie.Title}</h2>
                            <p>{movie.Year}</p>
                            <p>{movie.Director}</p>
                            {/* You can add director and other details similarly if they exist in the movies array */}
                        </div>
                        <div className="movieSessions">
                            <h3>Session Times</h3>
                            {movie.SessionTimes.map(time => (
                                <span key={time} className="sessionTime">{time}</span>
                            ))}
                            {/* You can add session times if they exist in the movies array */}
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
};

const MovieList = () => {
    const [movies, setMovies] = useState([
        {
            Title: "Barbie",
            Year: "2023",
            Director: "Greta Gerwig",
            Poster: "https://deadline.com/wp-content/uploads/2023/04/barbie-BARBIE_VERT_TSR_W_TALENT_2764x4096_DOM_rgb.jpg?w=800",
            SessionTimes: ["10:00am", "12:00pm", "2:00pm", "4:00pm", "6:00pm", "8:00pm"]
        },
        {
            Title: "Oppenheimer",
            Year: "2023",
            Director: "Christopher Nolan",
            Poster: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg",
            SessionTimes: ["11:00am", "1:00pm", "3:00pm", "5:00pm", "7:00pm", "9:00pm"]
        },
        {
            Title: "Talk To Me",
            Year: "2023",
            Director: "Danny Philippou and Michael Philippou",
            Poster: "https://dvvy6louqcr7j.cloudfront.net/vista/HO00014346/heroPoster/Talk-to-Me.png",
            SessionTimes: ["5:30pm", "7:30pm", "9:30pm"]
        },
        {
            Title: "Meg 2: The Trench",
            Year: "2023",
            Director: "Ben Wheatley",
            Poster: "https://m.media-amazon.com/images/M/MV5BMTM2NTU1ZTktNjc4YS00NjNhLWE4NmYtOTM2YjFjOGUzNmYzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg",
            SessionTimes: ["12:30pm", "2:30pm", "4:30pm", "6:30pm", "8:30pm"]
        }
    ]);
    return (<MovieProps movies={movies} />)
}

export default MovieList;