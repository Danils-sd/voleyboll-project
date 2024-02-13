import Navbar from "../elements/nav/Navbar";
import "./Main.css";
import Label from "./label/Label";
import LabelForm from "./labelform/LabelForm";

function Main(){
    return(
        <div className="main-container">
            <img className="main-container--img--back" src="./imgs/volleyback.jpeg"/>
            <Navbar/>
            <Label/>
            <h1 className="main-contaoner--text-anim">Хорошей игры!</h1>
            <LabelForm/>
        </div>
    )
}

export default Main;