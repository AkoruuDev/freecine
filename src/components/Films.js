import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getMovies } from "../services/Axios";

function Folder({ folder, setFolder, setMovieName }) {
    const navigate = useNavigate();

    return(
        <span onClick={() => {
            navigate(`/sessoes/${folder.id}`);
            setFolder(folder.posterURL);
            setMovieName(folder.title);
        }}>
            <Image src={folder.posterURL} alt="Poster"/>
        </span>
    )
}

export default function Films({ setFolder, setMovieName }) {
    const [folders, setFolders] = useState([]);

    useEffect(() => {
        getMovies()
            .then(res => {
                setFolders(res.data)
            })
            .catch(() => console.log("deu ruim"))
    }, [])

    return(
        <Container>
            {folders?.map(folder => <Folder key={folder.id} folder={folder} setFolder={setFolder} setMovieName={setMovieName}/>)}
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