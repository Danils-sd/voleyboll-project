import Navbar from "../elements/nav/Navbar";
import "./Main.css";
import Label from "./label/Label";

function Main(){
    return(
        <div className="main-container">
            <img className="main-container--img--back" src="./imgs/volleyback.jpeg"/>
            <Navbar/>
            <Label/>
        </div>
    )
}

export default Main;