//npm - global command, comes with node
// npm --version

// local dependency - use it in any project
// npm install -g <packageName>
// sudo install -g <packageName> (mac)

//package.json - manifest file (store important info about project/package)
//manual approach (create package.json in the root, create properites etc)
//npm init (step by step, enter to skip)
// npm init  -y(everything default)

const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)
console.log("hello people")