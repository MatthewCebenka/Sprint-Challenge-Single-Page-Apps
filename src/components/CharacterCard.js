import React from "react";
import styled from "styled-components";

export default function CharacterCard(props) {
  const Card = styled.div`
     display: flex;
     flex-wrap: wrap;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     background-color: blue;
     margin: 5% 20%
     border-radius: 8px;
     font-weight: 600;
     font-size: 18px;
     `;

  const Header = styled.h2`
    font-size: 35px;
  `;

  return (
    <Card>
      <Header>{props.name}</Header>
      <img src={props.image} />
      <p>Species: {props.species}</p>
      <p>Status: {props.status}</p>
    </Card>
  );
}
