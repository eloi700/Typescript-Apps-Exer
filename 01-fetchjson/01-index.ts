// axios

import axios from 'axios';

const http = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(http)
    .then((response)=>{
        const todo=response.data as Todo

        const id = todo.id;
        const title = todo.title;
        const completed = todo.completed;

        logTodo(id, title, completed)

    })

const logTodo = (id: number, title: string, completed: boolean) =>{
            console.log(
            `The Todo with ID: ${id}
            The title is: ${title}
            The finished is: ${completed}
        `);
}

// Example: Type Annotation
let words: string[] = ['red', 'yellow', 'blue'];
const result: Record<string, boolean> = words.reduce((words: Record<string, boolean>, word: string) => {
  const foundWord = word === 'blue' ? true : false;
  return {
    ...words,
    [word]: foundWord,
  };
}, {});

console.log(result);
// { red: false, yellow: false, blue: true }

// Another Type Annotation Example - Variable type cannot be inferred correctly
let numbers: number[] = [-10, -1, 12];
const numbersAboveZero: Record<number, boolean> = numbers.reduce((accNumbers: Record<number, boolean>, number: number) =>{
   const answer = number > 0 ? true : false
   return {
    ...accNumbers,
    [number]: answer,
   }
}, {})
console.log(numbersAboveZero)
// { '12': true, '-10': false, '-1': false }
// x: Array<number | string>