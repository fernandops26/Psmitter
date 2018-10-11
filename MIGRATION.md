#### Migration
This document contains information about how to smoothly migrate the things from a version to another version.

### `0.1.1` to `1.0.0`

### Usage
Now in this version, we can to create custom instances based in Psmitter class.

#### Before

```html
<script src="psmiter.min.js" type="text/javascript"></script>
```
or
```js
var vendors = [
  ...,
  'psmitter'
]
```
or in requireJs
```js
require('psmitter', function (Psmitter) {
  return Psmitter
})
```
The Psmitter instance was used directly
```js
Psmitter.on('hello', console.log)
```

#### After

**with `vendors` or `<script>` tag**

```js
let myEmitter = new Psmitter()
myEmitter.on('hello', console.log)
```

**with `requirejs`**
```js
const Psmitter = require('psmitter').Psmitter

let myEmitter = new Psmitter()
myEmitter.on('hello', console.log)
```
