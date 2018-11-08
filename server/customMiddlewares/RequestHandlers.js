import { matchPath } from 'react-router-dom';
import geoip from 'geoip-lite';
import requestIp from 'request-ip';
import routes from '../../src/routes';

class RequestHandlers {
  static getActiveRoute = (req) => routes.find((route) => matchPath(req.url, route)) || {}

  static getLanguage = (req) => {
    const userIp = requestIp.getClientIp(req);
    const geo = geoip.lookup(userIp) || {};
    if (geo.country) {
      return geo.country.toLowerCase();
    }
    return 'en';
  }
}

export default RequestHandlers;
