import "./header.css";
import ImageLogo from "../images-icons/film.png";

function Header(){
    return(
        <div className="header">
            <div>
                <img src={ImageLogo} />
            </div>
            <div>
                <h1>Loop Cinemas</h1>
            </div>
        </div>
    )
}

export default Header;