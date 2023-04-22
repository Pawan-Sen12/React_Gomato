
import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from "./screens/Home";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import { CartProvider } from "./Components/ContextReducer";

const App = ()=>{
    return(
        <CartProvider>
        <BrowserRouter>

        <div>
            <Routes>
                <Route path="/" element = {<Home/>}/>
                <Route path="/login" element = {<Login/>}/>
                <Route path = '/signup' element = {<SignUp/>}/>

                
            </Routes>
        </div>
         
        </BrowserRouter>
        </CartProvider>
    )
}

export default App;