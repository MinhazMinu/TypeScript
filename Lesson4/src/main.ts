// Type Aliases

type StringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Guitarist = {
    name?: string;
    active: boolean;
    albums: stringOrNumberArray;
};

type userID = StringOrNumber;

// Literal types
let myName: "minhaz";

let userName: "minhaz" | "sakib" | "mashrafi";
userName = "minhaz";

// Functions

const add = (a: number, b: number): number => {
    return a + b;
};

const logMessage = (message: any): void => {
    console.log(message);
};

logMessage("Hello World");

let subtract = function (a: number, b: number): number {
    return a - b;
};

type mathFunction = (a: number, b: number) => number;

let multiply: mathFunction = (a, b) => {
    return a * b;
};

logMessage(multiply(2, 3));

// Interfaces
interface mathFunction2 {
    (a: number, b: number): number;
}

let multiply2: mathFunction2 = (a, b) => {
    return a * b;
};

// optional perimeter

const addAll = (a: number, b: number, c?: number): number => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};

// default perimeter
const sumAll = (a: number = 5, b: number, c: number = 2): number => {
    return a + b + c;
};

console.log(sumAll(undefined, 5));

// Rest perimeter

const total = (...numbers: number[]): number => {
    return numbers.reduce((prev, curr) => prev + curr);
};

logMessage(total(1, 2, 3, 4, 5));

const total2 = (a: number, ...numbers: number[]): number => {
    return a + numbers.reduce((prev, curr) => prev + curr);
};

logMessage(total2(10, 2, 3, 4, 5));

const createError = (message: string): never => {
    throw new Error(message);
};

const infiniteLoop = () => {
    let i: number = 0;
    while (true) {
        i++;
        if (i > 10) break;
    }
};

const numberOrString = (input: number | string): string => {
    if (typeof input === "string") {
        return "string";
    }
    if (isNumber(input)) {
        return "number";
    }
    return createError("this shod never happened");
};
// custom type guard
const isNumber = (input: any): boolean => {
    return typeof input === "number" ? true : false;
};
