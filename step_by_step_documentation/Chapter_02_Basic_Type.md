###### Basic Types

-   Implementing a basic type

```ts
let myName = "minhaz";
```

Here we do not specify the type but it is automatically inferred as string

```ts
myName = 60;
```

This will give an error as we are trying to assign a number to a string

-   Explicitly specifying the type

```ts
let myName: string = "minhaz";
```

He we specify the type as string

-   types in typescript

```ts
let myName: string = "minhaz";
let age: number = 21;
let isDeveloper: boolean = true;
let anything: any = "anything";
```

-   ts function infers the return type

```ts
function add(a: number, b: number) {
    return a + b;
}
```

Here function return type is inferred as number.

```ts
function add(a: number, b: string) {
    return a + b;
}
```

Here function return type is inferred as string.

we can also explicitly specify the return type

```ts
function add(a: number, b: number): number {
    return a + b;
}
```

-   union type in ts

```ts
let id: string | number;
```

This _id_ variable can be of type string or number

-   Regular Expression type in ts

```ts
let regExp: RegExp = /minhaz/;
```
