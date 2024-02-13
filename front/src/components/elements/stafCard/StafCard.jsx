import "./StafCard.css";

function StafCard({id, img, name, disc, price}){
    const handAdd = () =>{
        if(localStorage.getItem("stufList") != null){
            const stuf = JSON.parse(localStorage.getItem("stufList"));
            stuf.push(id);
            localStorage.setItem("stufList", JSON.stringify(stuf));
        } else {
            const stuf = [];
            stuf.push(id);
            localStorage.setItem("stufList", JSON.stringify(stuf));
        }
    }
    return(
        <div className="stafCard-container">
            <div className="stafCard-container--img-block">
                <img className="stafCard-container--img" src={img}/>
            </div>
            <h1 className="stafCard-container--name">{name} {disc}</h1>
            <div className="stafCard-container--buy">
                <p className="stafCard-container--price">{price}p</p>
                <img onClick={handAdd} className="stafCard-container--buy-img" src="./icons/add.svg"/>
            </div>
        </div>
    )
}

export default StafCard;