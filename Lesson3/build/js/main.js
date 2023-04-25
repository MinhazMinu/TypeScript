"use strict";
let stringArray = ["first", "second", "third"];
let numberString = ["first", "second", 25];
let mixedArray = ["first", 35, true];
numberString = stringArray;
let emptyArray = [];
// tuples
let tuple = ["first", 25, true];
// Objects
let obj;
obj = stringArray;
const exampleObj = {
    name: "John",
    age: 25,
    albums: ["first", "second", 25],
};
const exampleObj2 = {
    name: "John",
    age: 25,
};
// Function
function printPerson(per) {
    console.log(per.name);
}
printPerson(exampleObj);
const exampleObj3 = {
    name: "John",
    age: 25,
};
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let c = Color.Green; // 1, because enum starts with 0
