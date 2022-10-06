import { useState } from "react";
import styled from "styled-components";

export default function Footer({ folder, movieName, session }) {
    return(
        <Container>
            {folder === "" ? "" : (
                <>
                    <Image src={folder} alt='folder' />
                    <Info>
                        <Text>{movieName}</Text>
                        <Text>{session}</Text>
                    </Info>
                </>
            )}
        </Container>
    );
}

const Container = styled.div`
    width: 100vw;
    background-color: #C5C5C5;

    display: flex;
    align-items: center;

    position: fixed;
    bottom: 0;
    z-index: 1;
`;

const Image = styled.img`
    height: 100px;
    margin: 8px 15px;
    padding: 8px;
    background-color: #fafafa;
    border-radius: 2px;
`;

const Info = styled.div`
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

const Text = styled.p`
    font-size: 20px;
    font-weight: 400;
`;