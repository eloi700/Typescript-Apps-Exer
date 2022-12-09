"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const NumberCollection_1 = require("./NumberCollection");
const numbersCollection = new NumberCollection_1.NumbersCollection([15, 58, -1, 0]);
const sorter = new Sorter_1.Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
