# Psmitter

[![Actual version published on NPM](https://badge.fury.io/js/psmitter.png)](https://www.npmjs.org/package/psmitter)
[![npm module downloads per month](http://img.shields.io/npm/dm/psmitter.svg)](https://www.npmjs.org/package/psmitter)
[![js-standard-style](https://cdn.rawgit.com/standard/standard/master/badge.svg)](http://standardjs.com)

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

### Api

#### on
Register a listener for one or more events
#### emit
Dispatch a event
#### once
Register a listener that will be executed only once
#### getEvents
get a list of event names in the current Psmitter instance
#### getListeners
Get a listeners list binded to determinate event
#### countListeners
number of listeners registered to an event
#### removeListener
remove an listener of a determinate event
#### removeAllListeners
Remove all listeners of a event
#### removeLastListener
Remove the last listener of an event
#### hasSomeListener
Check if exists almost one listener registered to a event
