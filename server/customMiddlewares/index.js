// import nodemailer from 'nodemailer';
import MiddlewaresHandler from './MiddlewaresHandler';
// import mailerData from '../../config/mailerData.json';

// const transporter = nodemailer.createTransport({
//   host: 'smtp.mail.ru',
//   port: 465,
//   auth: {
//     user: mailerData.login,
//     pass: mailerData.password
//   }
// });

const customMiddlewares = (req, res, next) => {
  res.locals.language = MiddlewaresHandler.getLanguage(req, res);
  res.locals.activeRoute = MiddlewaresHandler.getActiveRoute(req);

  // const mailOptions = {
  //   from: mailerData.login,
  //   to: mailerData.login,
  //   subject: 'New user',
  //   html: MiddlewaresHandler.getMailContent(req)
  // };

  // transporter.sendMail(mailOptions, function(error, info){
  //   if (error) {
  //     console.log(error);
  //   } else {
  //     console.log('Email sent: ' + info.response);
  //   }
  // });

  next();
};

export default customMiddlewares;
