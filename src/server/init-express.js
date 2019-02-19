'use strict';

const helmet = require('helmet');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logs = require('./log');
const path = require('path');

// TODO: for any non-api route, redirect to / and set referrer to path 
// requested by user and let the app decide if it is a 404 or not based
// on the route maps

const logRouteHits = function(req, res, next){

    //
    // log all routes hits that aren't health checks...
    //
    //
    // TODO: Log requesting ip...
    //
    if (req.path != '/api/hc') {
      logs.info('Request: ', req.method + ': ' + req.path);
    }
  
    next();
  }
  
  const fixDoubleSlashes = function(req, res, next){
    //
    // fix double slashes in routes...
    //
    req.url = req.url.replace(/[/]+/g, '/');
  
    next();
  
  }

const init = (app, express) => {

    app.use(cookieParser())
    app.use(express.static(path.resolve(app.locals.info.rootPath) + '/dist'));
    app.use(bodyParser.json()); // support json encoded bodies
    app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
    app.use(helmet()); // enforce various security at header level
    app.use(compression());

    //
    // for any request, we want to do a few things, comments in funcs explain them...
    //
    app.use(logRouteHits, fixDoubleSlashes);

}

module.exports.init = init;