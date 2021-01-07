interface Character {
  name: string;
  mass: number;
  height: number;
  films: string[];
  homeworld: string;

  greet: () => void;
}

export default Character;
