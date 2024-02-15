import { useState, useEffect } from "react";
import Futter from "../elements/fotter/Futter";
import Navbar from "../elements/nav/Navbar";
import "./ZakForm.css";

function ZakForm(){
    const [stuf, setStuf] = useState([])
    const [isGet, setGet] = useState(false)

    const [finalPrice, setFinalPrice] = useState(0);
    useEffect(() => {
        if(localStorage.getItem("stufList") != null){
            setStuf(JSON.parse(localStorage.getItem("stufList")));
        }
        
        if(localStorage.getItem("stufSum") != null){
            setFinalPrice(JSON.parse(localStorage.getItem("stufSum")));
        }

        setGet(true);
    }, [])

    return(
        <div className="zakForm-container">
            <Navbar/>
            <div className="zakForm-container-content">
                <div className="zakForm-container-content-left">
                    <div className="zakForm-container-content-left-left">
                        <input className="zakForm-container-content-left-left-inp" placeholder="Имя"/>
                        <input className="zakForm-container-content-left-left-inp" placeholder="Номер телефона"/>
                        <input type="email" className="zakForm-container-content-left-left-inp" placeholder="Почта"/>
                    </div>
                    <div className="zakForm-container-content-left-right">
                        <span className="zakForm-container-content-left-right-final">{finalPrice}p</span>
                        <button className="zakForm-container-content-left-right-button">Заказать</button>
                    </div>
                </div>
                <div className="zakForm-container-content-right">
                    {isGet && (
                        stuf.map((e) => {
                            return(
                                <div className="korz-container--content-left-card">
                                    <div>
                                        <img className="korz-container--content-left-card-img" src={e.img}/>
                                        <span className="korz-container--content-left-card-name">{e.name} {e.disc}</span>
                                    </div>
                                    <span className="korz-container--content-left-card-price">{e.price}p</span>
                                </div>
                                
                            )
                        })
                    )}
                </div>
            </div>
            <Futter/>
        </div>
    )
}

export default ZakForm;