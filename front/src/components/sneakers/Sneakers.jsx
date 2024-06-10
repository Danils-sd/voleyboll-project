import "./Sneakers.css";
import Navbar from "../elements/nav/Navbar";
import Futter from "../elements/fotter/Futter";
import { useEffect, useState } from "react";
import CONSTS from "../../consts";
import StafCard from "../elements/stafCard/StafCard";
function Sneakers(){
    const[DB, setDB] = useState([]);
    const[isLoading, setLoading] = useState(false);
    const[DBAsics, setDBAsics] = useState([]);
    const[isLoadingAsics, setLoadingAsics] = useState(false);
    const[DBAdidas, setDBAdidas] = useState([]);
    const[isLoadingAdidas, setLoadingAdidas] = useState(false);
    useEffect(() => {
        try {
            fetch(CONSTS.URL + "/api/snikers/Nike", {
                method: "GET"
            }).then(res => {
                return res.json();
            }).then(({data}) => {
                setDB(data);
                setLoading(true);
                console.log(DB);
                console.log(isLoading);
            })
        } catch (error) {
            console.log(error);
        }
        

        try {
            fetch(CONSTS.URL + "/api/snikers/Asics", {
                method: "GET"
            }).then(res => {
                return res.json();
            }).then(({data}) => {
                setDBAsics(data);
                setLoadingAsics(true);
                console.log(DBAsics);
                console.log(isLoadingAsics);
            })
    
        } catch (error) {
            console.log(error);
        }

        try {
            fetch(CONSTS.URL + "/api/snikers/Adidas", {
                method: "GET"
            }).then(res => {
                return res.json();
            }).then(({data}) => {
                setDBAdidas(data);
                setLoadingAdidas(true);
                console.log(DBAdidas);
                console.log(isLoadingAdidas);
            })
        } catch (error) {
            console.log(error);
        }
    }, [])

    return(
        <div className="sneakers-container">
            <Navbar/>
            <div className="sneakers-container--block">
                <h1 className="sneakers-container--block-name">Nike</h1>
                <div className="sneakers-container--block-stuf">
                    {isLoading && (
                        DB.map(e => {
                            return(
                                <StafCard id={e.id} img={e.img} name={e.brand} disc={e.op} price={e.pryse}/>
                            )
                        })
                    )}
                </div>
            </div>
            <div className="sneakers-container--block">
                <h1 className="sneakers-container--block-name">Asics</h1>
                <div className="sneakers-container--block-stuf">
                    {isLoadingAsics && (
                        DBAsics.map(e => {
                            return(
                                <StafCard id={e.id} img={e.img} name={e.brand} disc={e.op} price={e.pryse}/>
                            )
                        })
                    )}
                </div>
            </div>
            <div className="sneakers-container--block">
                <h1 className="sneakers-container--block-name">Adidas</h1>
                <div className="sneakers-container--block-stuf">
                    {isLoadingAdidas && (
                        DBAdidas.map(e => {
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

export default Sneakers;