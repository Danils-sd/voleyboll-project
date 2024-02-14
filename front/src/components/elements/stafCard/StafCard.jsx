import "./StafCard.css";

function StafCard({id, img, name, disc, price}){
    const handAdd = () =>{
        if(localStorage.getItem("stufList") != null){
            const stuf = JSON.parse(localStorage.getItem("stufList"));
            stuf.push(
                {
                    id: id,
                    img: img,
                    name: name,
                    disc: disc,
                    price: price
                }
            );
            localStorage.setItem("stufList", JSON.stringify(stuf));
        } else {
            const stuf = [];
            stuf.push(
                {
                    id: id,
                    img: img,
                    name: name,
                    disc: disc,
                    price: price
                }
            );
            localStorage.setItem("stufList", JSON.stringify(stuf));
        }

        if(localStorage.getItem("stufList") != null){
            const stuf = JSON.parse(localStorage.getItem("stufList"));
            let sum = 0;
            stuf.map((e) => {
                sum += e.price;
            })
            localStorage.setItem("stufSum", JSON.stringify(sum));
        } else {
            
            localStorage.setItem("stufSum", JSON.stringify(0));
        }
    }
    return(
        <div className="stafCard-container">
            <div className="stafCard-container--img-block">
                <img className="stafCard-container--img" src={img} alt="🏐"/>
            </div>
            <h1 className="stafCard-container--name">{name} {disc}</h1>
            <div className="stafCard-container--buy">
                <p className="stafCard-container--price">{price}p</p>
                <img onClick={handAdd} className="stafCard-container--buy-img" src="./icons/add.svg" alt="➕"/>
            </div>
        </div>
    )
}

export default StafCard;