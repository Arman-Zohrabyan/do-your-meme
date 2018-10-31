import RequestHandlers from './RequestHandlers';

const customMiddlewares = (req, res, next) => {
  res.locals.activeRoute = RequestHandlers.getActiveRoute(req);
  res.locals.language = RequestHandlers.getLanguage(req);

  next();
};

export default customMiddlewares;
