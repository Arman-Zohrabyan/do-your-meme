import MiddlewaresHandler from './MiddlewaresHandler';

const customMiddlewares = (req, res, next) => {
  res.locals.language = MiddlewaresHandler.getLanguage(req, res);
  res.locals.activeRoute = MiddlewaresHandler.getActiveRoute(req);

  next();
};

export default customMiddlewares;
