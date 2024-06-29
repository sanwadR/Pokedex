// let pokeType;
// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//   .then((Response) => Response.json())
//   //.then((data) => console.log(data.types[0].type.name));
//   .then((data) => {
//     console.log(data.types[0].type.name);
//     console.log(data);
//     pokeType = data.types[0].type.name;
//     const element = document.querySelector("#Pokemon");
//     element.innerHTML = `<h1>The Pokemon Type is : ${pokeType}</h1>`;
//     let image = element.querySelector("#pokemonImage");
//     let newSrc =
//       "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png";
//     image.src = newSrc;
//   });

// //   if(!Response.ok){
// //     throw new Error("Invalid Name")
// //   }

// let pokeType;
// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data.types[0].type.name);
//     console.log(data);
//     pokeType = data.types[0].type.name;
//     const element = document.querySelector("#Pokemon");
//     element.innerHTML = `<h1>The Pokemon Type is : ${pokeType}</h1>`;
//     let image = document.querySelector("#pokemonImage"); // Ensure to use document.querySelector here
//     let newSrc =
//       "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png";
//     image.src = newSrc;
//   })
//   .catch((error) => console.error("Error fetching data:", error));

function DisplayPokemon() {
  let pokemonName = document.querySelector("#MyInput").value;
  console.log(pokemonName);
  let pokeType;
  let URL = "https://pokeapi.co/api/v2/pokemon/pikachu";
  const NewURL = `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`;

  fetch(NewURL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.types[0].type.name);
      console.log(data);
      pokeType = data.types[0].type.name;
      const element = document.querySelector("#Pokemon");
      element.innerHTML = `<h2>The Pokemon Type is : ${capitalizeFirstLetter(
        pokeType
      )}</h2>`;

      let id = data.id;
      let image = document.querySelector("#pokemonImage"); // Ensure to use document.querySelector here
      let newSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
      image.src = newSrc;
    })
    .catch((error) => console.error("Error fetching data:", error));
}
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
