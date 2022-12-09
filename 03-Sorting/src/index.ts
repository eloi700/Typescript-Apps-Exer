import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumberCollection";

const numbersCollection = new NumbersCollection([15, 58, -1, 0])
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
