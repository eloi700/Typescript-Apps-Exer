const carMakers = ["ford", "toyota", "bmw"];
// Or need to be annotated if initialize empty array
const carMakers1: string[] = [];
const carsByMake = [
    ["f150"],
    ["corolla"],
    ["camaro"],
]
// Or annotated if initialize empty
const carsByMake1: string[][] = []

// Example - Help with Inference when extracting Values
const car = carMakers[0];
const myCar = carMakers.pop();

// Example - prevent incompatible values
carMakers.push(100); //shows error as it should be type string

// Example - help with "map"
carMakers.map((car: string): string =>{
    return car.toUpperCase();
});

// Example - Flexible Types - Multiples types in array
const importantDates:(string | Date)[] = [new Date()];
importantDates.push("2030-10-10");
importantDates.push(new Date());



