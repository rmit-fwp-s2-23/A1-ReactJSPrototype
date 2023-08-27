import "./main-content.css"
import "./movie-Container.css"
import MovieProps from "./movie-props";
import Sidebar from "../sidebar/Sidebar";

function MainContent() {
    return (
        <div className="main-content">
            <div>
                <MovieProps />
            </div>
            <div>
                <Sidebar />
            </div>
        </div>
    )
};

export default MainContent;