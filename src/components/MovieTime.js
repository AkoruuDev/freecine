import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { getSessions } from "../services/Axios";

function Time({ time, setSession }) {
    const navigate = useNavigate();

    return(
        <div>
            <Info>{time.weekday} - {time.date}</Info>
            <ButtonBox>{time.showtimes?.map(hour => (
                <Button key={hour.id}
                    onClick={() => {
                        navigate(`/assentos/${hour.id}`);
                        setSession({week: time.weekday, hour: hour.name, date: time.date})
                    }}>
                        {hour.name}
                </Button>
            ))}</ButtonBox>
        </div>
    )
}

export default function MovieTime({ setSession }) {
    const [movieTime, setMovieTime] = useState([])

    const { movieID } = useParams();

    useEffect(() => {
        getSessions(movieID)
        .then(res => {
            setMovieTime(res.data.days);
        })
        .catch();
    }, [])
    return(
        <Container>
            <Title>Selecione o Horario</Title>
            <Box>{movieTime?.map(time => <Time key={time.id} time={time} setSession={setSession} />)}</Box>
        </Container>
    );
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    padding-top: 110px;

    display: flex;
    flex-direction: column;
    align-items: center;
`

const Title = styled.h1`
    font-weight: 700;
    font-size: 26px;
    color: #293845;
`

const Box = styled.div`
    margin-top: 15px;
    width: 90vw;
    height: 60vh;

    overflow-y: auto;
    &::-webkit-scrollbar {
        display: none;
    }
`

const Info = styled.h2`
    font-size: 18px;
    margin: 10px 0px 5px 8px;
    color: #293845;
`

const ButtonBox = styled.div`
    display: flex;
`

const Button = styled.div`
    width: 100px;
    height: 30px;
    margin: 8px;
    border-radius: 5px;
    background-color: #E8833A;
    color: #FAFAFA;
    
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        cursor: pointer;
        box-shadow: 0 4px 10px 4px gray;
    }
`