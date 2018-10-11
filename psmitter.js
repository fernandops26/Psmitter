/**
 * @name Psmitter
 * @description Usefull event emitter for Browser
 * @author Fernando Palacios <jf.palacios.sz@gmail.com>
 * @license MIT
 */
(function (context) {
  'use strict'

  /**
   * Psmitter
   * @constructor
   * @api public
   */
  const Psmitter = function () {
    this.events = {}
  }

  /**
   * Register a listener for one or more events
   * @param  {string, array}  eventNames  event's to listen
   * @param  {Function}       fn          callback function to execute
   * @return {Psmitter}                   current Psmitter instance
   * @api public
   */
  Psmitter.prototype.on = function (eventNames, fn) {
    let toListen = eventNames
    if (!Array.isArray(eventNames)) {
      toListen = [toString(eventNames)]
    }

    for (let i = 0; i < toListen.length; i++) {
      const event = toString(toListen[i])
      if (!this.events[event]) {
        this.events[event] = []
      }

      this.events[event].push(fn)
    }

    return this
  }

  /**
   * Dispatch a event
   * @param  {string}    eventName  name of event
   * @param  {mixed}     data       data for send when the event is executed
   * @return {Psmitter}             current Psmitter instance
   * @api public
   */
  Psmitter.prototype.emit = function (eventName, data) {
    eventName = toString(eventName)
    if (!this.events[eventName]) {
      return false
    }

    const funcs = this.events[eventName]

    for (let i = 0; i < funcs.length; i++) {
      const fn = funcs[i] || function () {}

      if (isFunction(fn)) {
        fn(data)
      } else {
        fn.fn(data)
        funcs.splice(i, 1)
        i--
      }
    }

    return this
  }

  /**
   * Register a listener that will be executed only once
   * @param  {string, array} eventName event's to listen
   * @param  {Function} fn        callback function to execute
   * @return {[type]}             current Psmitter instance
   * @api public
   */
  Psmitter.prototype.once = function (eventName, fn) {
    return this.on(eventName, { fn: fn })
  }

  /**
   * Get a list of event names in the current Psmitter instance
   * @return {array} array of event names
   * @api public
   */
  Psmitter.prototype.getEvents = function () {
    return Object.keys(this.events)
  }

  /**
   * Get a listeners list bind to determinate event
   * @param  {string} eventName name of event
   * @return {array}           list of listeners
   * @api public
   */
  Psmitter.prototype.getListeners = function (eventName) {
    eventName = toString(eventName)
    if (!this.events[eventName]) {
      return []
    }

    const clearedListeners = this.events[eventName].map(function (fn) {
      if (!isFunction(fn)) {
        return fn.fn
      }

      return fn
    })

    return clearedListeners
  }

  /**
   * Number of listeners registered to an event
   * @param  {string} eventName name of event
   * @return {integer}          number of listeners
   * @api public
   */
  Psmitter.prototype.countListeners = function (eventName) {
    eventName = toString(eventName)
    if (!this.events[eventName]) {
      return false
    }

    return this.events[eventName].length
  }

  /**
   * Remove an listener of a determinate event
   * @param  {string}   eventName name of event
   * @param  {Function} listener  callback to remove
   * @return {Psmitter}           current Psmitter instance
   * @api public
   */
  Psmitter.prototype.removeListener = function (eventName, listener) {
    eventName = toString(eventName)
    if (this.events[eventName]) {
      let funcs = this.events[eventName]

      for (let i = 0; i < funcs.length; i++) {
        if (!isFunction(funcs[i])) {
          funcs[i] = funcs[i].fn
        }

        if (funcs[i] === listener) {
          funcs.splice(i, 1)
        }
      }
    }

    return this
  }

  /**
   * Remove all listeners of a event
   * @param  {string}   eventName name of event
   * @return {Psmitter}           current Psmitter instance
   * @api public
   */
  Psmitter.prototype.removeAllListeners = function (eventName) {
    delete this.events[toString(eventName)]
  }

  /**
   * Remove the last listener of an event
   * @param  {string} eventName name of event
   * @api public
   */
  Psmitter.prototype.removeLastListener = function (eventName) {
    eventName = toString(eventName)
    if (this.events[eventName]) {
      this.events[eventName].length > 1 ? this.events[eventName].pop() : this.removeAllListeners(eventName)
    }
  }

  /**
   * Check if exists almost one listener registered to a event
   * @param  {string} eventName name of event
   * @return {boolean}          return `true` if exists some listener registered, otherwise `false`
   * @api public
   */
  Psmitter.prototype.hasSomeListener = function (eventName) {
    eventName = toString(eventName)
    return !!this.events[eventName] && this.events[eventName].length > 0
  }

  /**
   * Check if value is function
   * @param  {mixed}    fn  some value for check
   * @return {boolean}      return `true` if value is a function otherwise return `false`
   * @api private
   */
  function isFunction (fn) {
    return {}.toString.call(fn) === '[object Function]'
  }

  /**
   * Convert any value to string
   * @param  {mixed} value any param
   * @return {string}      return the value in string format
   * @api private
   */
  function toString(value) {
    return `${value}`
  }

  /**
   * Psmitter instance
   * check if already exist a Psmitter instance otherwise create one
   */
   if (typeof define === 'function' && define.amd) {
     define(function() {
       return Psmitter
     });
   } else {
     context.Psmitter = Psmitter
   }
})(this)
