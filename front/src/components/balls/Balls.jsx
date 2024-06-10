import { useEffect, useState } from "react";
import Futter from "../elements/fotter/Futter";
import Navbar from "../elements/nav/Navbar";
import CONSTS from "../../consts";
import StafCard from "../elements/stafCard/StafCard";
import "./Balls.css";

function Balls(){
    const[DBMikasa, setDBMikasa] = useState([]);
    const[isLoadingMikasa, setLoadingMikasa] = useState(false);
    const[DBMolten, setDBMolten] = useState([]);
    const[isLoadingMolten, setLoadingMolten] = useState(false);

    useEffect(() => {
        try {
            fetch(CONSTS.URL + "/api/bolls/Mikasa", {
                method: "GET"
            }).then(res => {
                return res.json();
            }).then(({data}) => {
                setDBMikasa(data);
                setLoadingMikasa(true);
            })
        } catch (error) {
            console.log(error);
        }

        try {
            fetch(CONSTS.URL + "/api/bolls/Molten", {
                method: "GET"
            }).then(res => {
                return res.json();
            }).then(({data}) => {
                setDBMolten(data);
                setLoadingMolten(true);
            })
        } catch (error) {
            console.log(error);
        }
    }, []);
    return(
        <div className="balls-container">
            <Navbar/>
            <div className="balls-container--block">
                <h1 className="balls-container--block-name">Mikasa</h1>
                <div className="balls-container--block-stuf">
                    {isLoadingMikasa && (
                        DBMikasa.map(e => {
                            return(
                                <StafCard id={e.id} img={e.img} name={e.brand} disc={e.op} price={e.pryse}/>
                            )
                        })
                    )}
                </div>
            </div>
            <div className="balls-container--block">
                <h1 className="balls-container--block-name">Molten</h1>
                <div className="balls-container--block-stuf">
                    {isLoadingMolten && (
                        DBMolten.map(e => {
                            return(
                                <StafCard id={e.id} img={e.img} name={e.brand} disc={e.op} price={e.pryse}/>
                            )
                        })
                    )}
                </div>
            </div>
            <Futter/>
        </div>
    )
}

export default Balls;