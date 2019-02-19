'use strict';

const express = require('express');
let app = express();
const init = require('./src/server/init');
const initExpress = require('./src/server/init-express');
const cluster = require('./src/server/cluster');
const logs = require('./src/server/log');
const routes = require('./src/server/routes');


//TODO:  add morgan http request logger...
logs.info('Application is initializing...');
init.init(app, __dirname);
logs.info(app.locals.info);
cluster.start(app);
initExpress.init(app, express);
routes.resolve(app);

//TODO:  make sure you are responding to system exit correctly
process.on('uncaughtException', err => {
    logs.error('something went wrong!', err);

    //server.close(() => process.exit(1));
});