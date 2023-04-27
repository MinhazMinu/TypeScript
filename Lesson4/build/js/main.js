"use strict";
// Type Aliases
// Literal types
let myName;
let userName;
userName = "minhaz";
// Functions
const add = (a, b) => {
    return a + b;
};
const logMessage = (message) => {
    console.log(message);
};
logMessage("Hello World");
let subtract = function (a, b) {
    return a - b;
};
let multiply = (a, b) => {
    return a * b;
};
logMessage(multiply(2, 3));
let multiply2 = (a, b) => {
    return a * b;
};
// optional perimeter
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
// default perimeter
const sumAll = (a = 5, b, c = 2) => {
    return a + b + c;
};
console.log(sumAll(undefined, 5));
// Rest perimeter
const total = (...numbers) => {
    return numbers.reduce((prev, curr) => prev + curr);
};
logMessage(total(1, 2, 3, 4, 5));
const total2 = (a, ...numbers) => {
    return a + numbers.reduce((prev, curr) => prev + curr);
};
logMessage(total2(10, 2, 3, 4, 5));
const createError = (message) => {
    throw new Error(message);
};
const infiniteLoop = () => {
    let i = 0;
    while (true) {
        i++;
        if (i > 10)
            break;
    }
};
const numberOrString = (input) => {
    if (typeof input === "string") {
        return "string";
    }
    if (isNumber(input)) {
        return "number";
    }
    return createError("this shod never happened");
};
// custom type guard
const isNumber = (input) => {
    return typeof input === "number" ? true : false;
};
