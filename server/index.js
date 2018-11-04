import express from 'express';
import cors from 'cors';
import App from '../src/components/App';
import customMiddlewares from './customMiddlewares';
import { router as routerSocialPages } from './routes/routerSocialPages';
import { router as routerHome } from './routes/routerHome';

const app = express();

/* Enables cors */
app.use(cors());
/* Tells the app to look for static files in these directories */
app.use(express.static('public'));
/* Sets custom middlewares */
app.use(customMiddlewares);


app.get('/*', routerHome);
app.get('/*', routerSocialPages);
// app.get('*', (req, res, next) => {
//   const activeRoute = res.locals.activeRoute;

//   const promise = activeRoute.fetchInitialData
//     ? activeRoute.fetchInitialData(req.path)
//     : Promise.resolve();

//   promise.then((data) => {
//     res.send(PageGenerator.getPage(
//       {},
//       {title: 'page1'},
//       req.url
//     ));
//   }).catch(next);
// });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Server is listening on port: 3000');
});
