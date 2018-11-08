import RequestHandlers from './RequestHandlers';

const customMiddlewares = (req, res, next) => {
  res.locals.language = RequestHandlers.getLanguage(req);
  res.locals.activeRoute = RequestHandlers.getActiveRoute(req);

  next();
};

export default customMiddlewares;
