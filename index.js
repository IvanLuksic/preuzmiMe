const {callLoaders} = require('./loaders/index');
const generatelink = require('./services/generatelink');
const encrypt = require('./services/encrypt');

console.log(encrypt('password'));
console.log(generatelink());

callLoaders();