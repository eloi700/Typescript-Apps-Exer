import { NumbersCollection } from "./NumberCollection";

export class Sorter {

    constructor(public collection: NumbersCollection) {}

    sort(): void {
      // const length = this.collection.length; OR
      const { length } = this.collection; //destructured
      // Nested For Loops
      for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - i - 1; j++) {
          if (this.collection.compare(j, j+1)) {
            this.collection.swap(j, j+1)
          }
        }
      }
    }
  }
