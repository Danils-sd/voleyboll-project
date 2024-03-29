import "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./main/Main";
import Error from "./error/Error";
import Sneakers from "./sneakers/Sneakers";
import Balls from "./balls/Balls";
import Korz from "./korz/Korz";
import ZakForm from "./zakForm/ZakForm";
import AdminAuth from "./admim/adminAuth/AdminAuth";


function Router(){
    return <BrowserRouter>
    <Routes>
        <Route element={<Main/>} path="/"/>
        <Route element={<Sneakers/>} path="/sneakers"/>
        <Route element={<Balls/>} path="/balls"/>
        <Route element={<Korz/>} path="/korz"/>
        <Route element={<ZakForm/>} path="/form"/>
        <Route element={<AdminAuth/>} path="/admin-auth"/>
        <Route element={<Error/>} path="*"/>
    </Routes>
    </BrowserRouter>
}

export default Router;