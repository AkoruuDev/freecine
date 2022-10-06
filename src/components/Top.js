import styled from "styled-components";

export default function Top() {
    return(
        <Container>
            <Title><Strong>Free</Strong>cine</Title>
        </Container>
    );
}

const Container = styled.div`
    width: 100vw;
    height: 100px;
    background-color: #c5c5c5;

    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    top: 0;
    z-index: 1;
`;

const Title = styled.h1`
    color: #303030;
    font-weight: 700;
    font-size: 38px;
`;

const Strong = styled.span`
    color: #AA0011;
`;