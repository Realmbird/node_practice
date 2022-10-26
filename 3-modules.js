// CommonJS, every file is module (by default)
//Modules

// use `/~ backtick INSTEAD OF '/"
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
// console.log(data)
require('./7-mind-grenade')
console.log(names)
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)