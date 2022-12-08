const drink = {
    color: "brown",
    carbonated: true,
    sugar: 40
}
// An alternative to repeatedly writing below is using type alias
type  Drink = [string, boolean, number];

// const pepsi: [string, boolean, number] = ["brown", true, 40];
const pepsi: Drink = ["brown", true, 40];
const sprite: Drink = ["clear", true, 40];
const tea: Drink = ["green", false, 0];
// pepsi, sprite, tea are not plain arrays but a tuple that represents a very specific record inside the application

// Care about Tuples??
const carSpecs: [number, number] = [400, 3354]

// It is meaningful to work with an object / model a record with keys and values than making it in tuple
const carStats = {
    horsepower: 400,
    weight: 3354
}