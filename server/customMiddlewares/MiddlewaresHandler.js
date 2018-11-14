import { matchPath } from 'react-router-dom';
import geoip from 'geoip-lite';
import requestIp from 'request-ip';
import routes from '../../src/routes';
import languages from '../../config/languages';

class MiddlewaresHandler {
  static getActiveRoute = (req) => routes.find((route) => matchPath(req.url, route)) || {}

  static languageAction = (req) => {
    const userIp = requestIp.getClientIp(req);
    const geo = geoip.lookup(userIp) || {};
    if (geo.country) {
      const userLanguage = geo.country.toLowerCase();
      const supportedLanguages = Object.keys(languages);
      if (supportedLanguages.includes(userLanguage)) {
        return userLanguage;
      }
    }
    return 'en';
  }

  static getLanguage = (req, res) => {
    const supportedLanguages = Object.keys(languages);
    const cookieLanguage = req.cookies.language;

    if (cookieLanguage && supportedLanguages.includes(cookieLanguage)) {
      return cookieLanguage;
    }
    const language = MiddlewaresHandler.languageAction(req);
    res.cookie('language', language, { expire: new Date()+30*24*60*60 });
    return language;
  }
}

export default MiddlewaresHandler;
