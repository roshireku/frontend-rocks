
export const RootRoute=() => {
  return <div 
  className="flex flex-wrap space-x-4"
  >{data.map((item) => {
    return <div className="flex-1 bg-white w-2xs p-8 items-center justify-center">
      <h3 className="text-center font-bold text-3xl text-red-400 mb-4">{item.name}</h3>
      <img src={item.image} />
      <h4 className="text-center text-3xl text-green-400 mb-2">{item.types}</h4>
      </div>
  })}</div>
};
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