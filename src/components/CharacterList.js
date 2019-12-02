import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";

export default function CharacterList() {
  const [character, setCharacter] = useState([]);
  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        setCharacter(response.data.results);
        console.log(response);
      })
      .catch(error => {
        console.error("whoops", error);
      });
  }, []);

  return (
    <section className="character-list">
      {character.map(ind => (
        <CharacterCard
          key={ind.id}
          name={ind.name}
          species={ind.species}
          status={ind.status}
          gender={ind.gender}
        />
      ))}
    </section>
  );
}