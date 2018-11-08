import Express from 'express';
import PageGenerator from '../classes/PageGenerator';
// import Promise from 'bluebird';


const router = Express.Router();

router.get('/', home);


function home(req, res) {
  const app = {};

  const activeRoute = res.locals.activeRoute;
  app.language = res.locals.language;

  res.send(PageGenerator.getPage(
    { app },
    activeRoute.config,
    req.url
  ));
};

export { router };
