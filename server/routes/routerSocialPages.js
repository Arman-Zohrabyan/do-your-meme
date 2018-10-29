import Express from 'express';
import PageGenerator from '../classes/PageGenerator';
// import Promise from 'bluebird';


const router = Express.Router();

router.get('/vkontakte', vkontakte);
router.get('/facebook', facebook);


function vkontakte(req, res) {
  const activeRoute = res.locals.activeRoute;

  res.send(PageGenerator.getPage(
    {},
    activeRoute.config,
    req.url
  ));
};

function facebook(req, res) {
  const activeRoute = res.locals.activeRoute;

  res.send(PageGenerator.getPage(
    {},
    activeRoute.config,
    req.url
  ));
};

export { router };
