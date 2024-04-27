import styled, { createGlobalStyle } from 'styled-components';
import NavBar from "./NavBar.jsx";
import Homepage from "./Homepage.jsx";
import API from "./API.jsx";
import AboutUs from "./AboutUs.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Calculator from "./simon-components/Calculator.jsx"

//Global styling for the website
const GlobalStyle = createGlobalStyle`
    body {
        color: black;
        font-family: Arial , sans-serif;
        margin: 0;
        box-sizing: border-box;
    }
`;

export default function App() {
    return (
        <>

            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route path='/' element={<Homepage/>} />
                    <Route path='/about-us' element={<AboutUs/>}/>
                    <Route path='/calculator' element={<Calculator/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

