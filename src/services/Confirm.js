// request >> showConfirm("Title", "Your message here", func, true);

import { useState } from "react";
import styled from "styled-components";

export default function ShowConfirm({ title, message, action, cancel, showConfirm, setShowConfirm }) {
	return (
		<>
				{showConfirm ? (
					<Container>
							<Title>{title}</Title>
							<Message>{message}</Message>
							<Confirm>
								<Button onClick={() => {
									action(false)
									setShowConfirm(false)
								}}>Confirm</Button>
								{cancel ?
									<Button onClick={() => setShowConfirm(false)}>Cancel</Button> :
									""}
							</Confirm>
					</Container>
				) : (
					""
				)}
		</>
	)
}

const Container = styled.div`
    width: 80vw;
    padding: 25px;
    border-radius: 18px;
    background-color: #dadada;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    position: fixed;
    top: 25vh;
`;

const Title = styled.h1`
	font-size: 16px;
	font-weight: 700;
`;

const Message = styled.p`
	font-size: 14px;
	margin: 15px 0 25px;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

const Confirm = styled.div`
	width: 70%;
	
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Button = styled.div`
	width: 100%;
	margin: 0 15px;
	height: 50px;
	border-radius: 12px;
	background-color: #F7F5BC;

    display: flex;
    justify-content: center;
    align-items: center;

	&:hover {
		cursor: pointer;
		box-shadow: 0 4px 10px 4px gray;
	}
`;