# Psmitter

[![js-standard-style](https://cdn.rawgit.com/standard/standard/master/badge.svg)](http://standardjs.com)

[![Actual version published on NPM](https://badge.fury.io/js/psmitter.png)](https://www.npmjs.org/package/psmitter)
[![npm module downloads per month](http://img.shields.io/npm/dm/psmitter.svg)](https://www.npmjs.org/package/psmitter)

### An usefull event emitter for the Browser


## Getting started

### Install

#### Via `NPM`
```shell
npm install psmitter --save
```

### Usage

You can use this module of many ways:

- By require

More info here [AMD](http://requirejs.org/docs/whyamd.html#amd)

```
require('psmitter', function (Psmitter) {
  return Psmitter
})
```

- By minFile:

```
<script src="psmiter.min.js" type="text/javascript"></script>
```

- By webpack

Only add just with the others vendors files
```
var vendors = [
  ...,
  'psmitter'
]
```

### Documentation

#### `on(event | [eventA, eventB], fn)`
Register a listener for one or more events

##### Params

- **event | [eventA, eventB]** - `string|Array`: Event name or array of events names
- **fn** - `function` : Callback function

#### `emit(event, data)`
Dispatch a event

##### Params
- **event** - `string`: Event name for dispatch
- **data** - `mixed`: Data for send when the event is emitted.

#### `once(event | [eventA, eventB], fn)`
Register a listener that will be executed only once

##### Params

- **event | [eventA, eventB]** - `string|Array`: Event name or array of events names
- **fn** - `function` : Callback function


#### `getEvents()`
Get a list of event names in the current Psmitter instance

##### Return

- **array** : The list of events names


#### `getListeners(event)`
Get a listeners list binded to determinate event

##### Params

- **event** - `string|Array`: Event name

##### Return

- **array** : The list of listeners


#### `countListeners(event)`
Number of listeners registered to an event

##### Params

- **event** - `string`: Event name

##### Return

- **number** : Number of listeners registered

#### `removeListener(event, fn)`

Remove an listener of a determinate event
##### Params

- **event** - `string`: Event name
- **fn** - `function` : Callback function to remove

#### `removeAllListeners(event)`
Remove all listeners of a event

##### Params

- **event** - `string`: Event name


#### `removeLastListener(event)`
Remove the last listener of an event

##### Params

- **event** - `string`: Event name

#### `hasSomeListener(event)`
Check if exists almost one listener registered to a event

##### Params

- **event** - `string`: Event name

##### Return

- **boolean** : Return `true` if contains some listener, otherwise return `false`
