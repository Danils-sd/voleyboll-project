import "./Label.css";

function Label(){
    return(
        <div className="label-container">
            <div className="label-container--top-content">
                <div className="label-container--top-left-content">
                    <h1 className="label-container--top-left-content--ab">Кросовки</h1>
                    <p className="label-container--top-left-content--disc">
                        Большой асортимент 
                        спортивных кроссовок для влейбола
                        состоящий только из ведущих брендов
                    </p>
                    <button className="label-container--top-left-content--btn">Перейти</button>
                </div>
                <img className="label-container--top-right-content" src="./imgs/label-kros.jpeg"/>
            </div>
            <div className="label-container--bottom-content">
                <div className="label-container--bottom-content--card">
                    <img className="label-container--bottom-content--card-ing" src=""/>
                    <h3 className="label-container--bottom-content--card-name"></h3>
                </div>
                <div className="label-container--bottom-content--card">
                    <img className="label-container--bottom-content--card-ing" src=""/>
                    <h3 className="label-container--bottom-content--card-name"></h3>
                </div>
                <div className="label-container--bottom-content--card">
                    <img className="label-container--bottom-content--card-ing" src=""/>
                    <h3 className="label-container--bottom-content--card-name"></h3>
                </div>
            </div>
        </div>
    );
}

export default Label;