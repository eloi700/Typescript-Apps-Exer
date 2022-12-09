import { NumbersCollection } from "./NumberCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const charactersCollection = new CharactersCollection("saAklMS");
charactersCollection.sort();
console.log(charactersCollection.data);

const numbersCollection = new NumbersCollection([15, 58, -1, 0])
numbersCollection.sort();
console.log(numbersCollection.data);

const linkedList = new LinkedList()
linkedList.add(500);
linkedList.add(-80);
linkedList.add(150);
linkedList.add(37);
linkedList.add(0);
linkedList.add(-11);
linkedList.add(68);

linkedList.sort();
linkedList.print();
