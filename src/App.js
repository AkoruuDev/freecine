import GlobalStyle from "./style/globalStyles";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Top from "./components/Top";
import Main from "./components/Main";
import Footer from "./components/Footer";

import Films from "./components/Films";
import MovieTime from "./components/MovieTime";
import Seats from "./components/Seats";
import Order from "./components/Order";

export default function App() {
    return(
        <BrowserRouter>
            <GlobalStyle />
            <Top />
            <Main>
                <Routes>
                    <Route path="/" element={<Films />} />
                    <Route path="/sessoes/:movieID" element={<MovieTime />} />
                    <Route path="/assentos/:sessionID" element={<Seats />} />
                    <Route path="/sucesso" element={<Order />} />
                </Routes>
            </Main>
            <Footer />
        </BrowserRouter>
    );
}