import { Sorter } from "./Sorter";

export class CharactersCollection extends Sorter{

  constructor(public data: string) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(lIndex: number, rIndex: number): boolean {
    return this.data[lIndex].toLowerCase() > this.data[rIndex].toLowerCase();
  }

  swap(lIndex: number, rIndex:number): void{
    const characters = this.data.split('');

    const lHand = characters[lIndex];
    characters[lIndex] = characters[rIndex];
    characters[rIndex] = lHand;

    this.data = characters.join('');
  }
}
