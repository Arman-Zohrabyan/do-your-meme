import MiddlewaresHandler from './MiddlewaresHandler';
const mail = require("nodemailer").mail;

const customMiddlewares = (req, res, next) => {
  res.locals.language = MiddlewaresHandler.getLanguage(req, res);
  res.locals.activeRoute = MiddlewaresHandler.getActiveRoute(req);

  mail({
      from: "do-your-meme", // sender address
      to: "dedarm@mail.ru", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world ✔", // plaintext body
      html: "<b>Hello world ✔</b>" // html body
  });

  next();
};

export default customMiddlewares;
