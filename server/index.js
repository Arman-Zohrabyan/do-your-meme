import express from 'express';
import cors from 'cors';
import React from 'react';
import serialize from 'serialize-javascript';
import App from '../src/components/App';
import customMiddlewares from './customMiddlewares';
import PageGenerator from './PageGenerator';

const app = express();

app.use(cors());
app.use(express.static('public'));

/* Sets custom middlewares */
app.use(customMiddlewares);



app.get('*', (req, res, next) => {
  const activeRoute = res.locals.activeRoute;

  const promise = activeRoute.fetchInitialData
    ? activeRoute.fetchInitialData(req.path)
    : Promise.resolve();

  promise.then((data) => {
    res.send(PageGenerator.getPage(
      {},
      data,
      req.url
    ));
  }).catch(next);
});

app.listen(3000, () => {
  console.log('Server is listening on port: 3000');
});
