# Transverse Nested

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

**Get nested properties from your objects** ✨

Transverse nested properties of your object. Can return an individual property (leaf), or a section of the object (node).


# Installation
Run `npm i transverse-nested` or `yarn add transverse-nested`

# Usage

The transverse-nested module exports a single default function, that takes the object to be transversed, and a string of properties to transverse (the path to be transversed by the function).

Example

```javascript
const transverse = require("transverse-nested") 
// Or 'import transverse from "transverse-nested"' if es6+

const obj = {
  data: {
    user: {
      details: {
        name: John Doe",
        email: "john.doe@mail.com"
      }
    }
  }
}

const name = transverse(obj, "data.user.details.name")

//You can even use destructuring

const { name: otherName, email } = transverse(obj, "data.user.details")

```

# Development

* **ES6/ESNext** - Write _ES6_ code and _Babel_ will transpile it to ES5 for backwards compatibility
* **Test** - _Mocha_ with _Istanbul_ coverage
* **Lint** - Preconfigured _ESlint_ with _Airbnb_ config
* **CI** - _TravisCI_ configuration setup
* **Minify** - Built code will be minified for performance

# Development Commands
- `npm run clean` - Remove `lib/` directory
- `npm test` - Run tests with linting and coverage results.
- `npm test:only` - Run tests without linting or coverage.
- `npm test:watch` - You can even re-run tests on file changes!
- `npm test:prod` - Run tests with minified code.
- `npm run test:examples` - Test written examples on pure JS for better understanding module usage.
- `npm run lint` - Run ESlint with airbnb-config
- `npm run cover` - Get coverage report for your code.
- `npm run build` - Babel will transpile ES6 => ES5 and minify the code.
- `npm run prepublish` - Hook for npm. Do all the checks before publishing your module.

# License

MIT © Nelson Mbau
