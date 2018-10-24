import RequestHandlers from './RequestHandlers';

const customMiddlewares = (req, res, next) => {
  res.locals.activeRoute = RequestHandlers.getActiveRoute(req);

  next();
};

export default customMiddlewares;