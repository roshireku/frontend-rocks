import {Card} from "../../component/Grind/card"
export const RootRoute=() => {
  return <div 
  className="flex flex-wrap space-x-4"
  >{data.map((item) => <Card
    key={item.id} 
    id={item.id}
    name={item.name} 
    image={item.image}
    types={item.types}
    />)}</div>};
const data = [
  {
    id: 1,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    name: "Bulbasaur",
    types: ["grass", "poison"],
  },
  {
    id: 4,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    name: "Charmander",
    types: ["fire"],
  },
  {
    id: 7,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    name: "Squirtle",
    types: ["water"],
  },
  {
    id: 10,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png",
    name: "Caterpie",
    types: ["bug"],
  },
  {
    id: 25,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    name: "Pikachu",
    types: ["electric"],
  },
  {
    id: 74,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/74.png",
    name: "Geodude",
    types: ["rock", "ground"],
  },
];