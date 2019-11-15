import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";

const List = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 120%;
    height: 100%;
    max-width: 1000px;
    text-align: center;
`;

export default function CharacterList() {
    // searchTerm will save the data from the search input on every occurance of the change event.
    const [searchTerm, setSearchTerm] = useState("");
    
    // TODO: Add useState to track data from useEffect
    const [characters, setCharacters] = useState([]);
    useEffect(() => {
        // TODO: Add API Request here - must run in `useEffect`
        //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
        const getCharacters = () => {
            axios
                .get("https://rickandmortyapi.com/api/character/")
                .then(response => {
                    // console.log(response.data.results);
                    setCharacters(response.data.results);
                    console.log(response.data.results)
                })
                .catch(error => {
                    console.error("NOPE", error);
                });
        };
        getCharacters();
    }, []);

    return (
        <Container>
            <List>
                {characters.map(character => (
                    <CharacterCard  character={character} />
                ))}
            </List>
        </Container>
    );
}
