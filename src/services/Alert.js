// request >> showAlert("Message here");

import styled from "styled-components";

export default function ShowAlert({ message, show, setShow }) {	
	setTimeout(() => setShow(false), 4000);

	return(
		<>{show ? <Container>{message}</Container> : ""}</>
	)
}

const Container = styled.div`
	width: 60vw;
	padding: 8px 10px;
	border-radius: 12px;
	background-color: #22222299;
	color: #FBFBFB;

	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;

	position: fixed;
	top: 20vh;
	left: 20vw;
	z-index: 3;
`