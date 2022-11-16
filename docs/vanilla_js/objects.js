// let animal = {key : value, key : value, key : value};
let animal = { name: "gucci", species: "cat" };

console.log(animal.name);
console.log();

// animal["species"];
// ("cat");

let animal_keys = Object.keys(animal);
for (let key of animal_keys) {
  console.log(`${key} : ${animal[key]}`); // animal['name'], animal['species']
}

console.log();

const animals_obj = [
  animal,
  { name: "cat", species: "feline" },
  { name: "bird", species: "avian" },
  { name: "fish", species: "aquatic" },
  { name: "lizard", species: "reptile" },
];
