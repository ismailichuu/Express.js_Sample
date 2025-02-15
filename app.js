import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';
import card from './routes/card.js';
const app = express();
const port = process.env.PORT || 8000;


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//static folder
app.use(express.static(path.join((__dirname, 'public'))));

//Register view engine
app.set('view engine', 'ejs');

//routers
app.use('/', card);

//Server listening
app.listen(port, () => console.log(`Server running at ${port}`));