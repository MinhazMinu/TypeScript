let stringArray = ["first", "second", "third"];
let numberString = ["first", "second", 25];
let mixedArray = ["first", 35, true];

numberString = stringArray;

let emptyArray = [];

// tuples
let tuple: [string, number, boolean] = ["first", 25, true];

// Objects
let obj: object;
obj = stringArray;

type person = {
    name: string;
    age: number;
    albums: (string | number)[];
};
const exampleObj: person = {
    name: "John",
    age: 25,
    albums: ["first", "second", 25],
};

// Optional property
type person2 = {
    name: string;
    age: number;
    albums?: (string | number)[];
};
const exampleObj2: person2 = {
    name: "John",
    age: 25,
};

// Function
function printPerson(per: person) {
    console.log(per.name);
}

printPerson(exampleObj);

// interface
interface person3 {
    name: string;
    age: number;
    albums?: (string | number)[];
}
const exampleObj3: person3 = {
    name: "John",
    age: 25,
};

// Enum
enum Color {
    Red,
    Green,
    Blue,
}
let c: Color = Color.Green; // 1, because enum starts with 0
