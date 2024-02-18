import { useState, useEffect } from "react";
import Futter from "../elements/fotter/Futter";
import Navbar from "../elements/nav/Navbar";
import "./ZakForm.css";
import CONSTS from "../../consts";

function ZakForm(){
    const [stuf, setStuf] = useState([])
    const [isGet, setGet] = useState(false)

    const [finalPrice, setFinalPrice] = useState(0);

    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [numberError, setNumberError] = useState(false);
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);

    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
    }
    
    const validateNumber = (number) => {
        return String(number).match(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/);
    }

    const handName = (e) => {
        setName(e.target.value);
    }

    const handNumber = (e) => {
        setNumber(e.target.value);
        if(validateNumber(e.target.value)){
            setNumberError(true);
        } else {
            setNumberError(false);
        }
    }

    const handEmail = (e) => {
        setEmail(e.target.value);
        if(validateEmail(e.target.value)){
            setEmailError(true);
          } else {
            setEmailError(false);
          }
    }
    useEffect(() => {
        if(localStorage.getItem("stufList") != null){
            setStuf(JSON.parse(localStorage.getItem("stufList")));
        }
        
        if(localStorage.getItem("stufSum") != null){
            setFinalPrice(JSON.parse(localStorage.getItem("stufSum")));
        }

        setGet(true);
    }, [])

    const sendForm = () => {
        if(name.length == 0){
            alert("Имя не может быть пустым");
        } else if (!numberError){
            alert("Телефон введен неверно");
        } else if (!emailError) {
            alert("Неверный формат почты");
        } else {
            const dateNew = new Date();
            const date = dateNew.getDay() + "/" + dateNew.getMonth() + "/" + dateNew.getFullYear();
            const myData = {
                id: 0,
                date: date,
                name: name,
                number: number,
                email: email,
                stuf: stuf
            }
            try{
                fetch(CONSTS.URL + "/api/zak", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(myData)
                }).then(res => {
                    return res.json()
                }).then(({body}) => {
                    alert(`Номер вашего заказа:\n\n${body}\n\nКонтактный номер: 89265595745`);
                })
            } catch (error) {
                console.log(error);
                alert("Произошла ошибка, попробуйте еще раз");
            }
        }
    }
    return(
        <div className="zakForm-container">
            <Navbar/>
            <div className="zakForm-container-content">
                <div className="zakForm-container-content-left">
                    <div className="zakForm-container-content-left-left">
                        <input value={name} onChange={e => handName(e)} className="zakForm-container-content-left-left-inp" placeholder="Имя"/>
                        <input value={number} onChange={e => handNumber(e)} className="zakForm-container-content-left-left-inp" placeholder="Номер телефона"/>
                        <input value={email} onChange={e => handEmail(e)} type="email" className="zakForm-container-content-left-left-inp" placeholder="Почта"/>
                    </div>
                    <div className="zakForm-container-content-left-right">
                        <span className="zakForm-container-content-left-right-final">{finalPrice}p</span>
                        <button onClick={sendForm} className="zakForm-container-content-left-right-button">Заказать</button>
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