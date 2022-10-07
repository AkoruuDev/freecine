import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getSeats } from "../services/Axios";
import ShowAlert from "../services/Alert";
import ShowConfirm from "../services/Confirm";

function Seat({ e }) {
    const [showAlert, setShowAlert] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [select, setSelect] = useState(false);

    return(
        <>
            {!e.isAvailable ?
                <Unavailable onClick={() => setShowAlert(true)}>{e.name}</Unavailable> :
                select ?
                    <Selected onClick={() => setShowConfirm(true)}>{e.name}</Selected> :
                    <Available onClick={() => setSelect(true)}>{e.name}</Available>
                    
            }
            <ShowAlert
                message={"Este assento não está disponível"}
                show={showAlert}
                setShow={setShowAlert}
            />
            <ShowConfirm
                title={"Remover assento?"}
                message={`Você está prestes a remover o assento ${e.name}, tem certeza?`}
                action={setSelect}
                cancel={true}
                showConfirm={showConfirm}
                setShowConfirm={setShowConfirm}
            />
        </>
    )
}

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
        <Container>
            <Title>Selecione o(s) assento(s)</Title>
            <Box>{mySeats.map(e => <Seat key={e.id} e={e} />)}</Box>
            <Subtitle>
                <SubtitleInfo>
                    <Green></Green>
                    <p>Selecionado</p>
                </SubtitleInfo>
                <SubtitleInfo>
                    <Gray></Gray>
                    <p>Disponível</p>
                </SubtitleInfo>
                <SubtitleInfo>
                    <Yellow></Yellow>
                    <p>Indisponível</p>
                </SubtitleInfo>
            </Subtitle>

            <Form>
                <Text htmlFor="inName">Nome do comprador</Text>
                <Input type="text" id="inName" name="inName" placeholder="ex: Maria de Lurdes" />
                <Text htmlFor="inCPF">CPF do comprador</Text>
                <Input type="text" id="inCPF" name="inCPF" placeholder="ex: 12345678900" />
            </Form>

            <Button>Reservar assento(s)</Button>
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
    width: 70vw;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`

const Subtitle = styled.div`
    width: 80vw;
    margin: 8px 0;

    display: flex;
    justify-content: space-between;
`

const SubtitleInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Bool = styled.div`
    width: 22px;
    height: 22px;
    border-radius: 50%;
    margin: 4px;
    font-size: 10px;

    display: flex;
    justify-content: center;
    align-items: center;
`

const Available = styled(Bool)`
    background-color: #C3CFD9;
    border: #7B8B99;

    &:hover {
        cursor: pointer;
        background-color: #D4D0EA;
        border: #8C9CAA;
    }
`

const Selected = styled(Bool)`
    background-color: #1AAE9E;
    border: #0E7D71;

&:hover {
    cursor: pointer;
    background-color: #3CC0AF;
    border: #209F93;
}
`

const Unavailable = styled(Bool)`
    background-color: #FBE192;
    border: #F7C52B;
`

const Gray = styled(Bool)`
    background-color: #C3CFD9;
    border: #7B8B99;
`

const Green = styled(Bool)`
    background-color: #1AAE9E;
    border: #0E7D71;
`

const Yellow = styled(Bool)`
    background-color: #FBE192;
    border: #F7C52B;
`

const Form = styled.form`
    width: 80vw;

    display: flex;
    flex-direction: column;
`

const Text = styled.label`
    font-size: 18px;
    font-weight: 700;
    margin: 12px 0 8px 0;
`

const Input = styled.input`
    width: 100%;
    height: 32px;
    padding-left: 8px;
    border-radius: 5px;
    border: 1px solid gray;

    &::placeholder {
        font-style: italic;
        color: gray;
    }
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