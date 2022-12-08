// a single interface - summary() function works on different objects i.e., oldCivic & drink1
interface Reportable{
    summary(): string;
}

const oldCivic = {
    name: "civic",
    year: new Date(),
    broken: true,
    summary(): string{
        return `Name: ${this.name}`
    }
}

// Code Reuse with Interfaces
const drink1 = {
    color: "brown",
    carbonated: true,
    sugar: 40,
    summary(): string{
        return `My drink has ${this.sugar} grams of sugar`
    }
}

const printSummary = (item: Reportable): void => {
    console.log(`Name: ${item.summary}`);
}

printSummary(oldCivic);
printSummary(drink1);