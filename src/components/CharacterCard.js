import React from "react";
import styled from "styled-components";

const Card = styled.div`
    border: solid 2px black;
    width: 80%;
    margin: 2rem;
    padding: 2rem;
`;

const Img = styled.img`
    width: 70%;
    height: 50%;
`;

export default function CharacterCard({ character }) {
    // const { image, name, species, gender} = character;

    // return (
    //     <Card>
    //         <Img src={image} />
    //         <h3>{name}</h3>
    //         <p>Species: {species}</p>
    //         <p>Gender: {gender}</p>
    //     </Card>
    // );
}
