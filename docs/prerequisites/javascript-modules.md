---
sidebar_position: 1
tags:
- foundations
- prerequisites
- javascript
- js
---

# JavaScript Modules

Node.js will treat `.cjs` files as CommonJS modules and `.mjs` files as ECMAScript modules. 
It will treat `.js` files as whatever the default module system for the project is (which is CommonJS unless package.json defines `"type": "module"`) [3].

In context of Node.js we can assume [2]:   
> Calling `require()` always use the **CommonJS** module loader.  
> Calling `import()` always use the **ECMAScript** module loader.


## CommonJS Modules
CommonJS modules are the original way to package JavaScript code for Node.js [2].

Usage example:
```js
const circle = require('./circle.js');
console.log(`The area of a circle of radius 4 is ${circle.area(4)}`);
```

```js title="circle.cjs or circle.js"
const { PI } = Math;
exports.area = (r) => PI * r ** 2;
exports.circumference = (r) => 2 * PI * r;
```

Usage example:
```js
const Circle = require('./circle-class.js');
const myCircle = new Circle(4)
console.log(`The area of a circle of radius 4 is ${circle.area(4)}`);
```

```js title="circle-class.cjs or circle-class.js"
const {PI} = Math;
// Assigning to exports will not modify module, must use module.exports
module.exports = class Circle {
    constructor(r) {
        this.r = r;
    }

    area() {
        return PI * this.r ** 2;
    }

    circumference() {
        return 2 * PI * this.r;
    }
};
```

## ECMAScript Modules
ECMAScript modules are the official standard format [1] to package JavaScript code for reuse. 
Modules are defined using a variety of import and export statements.

```js title="addTwo.mjs or addTwo.js"
function addTwo(num) {
    return num + 2;
}

export {addTwo}
```

Usage example:
```js
import {addTwo} from './addTwo.js';

console.log(addTwo(4)); // Prints: 6
```

---

## Reading List
- Other Module Definitions
  - Asynchronous Module Definition (AMD) https://github.com/amdjs/amdjs-api/blob/a731da21e218b44d16182683a829b376f336ffbd/AMD.md _(2023.04.19)_  
    > Today it is mostly obsolete. You may encounter AMD modules when you maintain older projects optimized for Internet Explorer 6.
  - Universal Module Definition (UMD) https://github.com/umdjs/umd _(2023.04.19)_


#### Sources
1. https://tc39.es/ecma262/#sec-modules _(2023.04.19)_
2. https://nodejs.org/api/modules.html _(2023.04.19)_
3. https://stackoverflow.com/a/57492606/5842853 _(2023.04.19)_
