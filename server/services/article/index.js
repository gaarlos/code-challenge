import express from 'express';
import articleApi from './entry-points/articleAPI';

const router = express.Router();

router.use('/article', articleApi);

export default router;
