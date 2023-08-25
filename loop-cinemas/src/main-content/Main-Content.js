import "./main-content.css"
import "./movie-props.css"
import MovieProps from "./movie-props";

function MainContent() {
    return (
        <div className="main-content">
            {/* <MovieProps img="https://deadline.com/wp-content/uploads/2023/04/barbie-BARBIE_VERT_TSR_W_TALENT_2764x4096_DOM_rgb.jpg?w=800"
            alt="Barbie Movie Poster" title="Barbie" releaseDate="2023" director="Greta Gerwig"/>
            <MovieProps img="https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg" 
            alt="Oppenheimer Movie Poster" title="Oppenheimer" releaseDate="2023" director="Christopher Nolan"/>
            <MovieProps img="https://dvvy6louqcr7j.cloudfront.net/vista/HO00014346/heroPoster/Talk-to-Me.png"
            alt="Talk To Me Movie Poster" title="Talk To Me" releaseDate="2023" director="Danny Philippou and Michael Philippou" />  */}
            <MovieProps />
        </div>
    )
};

export default MainContent;