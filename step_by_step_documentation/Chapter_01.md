###### Installation TypeScript

```sh
npm i typescript -g
```

-   Create a main.ts file
-   Compile the file with the command:

```sh
tsc main.ts main.js
```

-   Run the file with the command:

```sh
node main.js
```

-   Or connect main.js file to the html file:

```html
<script src="main.js"></script>
```

-   to keep watching the file and compile it automatically use the command:

```sh
tsc --watch main.ts main.js
```

-   Lets create folder structure for our project:

    -   Lesson_01
        -   src
            -   main.ts
        -   build
            -   main.js
        -   index.html
        -   tsconfig.json

*   To create tsconfig.json file use the command:

```sh
tsc --init
```

-   in tsconfig.json file in rootDir and outDir change the path to src and build respectively

```json
"rootDir": "./src"
"outDir": "./build/js"
```

-   now to watch the file use the command:

```sh
tsc --watch
```

-   Here in _"target": "es2016"_ we can change the version of javascript to compile to.

*   To ignore any .ts file that is not in src directory, we can change the _"include"_ property in tsconfig.json file. in bottom of the file

```json
       /* Completeness */
        // "skipDefaultLibCheck": true,                      /* Skip type checking .d.ts files that are included with TypeScript. */
        "skipLibCheck": true /* Skip type checking all .d.ts files. */
    },
    "include": ["src"]
}
```
