import React, { useEffect, useState } from "react";
import axios from "axios";
// import CharacterCard from "./CharacterCard";
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

export default function CharacterList() {

    // TODO: Add useState to track data from useEffect
    const [characters, setCharacters] = useState([]);
    const [results, setResults] = useState();
    useEffect(() => {
        // TODO: Add API Request here - must run in `useEffect`
        //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
        const getCharacters = () => {
            axios
                .get("https://rickandmortyapi.com/api/character/")
                .then(response => {
                    setCharacters(response.data.results);
                    // const submitHandler = e => {
                    //     e.preventDefault();
                    // }
                    const filtered = response.data.filter(char => {
                        return char.name.toLowerCase().indexOf(results.toLowerCase()) !== -1;
                      });
                      response.data.search(filtered);
                      console.log(filtered);
                })
                .catch(error => {
                    console.error("NOPE", error);
                });
            };
        getCharacters();
    }, [results]);


    const handleChanges = e => {
        setResults(e.target.value);
      };
      
    return (

        <Container>
            
            <form onSubmit={submitHandler}>
                <input
                onChange={handleChanges}
                type="text"
                name="character"
                id="character"
                placeholder="Search"
                />
            </form>

            <List>
                {characters.map(character => (
                    <Card  character={character} >
                        <Img src={character.image} />
                        <h3>{character.name}</h3>
                        <p>Species: {character.species}</p>
                        <p>Gender: {character.gender}</p>
                    </Card>
                ))}
            </List>

        </Container>
    )
}