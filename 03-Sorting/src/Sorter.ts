// interface Sortable{ // Can be sorted if this interface will be implemented
//   length: number;
//   compare(first: number, sec: number): boolean; // function with 2 entities/arguments
//   swap(first: number, sec: number): void;
// }

export abstract class Sorter {
    abstract compare(lIndex: number, rIndex: number): boolean;
    abstract swap(lIndex: number, rIndex: number): void;
    abstract length: number;

    sort(): void {
      // const length = this.collection.length; OR
      const { length } = this; //destructured
      // Nested For Loops
      for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - i - 1; j++) {
          if (this.compare(j, j+1)) {
            this.swap(j, j+1)
          }
        }
      }
    }
  }
