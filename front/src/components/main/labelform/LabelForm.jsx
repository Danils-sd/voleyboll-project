import "./LabelForm.css";
import {useNavigate} from "react-router-dom"
function LabelForm(){
    const navigate = useNavigate();
    const handBalls = () => {
        navigate("/balls");
    }
    return(
        <div className="label-form-container">
            <div className="label-form-container--top-content">
                <div className="label-form-container--top-left-content">
                    <h1 className="label-form-container--top-left-content--ab">Мячи</h1>
                    <p className="label-form-container--top-left-content--disc">
                        Волейбольные мяч
                        ведущих брендов,
                        используемые в профессиональных матчах
                    </p>
                    <button onClick={handBalls} className="label-form-container--top-left-content--btn">Перейти</button>
                </div>
                <img className="label-form-container--top-right-content" src="./imgs/mikasa-label.jpeg" alt="🏐"/>
            </div>
            <div className="label-form-container--bottom-content">
                <div className="label-form-container--bottom-content--card">
                    <img className="label-form-container--bottom-content--card-img" src="./imgs/mikasa-label.jpeg" alt="🏐"/>
                    <h3 className="label-form-container--bottom-content--card-name">Mikasa</h3>
                </div>
                <div className="label-form-container--bottom-content--card">
                    <img className="label-form-container--bottom-content--card-img" src="./imgs/molten-label.jpeg" alt="🏐"/>
                    <h3 className="label-form-container--bottom-content--card-name">Molten</h3>
                </div>
            </div>
        </div>
    )
}

export default LabelForm;