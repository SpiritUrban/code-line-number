# code-line-number
 Determines the current line number in JavaScript

 
## Installing

Using npm:

```bash
$ npm install code-line-number
```

## Example

```js
const ln = require('code-line-number');
// or
import ln from 'code-line-number';

ln(2); // => 20
// ln(2: Is a depth level, can be 3 or other );
ln(2, 'report'); // => 20, more data in console/terminal
// You can use 'report' for watching call stack and choose depth level you need
```

