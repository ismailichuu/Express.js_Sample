import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import routes from './routes/routes.js';
import session from 'express-session';
import nocache from 'nocache';
const app = express();
const port = process.env.PORT || 8000;

//filepath setting
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//session
app.use(session({
    secret: 'batman',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false,
        httpOnly: true,
        maxAge: 1000 * 60 * 60
    }
}));

//nocache
app.use(nocache());

//json 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//static folder
app.use(express.static(path.join((__dirname, 'public'))));

//Register view engine
app.set('view engine', 'ejs');

//routers
app.use('/', routes);


//Server listening
app.listen(port, () => console.log(`Server running at ${port}`));