import React, { useState } from 'react';
import "./movie-props.css"


// function MovieProps({img, alt, title, releaseDate, director}) {
//     return (
//         <div className="movieProp">
//             <img src={img} alt={alt} />
//             <div className="movieDetail">
//                 <h2>{title}</h2>
//                 <p>{releaseDate}</p>
//                 <p>{director}</p>
//             </div>
//             <div className="movieSessions">
//                 <h3>Session Times</h3>
//             </div>
//         </div>
//     )
// };

const MovieList = () => {
    const [movies, setMovies] = useState([
        {
            Title: "Barbie",
            Year: "2023",
            Poster: "https://deadline.com/wp-content/uploads/2023/04/barbie-BARBIE_VERT_TSR_W_TALENT_2764x4096_DOM_rgb.jpg?w=800"
        },
        {
            Title: "Oppenheimer",
            Year: "2023",
            Poster: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg"
        },
        {
            Title: "Talk To Me",
            Year: "2023",
            Poster: "https://dvvy6louqcr7j.cloudfront.net/vista/HO00014346/heroPoster/Talk-to-Me.png"
        }
    ]);
    return (<MovieProps movies={movies} />)
}

const MovieProps = (props) => {
    return (
        <div className="movieProp">
            {props.movies.map((movie, index) => <div>
                <img src={movie.Poster} alt={movie.Title} />
            </div>)}
        </div>
    )
}

export default MovieProps;