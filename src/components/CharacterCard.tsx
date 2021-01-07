import React from "react";
import Character from "../interfaces/Character";

type CharacterCardProps = {
  character: Character;
};

const CharacterCard = (props: CharacterCardProps) => {
  return (
    <div className="card">
      <div className="card-inner">
        <h1>{props.character.name}</h1>
        <p>
          <b>Height:</b> {props.character.height}cm
        </p>
        <p>
          <b>Mass:</b> {props.character.mass}kg
        </p>
        <p>
          <b>Homeworld:</b> {props.character.homeworld}
        </p>
        <b>Films:</b>
        <ul>
          {props.character.films.map((film, index) => (
            <li key={index}>{film}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CharacterCard;
