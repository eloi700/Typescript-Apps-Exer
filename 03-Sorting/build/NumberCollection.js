"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
const Sorter_1 = require("./Sorter");
class NumbersCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    // Method for Length & Setup to call the length
    // Using Accessor or a Getter
    get length() {
        return this.data.length;
    }
    // Method Collection for Compare()
    compare(lIndex, rIndex) {
        return this.data[lIndex] > this.data[rIndex];
    }
    // Method Collection for Swap()
    swap(lIndex, rIndex) {
        const lHand = this.data[lIndex];
        this.data[lIndex] = this.data[rIndex];
        this.data[rIndex] = lHand;
    }
}
exports.NumbersCollection = NumbersCollection;
