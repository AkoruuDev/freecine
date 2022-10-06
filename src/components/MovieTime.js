import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSessions } from "../services/Axios";

function Time({ time }) {
    return(
        <div>
            <>{time.weekday} - {time.date}</>
            <>{time.showtimes?.map(hour => (<div key={hour.id}>{hour.name}</div>))}</>
        </div>
    )
}

export default function MovieTime() {
    const [movieTime, setMovieTime] = useState([])

    const { movieID } = useParams();

    useEffect(() => {
        getSessions(movieID)
        .then(res => {
            console.log(res.data.days);
            setMovieTime(res.data.days);
        })
        .catch(console.log("deu ruim"));
    }, [])
    return(
        <div>
            <h1>Selecione o Horario</h1>
            <>{movieTime?.map(time => <Time key={time.id} time={time} />)}</>
        </div>
    );
}