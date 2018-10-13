const test = require('tape')
const Psmitter = require('../psmitter.js').Psmitter

const myEmitter = new Psmitter()

test('check initial Psmitter', (t) => {
  t.plan(4)
  t.equal(typeof myEmitter, 'object')
  t.assert(myEmitter.hasOwnProperty('events'))
  t.equal(typeof myEmitter.events, 'object')
  t.equal(Object.keys(myEmitter).length, 1)
})

test('count listeners, events, ', (t) => {
  const myEventName = 'test an event'

  t.plan(3)
  myEmitter.on(myEventName, () => {})
  t.equal(myEmitter.countListeners(myEventName), 1)

  const totalEvents = myEmitter.getEvents()
  t.equal(totalEvents.length, 1)
  t.assert(totalEvents.includes(myEventName))
})

test('emit an event', (t) => {
  const myEventName = 'secondEventName',
    myEventData = 'eventData'

  t.plan(1)
  myEmitter
  .on(myEventName, (data) => t.equal(data, myEventData))
  .emit(myEventName, myEventData)
})

test('execute listener only once', (t) => {
  const myEventName = 'thirdEventName'
  let executionCounter = 0

  t.plan(1)
  myEmitter.once(myEventName, () => executionCounter++)
  myEmitter
  .emit(myEventName)
  .emit(myEventName)
  .emit(myEventName)

  t.equal(executionCounter, 1)
})

test('remove listener', (t) => {
  t.plan(2)
  const myEventName = 'fourEventName',
    myEventData = 'someData',
    myListener = (data) => t.equal(data, myEventData),
    myOtherListener = console.log

  myEmitter
    .on(myEventName, myListener)
    .on(myEventName, myOtherListener)
    .emit(myEventName, myEventData)
    .removeListener(myEventName, myListener)

  t.equal(myEmitter.getListeners(myEventName).length, 1)
})

test('remove all listeners', (t) => {
  t.plan(2)
  const myEventName = 'fiveEventName',
    myEventData = 'someData',
    myListener = (data) => t.equal(data, myEventData),
    myOtherListener = console.log

  myEmitter
    .on(myEventName, myListener)
    .on(myEventName, myOtherListener)
    .emit(myEventName, myEventData)
    .removeAllListeners(myEventName)

  t.equal(myEmitter.getListeners(myEventName).length, 0)
})


test('has some listener', (t) => {
  t.plan(2)
  const myEventName = 'sixEventName',
    myEventData = 'someData',
    myListener = (data) => t.equal(data, myEventData),
    myOtherListener = console.log

  myEmitter
    .on(myEventName, myListener)
    .on(myEventName, myOtherListener)

  t.true(myEmitter.hasSomeListener(myEventName))

  myEmitter.removeAllListeners(myEventName)

  t.false(myEmitter.hasSomeListener(myEventName))
})
