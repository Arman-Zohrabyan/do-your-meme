import { matchPath } from 'react-router-dom';
import routes from '../../src/routes';

class RequestHandlers {
  static getActiveRoute = (req) => routes.find((route) => matchPath(req.url, route)) || {}
}

export default RequestHandlers;