"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
const Sorter_1 = require("./Sorter");
class CharactersCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(lIndex, rIndex) {
        return this.data[lIndex].toLowerCase() > this.data[rIndex].toLowerCase();
    }
    swap(lIndex, rIndex) {
        const characters = this.data.split('');
        const lHand = characters[lIndex];
        characters[lIndex] = characters[rIndex];
        characters[rIndex] = lHand;
        this.data = characters.join('');
    }
}
exports.CharactersCollection = CharactersCollection;
