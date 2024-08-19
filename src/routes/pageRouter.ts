import express from 'express';
import { createPage, deletePage, scrapePage, getAllPages, getPageById } from '../contoller/pageController';
const router = express.Router();

router.get('/', getAllPages);
router.get("/:pageId", getPageById)
router.post('/add', createPage);
router.delete('/delete', deletePage);
router.post('/scrape/:pageId', scrapePage);

export default router;