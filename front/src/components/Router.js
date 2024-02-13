import "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./main/Main";
import Error from "./error/Error";
import Sneakers from "./sneakers/Sneakers";


function Router(){
    return <BrowserRouter>
    <Routes>
        <Route element={<Main/>} path="/"/>
        <Route element={<Sneakers/>} path="/sneakers"/>
        <Route element={<Error/>} path="*"/>
    </Routes>
    </BrowserRouter>
}

export default Router;