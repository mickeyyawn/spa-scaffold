'use strict';

const util = require('util');
const process = require('process');
const logs = require('./log');
const cluster = require('cluster');


const start = (app) => {

    if (cluster.isMaster) {
        // Fork workers.
        for (var i = 0; i < app.locals.info.numCPUs; i++) {
          cluster.fork();
        }
      
        cluster.on('exit', (worker, code, signal) => {
          console.log(util.format('Worker %s died...', worker.process.pid));
          //
          // spin up another process since this one decided to exit
          //
          cluster.fork();
        });
      
      } else {
      
        app.listen(app.locals.info.port, app.locals.info.host);
        logs.info(util.format('Server running at http://%s:%s/' + ' PID: %s', 
        app.locals.info.host, app.locals.info.port, cluster.worker.process.pid));
        process.title = util.format('Node - %s', app.locals.info.name);
      
      }

}

module.exports.start = start;