'use strict';

const os = require('os');

let process = require('process');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
process.env.NODE_ENV = process.env.NODE_ENV || 'PROD';
process.env.UV_THREADPOOL_SIZE = process.env.UV_THREADPOOL_SIZE ||  36;

let http = require('http');
http.globalAgent.maxSockets = Infinity;

const fs = require('fs');
const packageJSON = JSON.parse(fs.readFileSync('package.json', 'utf8'));

const init = (app, rootDirectoryPath) => {

    app.locals.info = {
        environment: process.env.NODE_ENV,
        name: packageJSON.name,
        version: packageJSON.version,
        port: (process.env.NODE_PORT || 8080),
        host: (process.env.NODE_HOST || '0.0.0.0'),
        platform: process.platform,
        release: os.release(),
        processor: process.arch,
        numCPUs: os.cpus().length,
        nodeVersion: process.version,
        rootPath: rootDirectoryPath
    };
}


module.exports.init = init;