import express from 'express';
import { fetchData } from '../middleware/cardMiddle.js';
const router = express.Router();

router.get('/', fetchData, (req, res) => {
    res.render('cards',{data : req.data});
});

export default router;