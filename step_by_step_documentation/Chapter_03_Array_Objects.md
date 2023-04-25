###### Array & Object

-   ts infers the type of array and object

```ts
let stringArray = ["first", "second", "third"]; // string[]
let numberString = ["first", "second", 25]; // (string | number)[]
let mixedArray = ["first", 35, true]; // (string | number | boolean)[]
```

-   we can also explicitly specify the type of array and object

```ts
let stringArray: string[] = ["first", "second", "third"];
let numberString: (string | number)[] = ["first", "second", 25];
let mixedArray: (string | number | boolean)[] = ["first", 35, true];
```

-   we can assign array to another but the type of array should be same or compatible

```ts
stringArray = numberString; // Type '(string | number)[]' is not assignable to type 'string[]'.

numberString = stringArray; // This will work
```

-   Empty array infers to any type in ts

```ts
let emptyArray = [];
```

-   Tuple in ts

```ts
let tuple: [string, number, boolean] = ["first", 25, true];
```

-   we can assign tuple to array but can not assign array to tuple

```ts
stringArray = tuple; // This will work
tuple = stringArray; // Type 'string[]' is not assignable to type '[string, number, boolean]'.
```

-   Objects in ts

```ts
let obj: object;
```

-   we can reassign the object to an array because in JS array is also an object

```ts
obj = stringArray; // This will work
```

-   Lets create an object and anotate it

```ts
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
```

so we first crete a new type (person)_ and then we create an \_object(exampleObj)_ of that type.

-   We can also create an object without creating a new type

```ts
const exampleObj: {
    name: string;
    age: number;
    albums: (string | number)[];
} = {
    name: "John",
    age: 25,
    albums: ["first", "second", 25],
};
```

-   we can not assign a new property to an object which is not defined in the type of that object

```ts
exampleObj.address = "New York"; // Property 'address' does not exist on type '{ name: string; age: number; albums: (string | number)[]; }'.
```

-   optional property in object

```ts
type person = {
    name: string;
    age: number;
    albums?: (string | number)[];
};
const exampleObj: person = {
    name: "John",
    age: 25,
};
```

Here we have made the albums property _optional_ by adding a question mark after the property name.

-   to pass an object to a function we can do this

```ts
const exampleObj: person = {
    name: "John",
    age: 25,
};
function printPerson(per: person) {
    console.log(per.name);
}
printPerson(exampleObj);
```

-   interface in ts

```ts
interface person {
    name: string;
    age: number;
    albums?: (string | number)[];
}
const exampleObj: person = {
    name: "John",
    age: 25,
};
```

-   Enum in ts

> Enums allow us to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.

```ts
enum Color {
    Red,
    Green,
    Blue,
}
let c: Color = Color.Green; // 1, because enum starts with 0
```
