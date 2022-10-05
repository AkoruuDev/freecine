import GlobalStyle from "./style/globalStyles";

import Top from "./components/Top";
import Main from "./components/Main";
import Footer from "./components/Footer";

import Films from "./components/Films";
import MovieTime from "./components/MovieTime";
import Seats from "./components/Seats";
import Order from "./components/Order";

export default function App() {
    return(
        <>
            <GlobalStyle />
            <Top />
            <Main>
                <Films />
                <MovieTime />
                <Seats />
                <Order />
            </Main>
            <Footer />
        </>
    );
}