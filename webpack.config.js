const serverConfig = require('./webpack.server');
const browserConfig = require('./webpack.client');


module.exports = [browserConfig, serverConfig];
