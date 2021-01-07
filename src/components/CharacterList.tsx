import React, { useState, useEffect } from "react";
import axios from "../axios";

import Character from "../interfaces/Character";
import CharacterCard from "./CharacterCard";

const CharacterList = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  //Fetches star wars character data from swapi and stores them in useState-hook
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get("people");
      setCharacters(createCharacterArray(request.data.results as any));
    }
    fetchData();
  });

  //Creates and returns an array of star wars caracters from data attribute fetched from swapi
  const createCharacterArray = (data: any[]): Character[] => {
    var characterArray: Character[] = [];

    for (var i = 0; i < data.length; i++) {
      characterArray.push(createCharacter(data[i]));
    }
    return characterArray;
  };

  //Creates and returns single character from data fetched from swapi
  const createCharacter = (data: any): Character => {
    return {
      name: data.name,
      mass: data.mass,
      height: data.height,
      films: data.films,
      homeworld: data.homeworld,
    } as Character;
  };

  return (
    <div className="card-grid">
      {characters.map((character, index) => (
        <CharacterCard key={index} character={character} />
      ))}
    </div>
  );
};

export default CharacterList;
