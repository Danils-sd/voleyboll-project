import "./Navbar.css";
import { useNavigate } from "react-router-dom";
function Navbar(){
    const navigate = useNavigate();
    const handNavigateMain = () => {
        navigate("/");
    }
    const handNavigateSneakers = () => {
        navigate("/sneakers");
    }
    const handNavigateBalls = () => {
        navigate("/balls");
    }

    const haddNavigateKorz = () => {
        navigate('/korz');
    }
    return(
        <div className="navbar-container">
            <h1 onClick={handNavigateMain} className="navbar-container--logo">volley<span className="navbar-logo--second">Store</span></h1>
            <div className="navbar-container--sections">
                <span onClick={handNavigateMain} className="navbar-container--section">Главная</span>
                <span onClick={handNavigateSneakers} className="navbar-container--section">Кросовки</span>
                <span onClick={handNavigateBalls}className="navbar-container--section">Мячи</span>
                <button onClick={haddNavigateKorz} className="navbar-container--korz"><img className="navbar-container--korz--img" src="./icons/korz.png" alt="🗑️"/></button>
            </div>
        </div>
    );
}
export default Navbar;