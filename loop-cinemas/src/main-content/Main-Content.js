import "./main-content.css"
import "./movie-Container.css"
import "../sidebar/Sidebar.css"
import MovieProps from "./movie-props";
import Sidebar from "../sidebar/Sidebar";

function MainContent() {
    return (
        <div className="main-content">
            <div className="movies-container">
                <MovieProps />
            </div>
            <div className="sidebar">
                <Sidebar />
            </div>
        </div>
    )
};

export default MainContent;