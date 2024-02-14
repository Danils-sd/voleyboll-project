import "./Korz.css";
import Futter from "../elements/fotter/Futter";
import Navbar from "../elements/nav/Navbar";
import { useEffect, useState } from "react";
import SmallCard from "./smallCard/SmallCard";
function Korz(){
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
        <div className="korz-container">
            <Navbar/>
            <div className="korz-container--content">
                <div className="korz-container--content-left">
                    <h1 className="korz-container--content-left-ab">Корзина</h1>
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
                    {isGet && (
                        <span className="korz-container--content-left-final">Итог: {finalPrice}p</span>
                    )}
                </div>
                <div className="korz-container--content-right">
                    {isGet != 0 && (
                        stuf.map((e) => {
                            return(
                                <SmallCard id={e.id} img={e.img} name={e.name} disc={e.disc} price={e.price}/>
                            )
                        })
                    )}
                </div>
            </div>
            <Futter/>
        </div>
    )
}

export default Korz;