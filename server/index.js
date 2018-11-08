import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import customMiddlewares from './customMiddlewares';
import { router as routerSocialPages } from './routes/routerSocialPages';
import { router as routerHome } from './routes/routerHome';

/* Initializes express */
const app = express();

/* Enables cors */
app.use(cors());
/* Uses cookie parser middleware */
app.use(cookieParser());
/* Tells the app to look for static files in these directories */
app.use(express.static('public'));
/* Sets custom middlewares */
app.use(customMiddlewares);


app.get('/*', routerHome);
app.get('/*', routerSocialPages);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Server is listening on port: 3000');
});
