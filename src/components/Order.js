import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Order({ seats, post, movieName, session }) {

    const navigate = useNavigate();
    return(
        <Container>
            <Title>Pedido feito com sucesso!</Title>
            <Main>
                <Text>Filme e sessão</Text>
                <h3>{movieName}</h3>
                <h3>{session.date} - {session.hour}</h3>
                <Text>Ingressos</Text>
                <div>{seats.map(seat => <div>assento {seat.name}</div>)}</div>
                <Text>Comprador</Text>
                <div>{post.name}</div>
                <div>{post.cpf}</div>
            </Main>
            <Button onClick={() => {
                navigate("/");
                document.location.reload();
            }}>Voltar pra Home</Button>
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
    color: #247A6B;
`

const Main = styled.div`
    width: 70vw;
    padding: 25px 0;

    display: flex;
    flex-direction: column;
`

const Text = styled.label`
    font-size: 18px;
    font-weight: 700;
    margin: 25px 0 8px 0;
`

const Button = styled.div`
    width: 180px;
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