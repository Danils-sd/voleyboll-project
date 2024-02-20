import "./AdminMain.css";

function AdminMain({stuf}){
    return(
        <div className="adminMain-container">
            <h1 className="adminMain-container--ab">Понель администратора</h1>
            <div className="adminMain-container--content">
                {(
                    stuf.map(e => {
                        return(
                            <div className="adminMain-container--card">
                                <div className="adminMain-container--card-left">
                                    <span className="adminMain-container--card-left-cont">Номер заказа: {e.id}</span>
                                    <span className="adminMain-container--card-left-cont">Дата заказа: {e.date}</span>
                                    <span className="adminMain-container--card-left-cont">Имя заказчика: {e.name}</span>
                                    <span className="adminMain-container--card-left-cont">Номер заказчика: {e.number}</span>
                                    <span className="adminMain-container--card-left-cont">Почта заказчика: {e.email}</span>
                                </div>
                                <div className="adminMain-container--card-right">
                                    <h1 className="adminMain-container--card-right-ab">Товары: {e.stuf.length}</h1>
                                    {(
                                        e.stuf.map(t => {
                                            return(
                                                <span className="adminMain-container--card-right-t">id товаа: {t.id}</span>
                                            )
                                        })
                                    )}
                                </div>
                            </div>
                        )
                    })
                )}
            </div>
        </div>
    )
}

export default AdminMain;