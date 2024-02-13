import "./Navbar.css";
import { useNavigate } from "react-router-dom";
function Navbar(){
    const navigate = useNavigate();
    const handNavigateMain = () => {
        navigate("/");
    }
    return(
        <div className="navbar-container">
            <h1 className="navbar-container--logo" onClick={handNavigateMain}>voley<span className="navbar-logo--second">Store</span></h1>
            <div className="navbar-container--sections">
            <span className="navbar-container--section">Главная</span>
                <span className="navbar-container--section">Кросовки</span>
                <span className="navbar-container--section">Мячи</span>
                <button className="navbar-container--korz"><img className="navbar-container--korz--img" src="./icons/korz.png"/></button>
            </div>
        </div>
    );
}
export default Navbar;