// add healthcheck route
// system end point that returns details.  make it secure behind a token

'use strict';

const fs = require('fs');
let indexPage = null;

//TODO:  make sure you have health check best practices in Here
const healthCheck = function(req, res, next){
  //res.status(200).json(app.locals.info);
  res.status(200).json({status:"ok"});
}

const returnIndexPage = function(req, res, next){
  //
  // if we are in dev mode, then always return off disk synchronously, if
  // prod then return the cache'd version
  //
  if (req.app.locals.info.environment == "DEV") {
    indexPage = fs.readFileSync(req.app.locals.info.rootPath + '/' + 'index.html', 'utf8');
  } 
  res.status(200).send(indexPage);
  
}

const resolve = (app) => {
  indexPage = fs.readFileSync(app.locals.info.rootPath + '/' + 'index.html', 'utf8');
  app.get('/', returnIndexPage);
  app.get('/api/hc', healthCheck);
  // 
  // if we fall through and have not processed a route, then
  // return the index page. this is the equivalent of returning
  // 404. in a single page app we want to process the 404 on the client side...
  //
  app.get('*', returnIndexPage);
}

module.exports.resolve = resolve;


//var fourOhFour = fs.readFileSync(__dirname + '/' + '404.html', 'utf8');





/*
const returnFourOhFourPage = function(req, res, next){
  logs.warn('404');  // TODO, flesh this out more ???
  res.status(404).send(fourOhFour);
} */





// TODO:  do more route mapping like this:

/*

app.get('/users', user.list);
app.all('/user/:id/:op?', user.load);
app.get('/user/:id', user.view);
app.get('/user/:id/view', user.view);
app.get('/user/:id/edit', user.edit);
app.put('/user/:id/edit', user.update);

*/




