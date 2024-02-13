import "./StafCard.css";

function StafCard({id, img, name, disc, price}){
    return(
        <div className="stafCard-container">
            <div className="stafCard-container--img-block">
                <img className="stafCard-container--img" src={img}/>
            </div>
            <h1 className="stafCard-container--name">{name} {disc}</h1>
            <div className="stafCard-container--buy">
                <p className="stafCard-container--price">{price}p</p>
                <img className="stafCard-container--buy-img" src="./icons/add.svg"/>
            </div>
        </div>
    )
}

export default StafCard;