import { useState } from "react";
import "./AdminAuth.css";
import CONSTS from "../../../consts";
import AdminMain from "../adminMain/AdminMain";

function AdminAuth(){
    const [login, setLogin] = useState("");
    const [isLogin, setIsLogin] = useState(false);
    const [password, setPassword] = useState("");
    const [stuf, setStuf] = useState([])
    const handLogin = (e) => {
        setLogin(e.target.value)
    }
    const handPassword = (e) => {
        setPassword(e.target.value)
    }
    const loginBack = () => {
        try{
            fetch(CONSTS.URL + `/api/admin-auth/${login}/${password}`, {
                method: "GET"
            }).then(res => {
                return res.json()
            }).then(({data}) => {
                if(data.res){
                    setStuf(data.content.stuf)
                    console.log(data.content.stuf);
                    setIsLogin(true);
                } else {
                    alert("Неверный логин или пароль");
                }
            })
        } catch(error) {
            console.log(error)
        }
    }
    return(
        <div className="adminAuth-container">
            {!isLogin && (
                <div className="adminAuth-container-card">
                    <h1 className="adminAuth-container-card--ab">Админ панель</h1>
                    <input value={login} onChange={e => handLogin(e)} className="adminAuth-container-card--inp" placeholder="Введите логин"/>
                    <input value={password} onChange={e => handPassword(e)} className="adminAuth-container-card--inp" placeholder="Введите пароль"/>
                    <button onClick={loginBack} className="adminAuth-container-card--btn">Продолжить</button>
                </div>
            )}
            {isLogin && (
                <AdminMain stuf={stuf}/>
            )}
        </div>
    )
}

export default AdminAuth;