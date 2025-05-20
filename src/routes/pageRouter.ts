import express from 'express';
import { createPage, deletePage, scrapePage, getAllPages, getPageById } from '../controller/pageController';
import verifyJWT from '../middleware/verifyJWT';
const router = express.Router();

router.get('/', verifyJWT, getAllPages);
router.get("/:pageId",verifyJWT, getPageById)
router.post('/add', verifyJWT, createPage);
router.delete('/delete', verifyJWT, deletePage);
router.post('/scrape/:pageId', scrapePage);

export default router;


