import { printObject, genericFunction, genericFunctionArrow } from "../generics/generics";
import { Villain, Hero } from "../interfaces";

// printObject(123)
// printObject('123')
// printObject({ a: 1, b: 2})
// printObject([1, 2, 3])
// const name: string = 'Palomo';

// console.log(genericFunctionArrow(3.1416).toFixed(2));
// console.log(genericFunctionArrow(name).toUpperCase());
// console.log(genericFunctionArrow(new Date()).getDay());

const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Winston Wilson',
    dangerLevel: 130
}

console.log(genericFunctionArrow<Villain>(deadpool).dangerLevel);