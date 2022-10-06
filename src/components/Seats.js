import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSeats } from "../services/Axios";

export default function Seats() {
    const [mySeats, setMySeats] = useState([])

    const { sessionID } = useParams();

    console.log(mySeats);
    useEffect(() => {
        getSeats(sessionID)
        .then(res => {
            setMySeats(res.data.seats)
        })
        .catch(() => console.log("Deu ruim"))
    }, [])
    
    return(
        <div>
            <h1>Selecione o(s) assento(s)</h1>
            <div>{mySeats.map(e => <span>{e.name}</span>)}</div>
            <div>
                <div>
                    <div></div>
                    <p>Selecionado</p>
                </div>
                <div>
                    <div></div>
                    <p>Disponível</p>
                </div>
                <div>
                    <div></div>
                    <p>Indisponível</p>
                </div>
                <form>
                    <label htmlFor="inName">Nome do comprador</label>
                    <input type="text" id="inName" name="inName" placeholder="ex: Maria de Lurdes" />
                    <label htmlFor="inCPF">CPF do comprador</label>
                    <input type="text" id="inCPF" name="inCPF" placeholder="ex: 12345678900" />
                </form>
            </div>
        </div>
    );
}