"use strict";
// axios
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var axios_1 = require("axios");
var http = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(http)
    .then(function (response) {
    var todo = response.data;
    var id = todo.id;
    var title = todo.title;
    var completed = todo.completed;
    logTodo(id, title, completed);
});
var logTodo = function (id, title, completed) {
    console.log("The Todo with ID: ".concat(id, "\n            The title is: ").concat(title, "\n            The finished is: ").concat(completed, "\n        "));
};
// Example: Type Annotation
var words = ['red', 'yellow', 'blue'];
var result = words.reduce(function (words, word) {
    var _a;
    var foundWord = word === 'blue' ? true : false;
    return __assign(__assign({}, words), (_a = {}, _a[word] = foundWord, _a));
}, {});
console.log(result);
// Another Type Annotation Example - Variable type cannot be inferred correctly
var numbers = [-10, -1, 12];
var numbersAboveZero = numbers.reduce(function (accNumbers, number) {
    var _a;
    var answer = number > 0 ? true : false;
    return __assign(__assign({}, accNumbers), (_a = {}, _a[number] = answer, _a));
}, []);
console.log(numbersAboveZero);
