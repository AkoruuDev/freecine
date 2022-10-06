import { useEffect, useState } from "react";
import styled from "styled-components";
import { getMovies } from "../services/Axios";

export default function Films() {
    const [folders, setFolders] = useState([]);

    useEffect(() => {
        getMovies()
            .then(res => {
                setFolders(res.data)
            })
            .catch(() => console.log("deu ruim"))
    }, [])

    console.log(folders)
    return(
        <Container>
            {folders?.map(folder => <Image key={folder.id} src={folder.posterURL} />)}
        </Container>
    );
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    padding-top: 110px;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

    overflow-y: auto;
    &::-webkit-scrollbar {
        display: none;
    }
`

const Image = styled.img`
    height: 209px;
    margin: 8px 15px;
    padding: 8px;
    background-color: #fafafa;
    border-radius: 2px;

    &:hover {
        cursor: pointer;
        box-shadow: 0 4px 10px 4px gray;
    }
`