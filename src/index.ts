import { CharactersCollection } from "./CharactersCollection";
import { Sorter } from "./Sorter";

// const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

const charactersCollection: CharactersCollection = new CharactersCollection(
  "Xaayb"
);

const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);
