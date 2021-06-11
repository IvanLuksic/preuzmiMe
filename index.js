const {callLoaders} = require('./loaders/index');
const generatelink = require('./services/generatelink');
const encrypt = require('./services/encrypt');
const deleteFile = require('./services/delete');

console.log(encrypt('password'));
console.log(generatelink());

deleteFile('aa');

callLoaders();