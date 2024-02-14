import "./SmallCard.css";

function SmallCard({id, img, name, disc, price}){
    const handDell = () =>{
        if(localStorage.getItem("stufList") != null){
            const stuf = JSON.parse(localStorage.getItem("stufList"));
            for(let i = 0; i < stuf.length; i++){
                if(id == stuf[i].id){
                    stuf.splice(i, 1);
                    break;
                }
            }
            localStorage.setItem("stufList", JSON.stringify(stuf));
        }

        if(localStorage.getItem("stufList") != null){
            const stuf = JSON.parse(localStorage.getItem("stufList"));
            let sum = 0;
            stuf.map((e) => {
                sum += e.price;
            })
            localStorage.setItem("stufSum", JSON.stringify(sum));
        } 
        document.location.reload();
    }
    return(
        <div className="smallCard-container">
            <div className="smallCard-container--img-block">
                <img className="smallCard-container--img" src={img} alt="🏐"/>
            </div>
            <h1 className="smallCard-container--name">{name} {disc}</h1>
            <div className="smallCard-container--buy">
                <p className="smallCard-container--price">{price}p</p>
                <img onClick={handDell} className="smallCard-container--buy-img" src="./icons/add.svg" alt="➕"/>
            </div>
        </div>
    )
}

export default SmallCard;