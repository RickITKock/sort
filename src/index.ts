import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
import { NumbersCollection } from "./NumbersCollection";

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection: CharactersCollection = new CharactersCollection(
  "Xaayb"
);
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList: LinkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(3);
linkedList.add(6);
linkedList.add(1);
linkedList.add(-70);
linkedList.sort();
linkedList.print();
