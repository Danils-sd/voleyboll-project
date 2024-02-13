import "./Sneakers.css";
import Navbar from "../elements/nav/Navbar";
import Futter from "../elements/fotter/Futter";
import { useEffect } from "react";
import CONSTS from "../../consts";
function Sneakers(){
    useEffect(() => {
        fetch(CONSTS.URL + "/api", {
            method: "GET"
        }).then(res => {
            return res.json()
        }).then(({data}) => {
            console.log(data)
        })
    }, [])
    return(
        <div className="sneakers-container">
            <Navbar/>
            <div className="sneakers-container--block">
                <h1 className="sneakers-container--block-name">Nike</h1>
                <div className="sneakers-container--block-stuf">
                    
                </div>
            </div>
            <div className="sneakers-container--block">
                <h1 className="sneakers-container--block-name">Asics</h1>
                <div className="sneakers-container--block-stuf">

                </div>
            </div>
            <div className="sneakers-container--block">
                <h1 className="sneakers-container--block-name">Adidas</h1>
                <div className="sneakers-container--block-stuf">

                </div>
            </div>
            <Futter/>
        </div>
    )
}

export default Sneakers;