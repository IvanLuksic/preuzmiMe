const {callLoaders} = require('./loaders/index');
const generatelink = require('./services/generatelink')


console.log(generatelink());

callLoaders();