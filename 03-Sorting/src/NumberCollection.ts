import { Sorter } from "./Sorter";

export class NumbersCollection extends Sorter {

    constructor(public data: number[]) {
        super();
     }

    // Method for Length & Setup to call the length
    // Using Accessor or a Getter
    get length(): number{
        return this.data.length;
    }

    // Method Collection for Compare()
    compare(lIndex: number, rIndex: number): boolean{
        return this.data[lIndex] > this.data[rIndex];
    }

    // Method Collection for Swap()
    swap(lIndex: number, rIndex: number): void{
        const lHand = this.data[lIndex];
        this.data[lIndex] = this.data[rIndex];
        this.data[rIndex] = lHand;
    }
}