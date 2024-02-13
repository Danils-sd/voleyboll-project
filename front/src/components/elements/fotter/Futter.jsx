import "./Futter.css";

function Futter(){
    const handNumber = () => {
        alert("Контактный номер:\n\n+7(926)-559-5745");
    }
    return(
        <div className="futter-container">
            <h1 className="futter-container--logo">volley<span className="futter-container--logo-second">Store</span></h1>
            {/* <h1 className="futter-container--number">+7 926 559 5745</h1> */}
            <div className="futter-container--contacts">
                <a href="https://t.me/dushni_la"><img className="futter-container--contacts-contact" src="./icons/contacts-tg.svg"/></a>
                <a href="https://vk.com/sukhanovdanila"><img className="futter-container--contacts-contact" src="./icons/contacts-wk.svg"/></a>
                <img onClick={handNumber} className="futter-container--contacts-contact futter-container-number" src="./icons/contacts-number.png"/>
            </div>
        </div>
    )
}

export default Futter;