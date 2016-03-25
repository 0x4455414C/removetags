## Escape Square Brackets
Escapes square brackets in a string, useful for queries and other such things.
## Install
```bash
$ npm install removetags
```
## Usage
	removetags(string)
**In JS**
```js
var removetags = require('removetags');
input = "hello <em>world</em>, how are you?";
input = removetags(input);
```
**Output**
```
hello world, how are you?
```
