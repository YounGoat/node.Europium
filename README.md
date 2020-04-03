#	`europium` or `franci(um)`
__Something expected in next generation of Node.js__

[![total downloads of europium](https://img.shields.io/npm/dt/europium.svg)](https://www.npmjs.com/package/europium)
[![europium's License](https://img.shields.io/npm/l/europium.svg)](https://www.npmjs.com/package/europium)
[![latest version of europium](https://img.shields.io/npm/v/europium.svg)](https://www.npmjs.com/package/europium)

>	If links in this document not avaiable, please access [README on GitHub](./README.md) directly.

The active LTS version (v10) of Node.js is named *Dubnium*, while the previous three are named *Carbon*, *Boron* and *Argon*. All of them are names of chemical elements. So I collect some features which I expect to be implemented in future, and name this module with *Europium*.

-- UPDATE --  
Unfortunately, Node.js v12 is already released and named *Erbium*. So, I decided to rename the package to <del>*Fermium*</del> *Franci(um)*.

##	ToC

*	[Get Started](#get-started)
*	[API](#api)

##	Links

*	[CHANGE LOG](./CHANGELOG.md)
*	[Homepage](https://github.com/YounGoat/node.Erbium)

##	Get Started

```javascript
const europium = require('europium');

function meet(name, callback) {
    let feeling;
    while (!feeling) {
        feeling = talk(name);
    }
    callback(null, feeling);
}

let meetyou = europium.util.promisible(meet);
meetyou('ching').then(feeling => {
    // ...
});
```

##	API

__europium__ is made up of some sub modules. Each sub module may be accessed within namespace `europium`, or be required by itself. E.g.

```javascript
// Access within namesapce `europium`.
const europium = require('europium');
europium.util

// Or, required by itself.
const util = require('europium/util');
util === europium.util
```

Here are available sub moduless:
[view on single page](docs/all.md)

*   [europium.util](docs/util.md)
