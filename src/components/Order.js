import styled from "styled-components";

export default function Order() {
    return(
        <Container>
            <Title>Pedido feito com sucesso!</Title>
            <Main>
                <Text>Filme e sessão</Text>
                <>{""}</>
                <>{""}</>
                <Text>Ingressos</Text>
                <>{"map"}</>
                <Text>Comprador</Text>
            </Main>
            <Button>Voltar pra Home</Button>
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

const Text = styled.label`
    font-size: 18px;
    font-weight: 700;
    margin: 12px 0 8px 0;
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